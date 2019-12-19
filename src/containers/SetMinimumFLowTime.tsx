import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { incrementDayPrepCurrentIndex, setMinimumFlowTime } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ flowTime: state.minimumFlowTime });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickFlowTime: (flowTime: string) => {
        dispatch(setMinimumFlowTime(flowTime));
        dispatch(incrementDayPrepCurrentIndex(1));
    },
});

interface SetStartTimeProps {
    flowTime?: string;
    onClickFlowTime: any;
}

const SetMinimumFlowTime = ({ flowTime, onClickFlowTime }: SetStartTimeProps) => {

    let input: any;

    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        onClickFlowTime(input.value);
        input.value = ''
      }

    return (
        <form onSubmit={onSubmitHandler}>
            What's the minimum amount of time in minutes that you need to reach a flow state?<br/>
            <input placeholder="90" defaultValue={flowTime} ref={node => { input = node; }} />
            <button type="submit">Submit</button>
      </form>
    )
};

const SetMinimumFlowTimeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SetMinimumFlowTime);

export default SetMinimumFlowTimeContainer;
