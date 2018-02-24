import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import '../css/Game.css';
import { connect } from "react-redux";


function mapStateToProps(state) {
    return { user: state.user}
}

function Circle(props) {
    return (
         <Button className="circle" outline color="secondary" size="lg" onClick={props.onClick}>{props.value}</Button>
    );
}

function UserName(props) {

    return (
        <p className="text-muted username">{props.userName}</p>
    );
}



class Board extends React.Component {

    renderCircle(i) {
        return (
            <Circle
            value={this.props.circles[i]}
            onClick={() => this.props.onClick(i)}
            />
        );
    }


    render() {
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
                {this.renderCircle(7)}
            </div>
            <div>
                {this.renderCircle(8)}
                {this.renderCircle(9)}
                {this.renderCircle(10)}
                {this.renderCircle(11)}
                {this.renderCircle(12)}
                {this.renderCircle(13)}
                {this.renderCircle(14)}
                {this.renderCircle(15)}
            </div>
            <div>
                {this.renderCircle(16)}
                {this.renderCircle(17)}
                {this.renderCircle(18)}
                {this.renderCircle(19)}
                {this.renderCircle(20)}
                {this.renderCircle(21)}
                {this.renderCircle(22)}
                {this.renderCircle(23)}
            </div>
            <div>
                {this.renderCircle(24)}
                {this.renderCircle(25)}
                {this.renderCircle(26)}
                {this.renderCircle(27)}
                {this.renderCircle(28)}
                {this.renderCircle(29)}
                {this.renderCircle(30)}
                {this.renderCircle(31)}
            </div>
            <div>
                {this.renderCircle(32)}
                {this.renderCircle(33)}
                {this.renderCircle(34)}
                {this.renderCircle(35)}
                {this.renderCircle(36)}
                {this.renderCircle(37)}
                {this.renderCircle(38)}
                {this.renderCircle(39)}
            </div>
            <div >
                {this.renderCircle(40)}
                {this.renderCircle(41)}
                {this.renderCircle(42)}
                {this.renderCircle(43)}
                {this.renderCircle(44)}
                {this.renderCircle(45)}
                {this.renderCircle(46)}
                {this.renderCircle(47)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            circles: Array(48).fill(null),
        };
    }

    handleClick(i) {
        const circles = this.state.circles.slice();
        circles[i] = "R";
        this.setState({
            circles: circles,
        });
    }

    render () {
        return (

            <div>
                <UserName userName={this.props.user.userName}/>
                <div className="game">                                                                                                          
                    <Board                                                                                                                                            
                        circles={this.state.circles}                                                                                                                     
                        onClick={(i) => this.handleClick(i)}                                                                                                          
                    />                                                                                                                                            
                </div>
            </div>                                                                                                                                         
  
        );
    }
}

export default connect(mapStateToProps)(Game);