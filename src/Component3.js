import React from 'react';
import { connect } from 'react-redux';
import {changeText1, changeText2, changeText3}  from './store/actions';

const Component3 = (props) => {

    const handleComponentClick = () => {
        props.changeText1('Hello');
        props.changeText2('Hello');
        props.changeText3('Component3');
    }

    return (
        <div className="component" onClick={handleComponentClick}>{props.text3}</div>
    );
}

const mapStateToProps = (state) => {
    return {
        text3: state.compTexts.text3
    }
}
export default connect(mapStateToProps, {changeText1, changeText2, changeText3})(Component3);