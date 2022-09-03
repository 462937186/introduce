#!/bin/sh
# dokcer镜像相关参数
DOCKER_REGISTRY=462937186.github
IMAGE_NAME=introduce
VERSION=beta

# 方法入口
process() {
  # 应用打包
  echo ">>>>> Step1: 正在打包..."
  cd ../ && \
  npm install && \
  npm run build && \
  npm cache clean --force && rm -rf node_modules

  echo ">>>>> Step4: 返回docker目录"
  cd ./docker && pwd

  # 构建镜像
  echo ">>>>> Step5: 构建镜像"
  echo building "正在打包${IMAGE_NAME}:${VERSION}镜像..."
  docker build -t ${DOCKER_REGISTRY}/${IMAGE_NAME}:"${VERSION}" .
}

# 执行shell脚本
process
