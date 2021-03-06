import React from 'react';
import { connect } from 'react-redux'

import { AppState, Meeting } from '../state';
import { incrementDayPrepCurrentIndex, addMeeting } from '../state/actions';
import Meetings from '../components/Meetings';

const mapStateToProps = (state: AppState) => ({ meetings: state.meetings });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickAddMeeting: (meeting: Meeting) => dispatch(addMeeting(meeting)),
    onClickFinishedAddingMeetings: () => dispatch(incrementDayPrepCurrentIndex(1)),
});

interface AddMeetingsProps {
    meetings: Meeting[],
    onClickAddMeeting: any,
    onClickFinishedAddingMeetings: any,
}

const AddScheduledMeetings = ({ meetings, onClickAddMeeting, onClickFinishedAddingMeetings }: AddMeetingsProps) => {
    let title: any;
    let startTime: any;
    let endTime: any;

    const onClickSubmit = (e: any) => {
        e.preventDefault();
        const meeting: Meeting = {
            title: title.value,
            scheduled: true,
            work: true,
            startTime: startTime.value,
            endTime: endTime.value,
        };
        onClickAddMeeting(meeting);
        title.value = '';
        startTime.value = '';
        endTime.value = '';
    };

    return (
        <div>
            <Meetings meetings={meetings} />
            <div>
                <h2>Add Meetings:</h2>
                <form onSubmit={onClickSubmit}>
                    Title:<br />
                    <input placeholder="Another meeting" ref={node => { title = node; }} /><br />
                    Start Time (format H:MM AM/PM):<br />
                    <input placeholder="11:00 AM" ref={node => { startTime = node; }} /><br />
                    End Time (format H:MM AM/PM):<br />
                    <input placeholder="11:00 AM" ref={node => { endTime = node; }} /><br />
                    <button type="submit">Submit</button><br />
                </form>
                <button onClick={onClickFinishedAddingMeetings}>Done Adding Meetings</button>
            </div>
        </div>
    );
};

const AddScheduledMeetingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddScheduledMeetings);

export default AddScheduledMeetingsContainer;
