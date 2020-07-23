import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FruitSelector extends Component {

    // Currying that returns a function
    addFruit = (fruitName) => (event) => {
        axios({
            method: 'POST',
            url: '/fruit',
            data: { fruit: fruitName }
        }).then((response) => {
            this.getFruit();
        }).catch((error) => {
            console.log(error);
            alert('Unable to save fruit');
        });
    }

    getFruit() {
        console.log( '-------- SELECTOR get saga' );
        this.props.dispatch( { type: 'FETCH_FRUIT' } );
    }

    // Displays the fruit selection buttons on the DOM
    render() {
        return (
            <div>
                <button onClick={this.addFruit('Apple')}>Add Apple</button>
                <button onClick={this.addFruit('Orange')}>Add Orange</button>
                <button onClick={this.addFruit('Watermelon')}>Add Watermellon</button>
                <button onClick={this.addFruit('Grapefruit')}>Add Grapefruit</button>
            </div>
        )
    }
}

export default connect()(FruitSelector);