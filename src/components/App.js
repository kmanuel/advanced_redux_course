import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import * as actions from '../actions';

class App extends React.Component {

    renderButton() {
        return this.props.auth
            ? <button
                onClick={() => this.props.changeAuth(false)}>
                Sign Out
            </button>
            : <button
                onClick={() => this.props.changeAuth(true)}>
                Sign In
            </button>
    }

    renderHeader() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post A Comment</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);