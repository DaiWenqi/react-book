import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import LikeButton from './Button';
import CommentApp from './comment/CommentApp';
import reportWebVitals from './reportWebVitals';

class Header extends Component {
    render () {
        return (
        <div>
            <h1>React 小书</h1>
        </div>
        )
    }
}


// class LikeButton extends Component {
//     constructor () {
//       super()
//       this.state = { isLiked: false }
//     }
  
//     handleClickOnLikeButton () {
//       this.setState({
//         isLiked: !this.state.isLiked
//       })
//     }
  
//     render () {
//       return (
//         <button onClick={this.handleClickOnLikeButton.bind(this)}>
//           {this.state.isLiked ? '取消' : '点赞'} 👍
//         </button>
//       )
//     }
//   }

class Index extends Component {
    constructor () {
      super()
      this.state = {
        likedText: '已赞',
        unlikedText: '赞'
      }
    }

   

    handleClickOnChange () {
        this.setState({
          likedText: '取消',
          unlikedText: '点赞'
        })
      }

    render () {
        return (
          <div>
            <LikeButton
              likedText={this.state.likedText}
              unlikedText={this.state.unlikedText} />
            <div>
              <button onClick={this.handleClickOnChange.bind(this)}>
                修改 wordings
              </button>
            </div>
          </div>
        )
      }
}

console.log(Component.toString());


ReactDOM.render(
  <React.StrictMode>
      <CommentApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
