import React, { Component } from 'react'
export default class Logout extends Component {

 logout = () => {
    localStorage.clear();
// you can also like localStorage.removeItem('Token');
    window.location.href = "/Login";
  }

  render() {
    return (
      <button onClick={Logout}>Logout</button>
    )
  }
}