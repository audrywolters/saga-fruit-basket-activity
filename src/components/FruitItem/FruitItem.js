import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FruitItem extends Component {
    removeItem = () => {
        axios({
            method: 'DELETE',
            url: `/fruit/${this.props.basketItem.id}`
        }).then((response) => {
            this.getFruit();
        }).catch((error) => {
            console.log(error);
            alert('Unable to delete item');
        });  
    }

    getFruit() {
        console.log( '-------- ITEM get saga' );
        this.props.dispatch( { type: 'FETCH_FRUIT' } );
    }

    render() {
        return (
            <li>
                <span>{ this.props.basketItem.fruit }</span>
                <button onClick={ this.removeItem }>Remove</button>
            </li>
        )
    }
}

export default connect()( FruitItem );