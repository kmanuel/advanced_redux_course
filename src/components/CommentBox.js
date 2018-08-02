import React from 'react';
import requireAuth from './requireAuth';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends React.Component {
    state = { comment: '' };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

export default requireAuth(connect(null, actions)(CommentBox));