import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from "react-redux";
import '../../css/App.css';
import { setUserName } from '../../js/actions/userActions'
import { sendMessage, connect as connectSocket, disconnect} from '../../js/actions/socketActions'



const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName: (username) => dispatch(setUserName(username)),
    connectToSocket: () => dispatch(connectSocket()),
    sendMessageToSocket: (msg) => dispatch(sendMessage(msg))
  }
}

const mapStateToProps = function(state) {
  return {
    user: state.user
  }
}


class PlayOnlineButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this, this.props);
  }

  handleClick(props) {
    props.history.push('/play')
    this.props.sendMessageToSocket({"Action": "INIT", "Content":{"UserName":this.props.user.userName}})
  }

  render() {
    return (
      <div class="div">
      <Button outline color="secondary" type="button" size="lg" onClick={this.handleClick}>Play Online</Button>
      </div>
    )
  }
}

class PlayAIButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this, this.props);
  }

  handleClick(props) {
    props.history.push('/play')
    this.props.sendMessageToSocket({"Action": "INIT", "Content":{"UserName":this.props.user.userName}})
  }

  render() {
    return (
      <div class="div">
      <Button outline color="secondary" type="button" size="lg" onClick={this.handleClick}>Play AI</Button>
      </div>
    )
  }

}


class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.props.updateUserName(event.target.value)
  }

  handleSubmit(event) {
    window.alert('A username was submitted: '+this.state.value);
    event.preventDefault(); 
  }
  
  handleClick() {
    this.props.history.push('/play')
    
  }


  render() {
    this.props.connectToSocket()

    return (
      <div className="App">
        <Form>
          <FormGroup role="form">
            <PlayOnlineButton history={this.props.history} user={this.props.user} sendMessageToSocket={this.props.sendMessageToSocket}/>
            <PlayAIButton history={this.props.history} user={this.props.user} sendMessageToSocket={this.props.sendMessageToSocket}/>
            <Input type="username" name="userName" id="userName" placeholder="UserName" onChange={this.handleChange}/>
          </FormGroup>
        </Form>
      </div>
      
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
