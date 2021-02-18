import React, { Component } from "react";
import PropTypes from 'prop-types';
import TheamSwitch from './TheamSwitch';
import { connect } from './react-redux'
class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
      }

    // constructor () {
    //     super();
    //     this.state = {themeColor: ''}
    // }

    render () {
        return (
            <div>
                <h1 style={{color: this.props.themeColor}}>React.js 小书内容</h1>
                <TheamSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content