import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { incrementDayPrepCurrentIndex, setLongBreakLength } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ longBreakLength: state.longBreakLength });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickLongBreak: (flowTime: string) => {
        dispatch(setLongBreakLength(flowTime));
        dispatch(incrementDayPrepCurrentIndex(1));
    },
});

interface SetLongBreakLengthProps {
    longBreakLength?: string;
    onClickLongBreak: any;
}

const SetLongBreakLength = ({ longBreakLength, onClickLongBreak }: SetLongBreakLengthProps) => {

    let input: any;

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onClickLongBreak(input.value);
        input.value = ''
      }

    return (
        <form onSubmit={onSubmitHandler}>
            How long is your short break in minutes?<br/>
            <input placeholder="15" defaultValue={longBreakLength} ref={node => { input = node; }} />
            <button type="submit">Submit</button>
      </form>
    )
};

const SetLongBreakLengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetLongBreakLength);

export default SetLongBreakLengthContainer;
