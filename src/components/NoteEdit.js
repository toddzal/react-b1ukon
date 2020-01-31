import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {editNotes} from '../actions/notesAction';

class NoteEdit extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: this.props.note.title,
        body: this.props.note.body

      }
      //bind
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    //Handle change
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    //Handle submit
    handleSubmit(e) {
      var date = new Date();
      e.preventDefault();
      const note = {
        title: this.state.title,
        body: this.state.body,
        completed: false,
        date: (date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2)
          + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2)
          + ("0" + date.getSeconds()).slice(-2)),
        uid: this.props.uid
      }
  
      this.props.editNotes(this.props.match.params.id, note);
      this.setState({
        title: "",
        body: "",
        completed: false,
  
      });
      this.props.history.push('/');
    }
  
  
    render() {
      return (
  
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-sm-offset-3">
              <form onSubmit={this.handleSubmit}>
                <br />
                <div className="form-group">
                  <input onChange={this.handleChange}
                    type="text"
                    name="title"
                    value={this.state.title}
                    className="form-control no-border"
                    placeholder="Title..."
                    required />
                  <textarea
                    onChange={this.handleChange}
                    type="text"
                    name="body"
                    value={this.state.body}
                    className="form-control no-border"
                    placeholder="Body..."
                    required />
                </div>
                <div className="form-group">
                  <button className="btn btn-primary col-sm-12">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>)
    }
  }

function mapStateToProps(state, ownProps) {
    return {
        note: state.notes[ownProps.match.params.id],
        uid: state.user.uid
    };
}

export default connect(mapStateToProps,{editNotes})(NoteEdit);
