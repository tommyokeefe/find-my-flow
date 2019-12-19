import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { incrementDayPrepCurrentIndex, setDayStartTime } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ startTime: state.dayStartTime });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickStartTime: (startTime: string) => {
        dispatch(setDayStartTime(startTime));
        dispatch(incrementDayPrepCurrentIndex(1));
    },
});

interface SetStartTimeProps {
    startTime?: string;
    onClickStartTime: any,
}

const SetStartTime = ({ startTime, onClickStartTime }: SetStartTimeProps) => {
    let input: any;

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onClickStartTime(input.value);
        input.value = ''
      }

    return (
        <form onSubmit={onSubmitHandler}>
            What time does your day start? (use format h:mm)<br/>
            <input placeholder="8:00" defaultValue={startTime} ref={node => { input = node; }} />
            <button type="submit">Submit</button>
      </form>
    )
};

const SetStartTimeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetStartTime);

export default SetStartTimeContainer;
