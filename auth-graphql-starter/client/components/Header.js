import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from './../queries/currentUser';
import mutation from './../mutations/logout';
import { Link } from 'react-router';

class Header extends Component {

  onLogoutClick() {
    this.props.mutate({
        refetchQueries: [{ query }]
    }).then()
  }


  renderButtons() {
    const { loading, user } = this.props.data;

    if(loading) return  (<div className="progress">
                                                <div className="indeterminate"></div>
                                         </div>)
    if(user) {
        return <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
    } else {
        return (
            <div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </div>
        )
    }
    
  }
  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo left">
                Home<i className="material-icons">home</i>
            </Link>
            <ul className="right">
                {this.renderButtons()}
            </ul>
        </div>
      </nav>
    )
  }
}

export default graphql(mutation)(
    graphql(query)(Header)
);