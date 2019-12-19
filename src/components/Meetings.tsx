import React from 'react';

import { ScheduledMeeting } from '../state';
import Meeting from './Meeting';

interface MeetingsProps {
    meetings: ScheduledMeeting[];
}
const Meetings = ({ meetings }: MeetingsProps) => {
    return (
        <div>
            <h2>Meetings:</h2>
            {meetings.map(meeting =>
                <Meeting key={meeting.title} meeting={meeting} />
            )}

        </div>
    );
};

export default Meetings;
