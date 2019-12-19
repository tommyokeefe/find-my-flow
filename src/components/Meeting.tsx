import React from 'react';
import { ScheduledMeeting } from '../state';

interface meetingProps {
    meeting: ScheduledMeeting;
    key: string,
}

const Meeting = ({ meeting }: meetingProps) => {
    return (
        <div>
            <h3>{meeting.title}</h3>
            <p>{meeting.startTime} -> {meeting.endTime}</p>
        </div>
    );
};

export default Meeting;
