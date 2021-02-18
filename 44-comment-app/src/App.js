import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import wrapWithLoadData from './wrapWithLoadData'


class CommentApp extends Component {

    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            comments: props.data || []
        }
    }
    // 提交评论
    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this.props.saveData(comments)
    }
    // 删除评论
    handleDeleteComment(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this.props.saveData(comments)
    }

    render() {
        return (
            <div className="App">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        );
    }
}
// 添加 data属性 跟saveData的属性
CommentApp = wrapWithLoadData(CommentApp, 'comments')
export default CommentApp