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
