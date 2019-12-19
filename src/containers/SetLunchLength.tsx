import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { incrementDayPrepCurrentIndex, setLunchLength } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ lunchLength: state.lunchLength });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickLunchLength: (flowTime: string) => {
        dispatch(setLunchLength(flowTime));
        dispatch(incrementDayPrepCurrentIndex(1));
    },
});

interface SetLunchLengthProps {
    lunchLength?: string;
    onClickLunchLength: any;
}

const SetLunchLength = ({ lunchLength, onClickLunchLength }: SetLunchLengthProps) => {

    let input: any;

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return onClickLunchLength();
        }
        onClickLunchLength(input.value);
        input.value = ''
      }

    return (
        <form onSubmit={onSubmitHandler}>
            Will you take a lunch? Enter the time in min utes or leacve it blank of you're working through.<br/>
            <input placeholder="60" defaultValue={lunchLength} ref={node => { input = node; }} />
            <button type="submit">Submit</button>
      </form>
    )
};

const SetLunchLengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetLunchLength);

export default SetLunchLengthContainer;
