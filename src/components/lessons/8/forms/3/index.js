import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`enter valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  // your code is here
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      email: '',
      agreeCheckbox: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.email) {
      alert(`enter valid email first, please`);
    }

    if (this.state.agreeCheckbox) {
      alert(`email: ${this.state.email}`);
    } else {
      alert(`agree, please`);
    }
  };

  handleChangeInput = (event) => {
    this.setState({
      email: event.target.value,
    });
  }

  handleToggleCheckbox = (event) => {
    this.setState({
      agreeCheckbox: event.target.checked,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="email" value={this.state.email} onChange={this.handleChangeInput} />
          <input type="checkbox" checked={this.state.agreeCheckbox} onChange={this.handleToggleCheckbox}/>
          <button>Submit</button>
        </form>
      </>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
      <ControlledForm />
    </div>
  );
};

export default Task;
