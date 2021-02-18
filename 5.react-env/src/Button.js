import React, { Component} from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';


class LikeButton extends Component {
    constructor () {
      super()
      this.state = { isLiked: true }
    }

    static defaultProps = {
        likedText: '已赞',
        unlikedText: '赞'
    }
  
    handleClickOnLikeButton () {
      this.setState({
        isLiked: !this.state.isLiked
      })
    }
  
    render () {
      return (
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? this.props.likedText : this.props.unlikedText} 👍
        </button>
      )
    }
  }
//   function LikeButton ({likedText, unlikedText}) {
//       let state =  true;

//     function handleClickOnLikeButton () {
//         state = !state
//         // {state ? this.props.likedText : this.props.unlikedText} 
//       }
//       const text = () => {
//         const r = state ? likedText : unlikedText
//         console.log(r);
//         return r;
//       };
//       return (
//         <button onClick={handleClickOnLikeButton}>
//             {text} 👍
//         </button>
//       );
//   }



  export default LikeButton;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
