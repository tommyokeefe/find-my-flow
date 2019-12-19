import React from 'react';

import { Meeting } from '../state';
import MeetingComponent from './Meeting';

interface MeetingsProps {
    meetings: Meeting[];
}
const Meetings = ({ meetings }: MeetingsProps) => {
    return (
        <div>
            <h2>Meetings:</h2>
            {meetings.map(meeting =>
                <MeetingComponent key={meeting.title} meeting={meeting} />
            )}

        </div>
    );
};

export default Meetings;
