import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {changeText1, changeText2, changeText3}  from './store/actions';

const Component2 = (props) => {

    useEffect(() => {
        props.changeText2(props.text);
      }, []);

    const handleComponentClick = () => {
        props.changeText1('Hello');
        props.changeText2('Component2');
        props.changeText3('Hello');
    }

    return (
        <div className="component" onClick={handleComponentClick}>{props.text2}</div>
    );
}

const mapStateToProps = (state) => {
    return {
        text2: state.compTexts.text2
    }
}
export default connect(mapStateToProps, {changeText1, changeText2, changeText3})(Component2);