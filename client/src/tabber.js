import React, { Component } from 'react';
import Form from './form.js';
import About from './about.js';

class Tabber extends Component {
  constructor (props) {
    super();
    this.state = {
      isAboutHidden: true,
      isFormHidden: false
    };
  }

  toggleAbout () {
    this.setState({
      isAboutHidden: false,
      isFormHidden: true
    })
  }

  toggleForm () {
    this.setState({
      isAboutHidden: true,
      isFormHidden: false
    })
  }

  render() {
    return (
      <div className="tabContainer">
        <button
          className="emailTab"
          type="submit"
          onClick={this.toggleForm.bind(this)}
        >
          Send an email!
        </button>


        <button
          className="aboutTab"
          type="submit"
          onClick={this.toggleAbout.bind(this)}
        >
          About!
        </button>
        <div className='content'>
        {!this.state.isFormHidden && <Form />}
        {!this.state.isAboutHidden && <About />}
        </div>
      </div>
    );
  }
}

export default Tabber;
