import React, { Component } from 'react';
import { connect } from 'react-redux';
import FruitItem from '../FruitItem/FruitItem.js';


class FruitList extends Component {

    componentDidMount() {
        console.log( '-------- LIST get saga' );
        this.props.dispatch( { type: 'FETCH_FRUIT' } );
    }

    render() {
        return (
            <ul>
                {this.props.reduxState.basketReducer.map((basketItem) => {
                    return (
                        <FruitItem key={basketItem.id} basketItem={basketItem} />
                    );
                })}
            </ul>
        )
    }
}
// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(FruitList);