import React, { Component } from "react";
import PropTypes from 'prop-types';
import {connect} from './react-redux';

class TheamSwitch extends Component {
    // static contextTypes = {
    //     store: PropTypes.object
    // }
    // constructor () {
    //     super()
    //     this.state = { themeColor: ''}
    // }

    // componentWillMount () {
    //     const { store } = this.context;
    //     this._updateThemeColor();
    //     store.subscribe(() => this._updateThemeColor())
    // }

    // _updateThemeColor () {
    //     const { store } = this.context;
    //     const state = store.getState();
    //     this.setState({ themeColor: state.themeColor });
    // }

    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }



    handleSwitchColor (color) {
        // const { store } = this.context;
        // store.dispatch({
        //     type: 'CHANG_COLOR',
        //     themeColor: value
        // })
        if(this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }
    render () {
        return (
            <div>
                <button 
                style={{ color: this.props.themeColor}} 
                onClick={this.handleSwitchColor.bind(this, 'red')}>红色</button>
                
                <button 
                style={{ color: this.props.themeColor}} 
                onClick={this.handleSwitchColor.bind(this, 'green')}>绿色</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_COLOR', themeColor: color })
        }
    }
}

TheamSwitch = connect(mapStateToProps, mapDispatchToProps)(TheamSwitch);

export default TheamSwitch;