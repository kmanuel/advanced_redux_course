import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentList extends React.Component {
    renderComments() {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        })
    }

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {comments: state.comments};
};

export default connect(mapStateToProps, actions)(CommentList);