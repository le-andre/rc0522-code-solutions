import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.htmlToggle = this.htmlToggle.bind(this);
    this.cssToggle = this.cssToggle.bind(this);
    this.jsToggle = this.jsToggle.bind(this);
    this.state = { activated: false, html: false, css: false, js: false };
  }

  htmlToggle() {
    if (this.state.activated === true && this.state.html === false) {
      this.setState({ html: true, css: false, js: false });
    } else {
      this.setState({ activated: !this.state.activated, html: !this.state.html, css: false, js: false });
    }

  }

  cssToggle() {
    if (this.state.activated === true && this.state.css === false) {
      this.setState({ css: true, html: false, js: false });
    } else {
      this.setState({ activated: !this.state.activated, css: !this.state.css, html: false, js: false });
    }
  }

  jsToggle() {
    if (this.state.activated === true && this.state.js === false) {
      this.setState({ js: true, html: false, css: false });
    } else {
      this.setState({ activated: !this.state.activated, js: !this.state.js, html: false, css: false });
    }
  }

  render() {
    let htmlTab = 'tab';
    let htmlContent = 'view hidden';
    let cssTab = 'tab';
    let cssContent = 'view hidden';
    let jsTab = 'tab';
    let jsContent = 'view hidden';
    if (this.state.activated === false) {
      htmlContent = 'view hidden';
      cssContent = 'view hidden';
      jsContent = 'view hidden';
    }
    if (this.state.activated === true && this.state.html === true) {
      htmlTab = 'tab active';
      htmlContent = 'view ';
    }
    if (this.state.activated === true && this.state.css === true) {
      cssTab = 'tab active';
      cssContent = 'view ';
    }

    if (this.state.activated === true && this.state.js === true) {
      jsTab = 'tab active';
      jsContent = 'view ';
    }

    return (
      <div className="container">
          <div onClick={this.htmlToggle} className={htmlTab} data-view="html">Hypertext Markup Language</div>
            <div className={htmlContent} data-view="html">
              <p>
                Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web
                browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as
                JavaScript.
              </p>
            </div>
          <div onClick={this.cssToggle} className={cssTab} data-view="css">Cascading Style Sheets</div>
            <div className={cssContent} data-view="css">
              <p>
                Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a
                markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and
                JavaScript.
              </p>
            </div>
          <div onClick={this.jsToggle} className={jsTab} data-view="js">JavaScript</div>
          <div className={jsContent} data-view="js">
            <p>
              JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript
              specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket
              syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
            </p>
          </div>
        </div>
    );
  }
}
