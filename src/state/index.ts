export interface AppState {
    date?: string;
    dayStartTime: string;
    dayLength: string;
    minimumFlowTime: string;
    buildInBreaks?: boolean;
    shortBreakLength: string;
    longBreakLength: string;
    lunch: boolean;
    lunchLength?: string;
    meetings: any[];
    unscheduledMeetings: any[];
    nonWorkAppointments: any[];
    shallowWork: any[];
    dayPrepCurrentIndex: number,
    flowTimeAvailable: boolean;
    dayWentAccordingToPlan: boolean;
    dayHadInterruptions: boolean;
    timeSpentOnInterruptions?: string;
    dayHadDistractions: boolean;
    timeSpentOnDistractions?: string;
    flowTimeUsedForDeepWork: boolean;
    flowAchieved: string;
    dayIsReady: boolean;
    dayIsComplete: boolean;
}

export interface Meeting {
    title: string;
    scheduled: boolean;
    length?: string;
}

export interface ScheduledMeeting extends Meeting {
    startTime: string;
    endTime: string;
}

export interface Task {
    title: string;
    estimatedTime: string;
}
