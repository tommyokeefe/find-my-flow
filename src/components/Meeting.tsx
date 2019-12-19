import React from 'react';
import { Meeting } from '../state';

interface meetingProps {
    meeting: Meeting;
    key: string,
}

const Meeting = ({ meeting }: meetingProps) => {
    return (
        <div>
            <h3>{meeting.title}</h3>
            {meeting.startTime &&
                <p>{meeting.startTime} -> {meeting.endTime}</p>
            }
            {meeting.length &&
                <p>{meeting.length} minutes long</p>
            }
        </div>
    );
};

export default Meeting;
