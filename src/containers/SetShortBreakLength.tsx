import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { incrementDayPrepCurrentIndex, setShortBreakLength } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ shortBreakLength: state.shortBreakLength });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickShortBreak: (flowTime: string) => {
        dispatch(setShortBreakLength(flowTime));
        dispatch(incrementDayPrepCurrentIndex(1));
    },
});

interface SetShortBreakLengthProps {
    shortBreakLength?: string;
    onClickShortBreak: any;
}

const SetShortBreakLength = ({ shortBreakLength, onClickShortBreak }: SetShortBreakLengthProps) => {

    let input: any;

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onClickShortBreak(input.value);
        input.value = ''
      }

    return (
        <form onSubmit={onSubmitHandler}>
            How long is your short break in minutes?<br/>
            <input placeholder="5" defaultValue={shortBreakLength} ref={node => { input = node; }} />
            <button type="submit">Submit</button>
      </form>
    )
};

const SetShortBreakLengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetShortBreakLength);

export default SetShortBreakLengthContainer;
