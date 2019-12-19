import React from 'react';
import { connect } from 'react-redux'

import { AppState, Meeting } from '../state';
import { incrementDayPrepCurrentIndex, addUnscheduledMeeting } from '../state/actions';
import Meetings from '../components/Meetings';

const mapStateToProps = (state: AppState) => ({ meetings: state.unscheduledMeetings });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickAddMeeting: (meeting: Meeting) => dispatch(addUnscheduledMeeting(meeting)),
    onClickFinishedAddingMeetings: () => dispatch(incrementDayPrepCurrentIndex(1)),
});

interface AddUnscheduledMeetingsProps {
    meetings: Meeting[],
    onClickAddMeeting: any,
    onClickFinishedAddingMeetings: any,
}

const AddUnscheduledMeetings = ({ meetings, onClickAddMeeting, onClickFinishedAddingMeetings }: AddUnscheduledMeetingsProps) => {
    let title: any;
    let length: any;

    const onClickSubmit = (e: any) => {
        e.preventDefault();
        const meeting: Meeting = {
            title: title.value,
            scheduled: false,
            work: true,
            length: length.value,
        };
        onClickAddMeeting(meeting);
        title.value = '';
        length.value = '';
    };

    return (
        <div>
            <Meetings meetings={meetings} />
            <div>
                <h2>Add Unscheduled Meetings:</h2>
                <form onSubmit={onClickSubmit}>
                    Title:<br />
                    <input placeholder="Another meeting" ref={node => { title = node; }} /><br />
                    Length of meeting in minutes: <br />
                    <input placeholder="11:00 AM" ref={node => { length = node; }} /><br />
                    <button type="submit">Submit</button><br />
                </form>
                <button onClick={onClickFinishedAddingMeetings}>Done Adding Meetings</button>
            </div>
        </div>
    );
};

const AddUnscheduledMeetingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddUnscheduledMeetings);

export default AddUnscheduledMeetingsContainer;
