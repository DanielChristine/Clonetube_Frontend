import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.scss";

class CommentForm extends Component {
  render() {
    return (
      <div className="CommentForm">
        <form>
          <fieldset>
            <legend>Legend</legend>

            <div className="form-group">
              <label>Username</label>
              <input
                type="string"
                className="form-control"
                id="username"
                aria-describedby="username"
                placeholder="username"
              />
            </div>
            <div className="form-group">
              <label>Comment</label>
              <input
                type="string"
                className="form-control"
                id="comment"
                placeholder="comment"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default CommentForm;
