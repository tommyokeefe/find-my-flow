import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { setDayLength, incrementDayPrepCurrentIndex } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ dayLength: state.dayLength });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickDayLength: (dayLength: string) => {
        dispatch(setDayLength(dayLength));
        dispatch(incrementDayPrepCurrentIndex(1));
    },

});

interface SetStartTimeProps {
    dayLength?: string;
    onClickDayLength: any;
}

const SetDayLength = ({ dayLength, onClickDayLength }: SetStartTimeProps) => {

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
            <input placeholder="7.5" defaultValue={dayLength} ref={node => { input = node; }} />
            <button type="submit">Submit</button>
      </form>
    )
};

const SetDayLengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetDayLength);

export default SetDayLengthContainer;
