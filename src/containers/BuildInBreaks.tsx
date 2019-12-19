import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { toggleBuildInBreaks, incrementDayPrepCurrentIndex } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ breaks: state.buildInBreaks });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickBreaks: (breaks: boolean, increment: number) => {
        dispatch(toggleBuildInBreaks(breaks));
        dispatch(incrementDayPrepCurrentIndex(increment));
    },
});

interface BuildInBreaksProps {
    breaks?: boolean;
    onClickBreaks: any;
}

const BuildInBreaks = ({ breaks, onClickBreaks }: BuildInBreaksProps) => {

    let yesInput: any;
    let noInput: any;

    let yesChecked = (breaks !== undefined && breaks === true);
    let noChecked = (breaks !== undefined && breaks === false);

    const onSubmitHandler = (e: any) => {
        console.log(yesInput.checked);
        console.log(noInput.checked);
        let choice: boolean | undefined;
        let increment = 3
        if (yesInput.checked) {
            choice = true;
            increment = 1;
        }

        if (noInput.checked) {
            choice = false;
        }

        onClickBreaks(choice, increment);
    }

    return (
        <form>
            Do you want breaks built in to your schedule?
            <input type="radio" name="breaks" value="true" defaultChecked={yesChecked} onClick={onSubmitHandler} ref={node => { yesInput = node; }} /> Yes<br/>
            <input type="radio" name="breaks" value="false" defaultChecked={noChecked} onClick={onSubmitHandler} ref={node => { noInput = node; }} /> No<br/>
        </form>
    )
};

const BuildInBreaksContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BuildInBreaks);

export default BuildInBreaksContainer;
