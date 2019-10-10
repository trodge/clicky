import React, { Component } from 'react';
import './App.css';

export default class ImageSet extends Component {
    state = {
        alts: ['Lorelai and Max', 'Lorelai and Rory Eat', 'Sookie', 'DAR Rory', 'Luke', 'Logan and Rory',
            'Lorelai and Rory Coffee', 'Lorelai and Rory', 'Emily, Lorelai, and Rory', 'Lorelai and Rory Chilton',
            'Emily and Lorelai', 'Lorelai and Rory Hug', 'Jason', 'Jess and Rory', 'Christopher',
            'Lorelai and Rory Scarves'],
        order: [...Array(16).keys()],
        clicked: {}
    };
    render() {
        return <div className="ImageSet">
            {this.state.order.map(i =>
                <img alt={this.state.alts[i]} src={`images/${(i + 1).toString().padStart(2, '0')}.jpg`}
                    onClick={() => {
                        let { order, clicked } = this.state;
                        if (clicked[i]) {
                            this.setState({ clicked: {} });
                            return this.props.setScore(0);
                        }
                        clicked[i] = true;
                        for (let i = order.length - 1; --i;) {
                            const j = Math.floor(Math.random() * (i + 1));
                            const swap = order[i];
                            order[i] = order[j];
                            order[j] = swap;
                        }
                        this.forceUpdate();
                        this.props.setScore();
                    }} key={i} />)}
        </div>;
    }
};