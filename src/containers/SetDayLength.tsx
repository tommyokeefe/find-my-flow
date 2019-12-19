import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { setDayLength } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ startTime: state.dayStartTime, dayLength: state.dayLength });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickDayLength: (dayLength: string) => dispatch(setDayLength(dayLength)),
});

interface SetStartTimeProps {
    startTime?: string;
    dayLength?: string;
    onClickDayLength: any;
}

const SetDayLength = ({ startTime, dayLength, onClickDayLength }: SetStartTimeProps) => {
    if (!startTime || dayLength) {
        return <div/>;
    }

    let input: any;

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onClickDayLength(input.value);
        input.value = ''
      }

    return (
        <form onSubmit={onSubmitHandler}>
            How long is your day in hours? (use format H or H.H)<br/>
            <input placeholder="7.5" ref={node => { input = node; }} />
            <button type="submit">Submit</button>
      </form>
    )
};

const SetDayLengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetDayLength);

export default SetDayLengthContainer;
