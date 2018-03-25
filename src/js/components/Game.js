import React from 'react';
import ReactDOM from 'react-dom';
import {Button,UncontrolledAlert,Alert,Container,Row,Col } from 'reactstrap';
import '../../css/Game.css';
import * as socketActions from '../actions/socketActions'
import * as gameActions from '../actions/gameActions'
import { connect } from "react-redux";
import ReactLoading from 'react-loading'

// NUM_COLS is number of columns on the board
const NUM_COLS = 7
// PLAY_MOVE is message indentifier for playing a move
const PLAY_MOVE = "PLAY_MOVE"

function mapStateToProps(state) {
    return { 
        user: state.user,
        game: state.game
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      sendMessageToSocket: (msg) => dispatch(socketActions.sendMessage(msg)),
      invalidTurn: (invalid) => dispatch(gameActions.setInvalidTurn(invalid))
    }
  }

function Circle(props) {
    return (
         <Button className="circle" outline color="secondary" size="lg" onClick={props.onClick}>{props.value}</Button>
    );
}

function MakeAMove(props) {

    return (
         <p className="text-muted username">Make a move {props.userName}.</p>
    );
}

function GameStatus(props) {

    if(props.waiting) {

        return (
            <div>
                <ReactLoading type={"bubbles"} color="#D3D3D3" className="loadingMove" />
                <WaitingForPlayerMove turn={props.turn}/>
            </div>
        );

    }
    else if(props.gameFound) {

        return (
            <div>
                <Container>
                    <MakeAMove userName={props.userName}/>
                </Container>
            </div>
        );

    }

    return null

}

function WaitingForPlayer(props) {

    return (
        <p className="text-muted username">Waiting for a game...</p>
    );
}

function WaitingForPlayerMove(props) {

    return (
        <p className="text-muted username">Waiting for {props.turn} to make move...</p>
    );

}

function Loading(props) {
    return (
            <div>
                <Container>
                    <Row>
                        <ReactLoading type={"spin"} color="#000" className="loading"/>
                    </Row>
                    <Row>
                        <WaitingForPlayer/>
                    </Row>
                </Container>
            </div>
    );
}

class Board extends React.Component {

    constructor(props) {
        super(props)
    }

    renderCircle(i) {
        return (
            <Circle
            value={this.props.circles[i]}
            onClick={() => this.props.onClick(i)}
            />
        );
    }


    render() {

        if(!this.props.gameFound) {
            return (
                <Loading/>
            )
        }

        return (

        <div>
            <div>

                {this.renderCircle(0)}
                {this.renderCircle(1)}
                {this.renderCircle(2)}
                {this.renderCircle(3)}
                {this.renderCircle(4)}
                {this.renderCircle(5)}
                {this.renderCircle(6)}
            </div>
            <div>
                {this.renderCircle(7)}
                {this.renderCircle(8)}
                {this.renderCircle(9)}
                {this.renderCircle(10)}
                {this.renderCircle(11)}
                {this.renderCircle(12)}
                {this.renderCircle(13)}
            </div>
            <div>
                {this.renderCircle(14)}
                {this.renderCircle(15)}
                {this.renderCircle(16)}
                {this.renderCircle(17)}
                {this.renderCircle(18)}
                {this.renderCircle(19)}
                {this.renderCircle(20)}
            </div>
            <div>
                {this.renderCircle(21)}
                {this.renderCircle(22)}
                {this.renderCircle(23)}
                {this.renderCircle(24)}
                {this.renderCircle(25)}
                {this.renderCircle(26)}
                {this.renderCircle(27)}
            </div>
            <div>
                {this.renderCircle(28)}
                {this.renderCircle(29)}
                {this.renderCircle(30)}
                {this.renderCircle(31)}
                {this.renderCircle(32)}
                {this.renderCircle(33)}
                {this.renderCircle(34)}
            </div>
            <div >
                {this.renderCircle(35)}
                {this.renderCircle(36)}
                {this.renderCircle(37)}
                {this.renderCircle(38)}
                {this.renderCircle(39)}
                {this.renderCircle(40)}
                {this.renderCircle(41)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss() {
        this.props.invalidTurn(false)
    }

    handleClick(i) {
        const circles = this.props.game.game

        if(i > NUM_COLS - 1) {
            this.handleClick(i-NUM_COLS)
        }
        else {

            if(this.props.game.turn != this.props.user.userName) {
                this.props.invalidTurn(true)
            }
            else {
                this.props.invalidTurn(false)
                this.props.sendMessageToSocket({"Action": PLAY_MOVE, 
                                                "Content":{"Column":String(i), 
                                                "GameKey": this.props.game.key, 
                                                "UserName":this.props.user.userName}})
            }

        }

    }

    render () {
        return (

            <div>
                <Alert color="danger" isOpen={this.props.game.invalidTurn} toggle={this.onDismiss}>
                    Not your turn!
                </Alert>
                <GameStatus userName={this.props.user.userName} 
                            waiting={this.props.game.waitingForMove}
                            turn={this.props.game.turn}
                            gameFound={this.props.game.gameFound}
                />
                <div className="game">
                    <Board
                        circles={this.props.game.game}
                        gameFound={this.props.game.gameFound}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
            </div>

        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
