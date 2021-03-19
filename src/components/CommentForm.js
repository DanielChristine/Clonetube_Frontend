import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.scss';

class CommentForm extends Component {

  render() {
    return (
      <div classname='CommentForm'>
      <form>
  <fieldset>
    <legend>Legend</legend>
    <div className="form-group row">
      <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="text" readonly="" className="form-control-plaintext" id="staticEmail" value="email@example.com" />
      </div>
    </div>
    <div className="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
    </div>
    </fieldset>
    </form></div>
    );
  }
}
export default CommentForm;
