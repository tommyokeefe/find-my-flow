import React from 'react';
import { connect } from 'react-redux'

import { AppState, Meeting } from '../state';
import { incrementDayPrepCurrentIndex, addNonWorkAppointment } from '../state/actions';
import Meetings from '../components/Meetings';

const mapStateToProps = (state: AppState) => ({ meetings: state.nonWorkAppointments });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickAddMeeting: (meeting: Meeting) => dispatch(addNonWorkAppointment(meeting)),
    onClickFinishedAddingMeetings: () => dispatch(incrementDayPrepCurrentIndex(1)),
});

interface AddNonWorkMeetingsProps {
    meetings: Meeting[],
    onClickAddMeeting: any,
    onClickFinishedAddingMeetings: any,
}

const AddNonWorkMeetings = ({ meetings, onClickAddMeeting, onClickFinishedAddingMeetings }: AddNonWorkMeetingsProps) => {
    let title: any;
    let startTime: any;
    let endTime: any;

    const onClickSubmit = (e: any) => {
        e.preventDefault();
        const meeting: Meeting = {
            title: title.value,
            scheduled: true,
            work: false,
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
                <h2>Add Meetings/Appointments:</h2>
                <form onSubmit={onClickSubmit}>
                    Title:<br />
                    <input placeholder="Appointment" ref={node => { title = node; }} /><br />
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

const AddNonWorkMeetingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddNonWorkMeetings);

export default AddNonWorkMeetingsContainer;
