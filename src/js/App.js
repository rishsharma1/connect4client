import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import '../css/App.css';
import { setUserName } from '../js/actions/userActions'


const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (username) => dispatch(setUserName(username))
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.updateUserName(event.target.value)
  }

  handleSubmit(event) {
    alert('A username was submitted: '+this.state.value);
    event.preventDefault(); 
  }


  render() {
    return (
      <div className="App">
        
        <div class="div">
          <Button outline color="secondary" size="lg" onClick={() => this.props.history.push('/play')}>Play Online</Button>
        </div>
        <div class="div">
          <Button outline color="secondary" size="lg" onClick={() => window.location.href = '/play'}>Play AI</Button>
        </div>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Input type="username" name="userName" id="userName" placeholder="UserName" onChange={this.handleChange}/>
            </FormGroup>
          </Form>
        </div>
      </div>
      
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
