import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    render() {
        return (
            <div className="comment_inut">
                <div><span>用户名：</span><input value={this.state.username} onChange={this.handleChangeUsername.bind(this)} /></div>
                <div>
                    <span>评论内容：</span>
                    <textarea style={{ height: '150px' }} onChange={this.handleChangeContent.bind(this)} value={this.state.content} />
                </div>
                <div className="a-r"><button className="btn" onClick={this.handleSubmit.bind(this)}>提交</button></div>
            </div>
        )
    }

    handleChangeUsername(e) {
        // this.value = e.target.value;
        console.log(e.target.value);
        this.setState({
            username: e.target.value
        })
    }

    handleChangeContent (e) {
        console.log(e.target.value);
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit () {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({username, content, createdTime: +new Date()});
            this.setState({
                username: '',
                content: ''
            })
        }
    }

}

export default CommentInput;