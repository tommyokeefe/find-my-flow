import React from 'react';
import { connect } from 'react-redux'

import SetStartTime from './SetStartTime';
import SetDayLength from './SetDayLength';
import SetMinimumFlowTime from './SetMinimumFLowTime';
import BuildInBreaks from './BuildInBreaks';

import { AppState } from '../state';
import { setDate } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ date: state.date, dayIsReady: state.dayIsReady });

const mapDispatchToProps = (dispatch: CallableFunction) => {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    return {
        dispatchDate: () => dispatch(setDate(today.toLocaleDateString('en-US', dateOptions))),
    };
};

interface PrepareDayProps {
    date?: string;
    dayIsReady: boolean;
    dispatchDate: any;
}

const PrepareDay = ({ date, dayIsReady, dispatchDate }: PrepareDayProps) => {
    if(!date) {
        dispatchDate();
    }

    if (dayIsReady) {
        return <div />;
    }

    return (
        <div>
            <p>{date}</p>
            <SetStartTime />
            <SetDayLength />
            <SetMinimumFlowTime />
            <BuildInBreaks />
        </div>
    );
};

const PrepareDayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrepareDay);

export default PrepareDayContainer;