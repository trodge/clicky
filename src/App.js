import React, { Component } from 'react';
import ImageSet from './ImageSet.js';
import './App.css';

export default class App extends Component {
    state = {
        score: 0,
        highScore: 0
    };
    setScore = score => {
        if (score === undefined) score = this.state.score + 1;
        this.setState({score : score, highScore: Math.max(this.state.highScore, score)})
    }
    render() {
        const { score, highScore } = this.state;
        return <div className="App" >
            <header className="App-header">
                <h1>Don't click the same image twice</h1>
                Score: {score} | High Score: {highScore}
            </header>
            <ImageSet setScore={this.setScore} />
        </div>;
    }
}
