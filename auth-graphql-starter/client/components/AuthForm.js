import React, { Component } from 'react'

class AuthForm extends Component {
  constructor(props) {
      super(props);

      this.state = { email: '', password: ''}
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s4">        
            <input
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
            />
            <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
            />
            { this.props.errors ?
                (<div className="errors">
                    {this.props.errors.map(err => <div key={err}>{err}</div>)}
                </div>)
                : null            
            } 

            <button className="btn">Submit</button>
        </form>        
      </div>
    )
  }
}

export default AuthForm;
