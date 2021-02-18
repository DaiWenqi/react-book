import React, { Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    // static users = [
    //     {username: 'a', content:'c'}
    // ]
    static defaultProps = [{username: 'a', content:'c'}];
    render () {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                 <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleClickDelete.bind(this, i)} />
                )}
                {/* <Comment user={user} htmlfor={user in this.props.users}></Comment> */}
            </div>
        )
    }

    handleClickDelete (index) {
        console.log('双击');
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index);
        }
    }
}

export default CommentList;
