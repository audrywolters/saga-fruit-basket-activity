import React, { Component } from 'react';
import { connect } from 'react-redux';

class FruitSelector extends Component {

    // Currying that returns a function
    addFruit = ( fruitName ) => ( event ) => {
        this.props.dispatch( { type: 'ADD_FRUIT', 
                               payload: { fruit: fruitName } } );
    }

    getFruit() {
        this.props.dispatch( { type: 'FETCH_FRUIT' } );
    }

    // Displays the fruit selection buttons on the DOM
    render() {
        return (
            <div>
                <button onClick={ this.addFruit( 'Apple' ) }>Add Apple</button>
                <button onClick={ this.addFruit( 'Orange' ) }>Add Orange</button>
                <button onClick={ this.addFruit( 'Watermelon' ) }>Add Watermellon</button>
                <button onClick={ this.addFruit( 'Grapefruit' ) }>Add Grapefruit</button>
            </div>
        )
    }
}

export default connect()( FruitSelector );