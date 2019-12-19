import React from 'react';
import { connect } from 'react-redux'

import { orderedDayPrepContainers } from './dayPrepContainers';

import { AppState } from '../state';
import { setDate } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ date: state.date, dayIsReady: state.dayIsReady, dayPrepComponentIndex: state.dayPrepCurrentIndex });

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
    dayPrepComponentIndex: number;
}

const PrepareDay = ({ date, dayIsReady, dispatchDate, dayPrepComponentIndex }: PrepareDayProps) => {
    if(!date) {
        dispatchDate();
    }

    if (dayIsReady) {
        return <div />;
    }

    let DayPrepComponent = orderedDayPrepContainers[dayPrepComponentIndex];

    return (
        <div>
            <p>{date}</p>
            <DayPrepComponent />
        </div>
    );
};

const PrepareDayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PrepareDay);

export default PrepareDayContainer;