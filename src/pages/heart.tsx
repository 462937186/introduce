import React from 'react';

export default class Heart extends React.Component<
  { children?: React.ReactNode; click: any },
  { dom: any }
> {
  onClick = () => {
    const { click } = this.props;
    click && click();
  };

  render() {
    return (
      <div className="heartWrapper">
        <div className="heart" onClick={this.onClick}></div>
        <div className="heart bounce" onClick={this.onClick}></div>
      </div>
    );
  }
}