import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {changeText1, changeText2, changeText3}  from './store/actions';

const Component1 = (props) => {

    useEffect(() => {
        props.changeText1(props.text);
      }, []);

    const handleComponentClick = () => {
        props.changeText1('Component1');
        props.changeText2('Hello');
        props.changeText3('Hello');
    }

    return (
        <div className="component" onClick={handleComponentClick}>{props.text1}</div>
    );
}
const mapStateToProps = (state) => {
    return {
        text1: state.compTexts.text1
    }
}
export default connect(mapStateToProps, {changeText1, changeText2, changeText3})(Component1);