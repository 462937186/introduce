import React from 'react';
import Prism from 'prismjs';

export default class StyleEditor extends React.Component<
  { children?: React.ReactNode; code: any },
  { styleWrapper: any }
> {
  toBottom = () => {
    if (this.styleWrapper) {
      this.styleWrapper.scrollTop = 1000000;
    }
  };

  saveRef = (child: any) => (this.styleWrapper = child);
  styleWrapper: any;

  render() {
    const { code } = this.props;
    const highlightCode = Prism.highlight(code, Prism.languages.css, 'css');
    return (
      <div ref={this.saveRef} className="styleEditor">
        <style dangerouslySetInnerHTML={{ __html: code }}></style>
        <pre dangerouslySetInnerHTML={{ __html: highlightCode }}></pre>
      </div>
    );
  }
}
