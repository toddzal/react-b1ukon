import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getNotes, saveNotes, deleteNote } from '../actions/notesAction';
import { getUser } from '../actions/userAction';
import { Link } from 'react-router-dom';
import {
  Form,
  Header,
  Grid,
  Segment,
  Button,
  Container,
  List
} from 'semantic-ui-react';
import SideBarNav from '../routes/SideBarNav';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      completed: false
    }
    //bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
    this.onRowClick = this.onRowClick.bind(this);
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
      uid: this.props.user.uid
    }

    this.props.saveNotes(note);
    this.setState({
      title: "",
      body: "",
      completed: false,
    });
  }

  onRowClick(key){
    var loc = ("/" + key);
    this.props.history.push(loc);
  }

  //Render Notes
  renderNotes() {
    return _.map(this.props.notes, (note, key) => {
      return (

        <List.Item key={key} >
          <Grid>
            <Grid.Row>
              <Grid.Column width={3} >
                <List.Header>
                  {note.date.substring(4, 6) + "/" +
                    note.date.substring(6, 8) + "/" +
                    note.date.substring(0, 4)}
                </List.Header>
              </Grid.Column>
              <Grid.Column width={10} textAlign='left'>
                <List.Header >{note.title} </List.Header>
                <List.Description >{note.body}</List.Description>
              </Grid.Column>
              <Grid.Column width={3}>
                <Button floated='right' size='mini' onClick={() => this.props.deleteNote(key)}>Delete</Button>
                <Button floated='right' size='mini'style={styles.buttonStyle}>
                  <Link to={`/${key}/edit`}>Update</Link>
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </List.Item>

      )
    });
  }

  render() {
    return (

      <div className='login-form' style={styles.containerStyle}>
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 550 }}>

            <Header as='h2' textAlign='center'>
              Activity Feed
            </Header>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  label='Title'
                  placeholder='Title'
                  onChange={this.handleChange}
                  type="text"
                  name="title"
                  value={this.state.title}
                />
                <Form.TextArea
                  label='Description'
                  placeholder='Tell me about your day...'
                  onChange={this.handleChange}
                  type="text"
                  name="body"
                  value={this.state.body}
                />
                <Button fluid size='large'>
                  Save
            </Button>
              </Segment>
            </Form>

            <List divided relaxed>
              {this.renderNotes()}
            </List>

          </Grid.Column>
        </Grid>
      </div>)
  }
}

function mapStateToProps(state, ownProps) {
  return {
    notes: state.notes,
    user: state.user
  }
}

const styles = {
  containerStyle: {
    marginTop: 48,
  },
  buttonStyle: {
    marginTop: 4,
    width: 66
  }
}

export default connect(mapStateToProps, { getNotes, saveNotes, deleteNote, getUser })(App);
