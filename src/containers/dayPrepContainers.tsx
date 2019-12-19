import SetStartTime from './SetStartTime';
import SetDayLength from './SetDayLength';
import SetMinimumFlowTime from './SetMinimumFLowTime';
import BuildInBreaks from './BuildInBreaks';
import SetShortBreakLength from './SetShortBreakLength';
import SetLongBreakLength from './SetLongBreakLength';
import SetLunchLength from './SetLunchLength';
import AddScheduledMeetings from './AddScheduledMeetings';
import AddUnscheduledMeetings from './AddUnscheduledMeetings';
import AddNonWorkMeetings from './AddNonWorkMeetings';

export const orderedDayPrepContainers = [
    SetStartTime,
    SetDayLength,
    SetMinimumFlowTime,
    BuildInBreaks,
    SetShortBreakLength,
    SetLongBreakLength,
    SetLunchLength,
    AddScheduledMeetings,
    AddUnscheduledMeetings,
];
