export interface Action {
    type: string;
    [key: string]: any;
}
// action types
export const SET_DATE = 'SET_DATE';
export const SET_DAY_START_TIME = 'SET_DAY_START_TIME';
export const SET_DAY_LENGTH = 'SET_DAY_LENGTH';
export const SET_MINIMUM_FLOW_TIME = 'SET_MINIMUM_FLOW_TIME';
export const TOGGLE_BUILD_IN_BREAKS = 'TOGGLE_BUILD_IN_BREAKS';
export const SET_SHORT_BREAK_LENGTH = 'SET_SHORT_BREAK_LENGTH';
export const SET_LONG_BREAK_LENGTH = 'SET_LONG_BREAK_LENGTH';
export const SET_LUNCH_LENGTH = 'SET_LUNCH_LENGTH';
export const ADD_MEETING = 'ADD_MEETING';
export const ADD_UNSCHEDULED_MEETING = 'ADD_UNSCHEDULED_MEETING';
export const ADD_NON_WORK_APPOINTMENT = 'ADD_NON_WORK_APPOINTMENT';
export const ADD_SHALLOW_WORK_TASK = 'ADD_SHALLOW_WORK_TASK';
export const INCREMENT_DAY_PREP_CURRENT_INDEX = 'INCREMENT_DAY_PREP_CURRENT_INDEX';
export const TOGGLE_FLOW_TIME_AVAILABLE = 'TOGGLE_FLOW_TIME_AVAILABLE';
export const TOGGLE_DAY_WENT_ACCORDING_TO_PLAN = 'TOGGLE_DAY_WENT_ACCORDING_TO_PLAN';
export const SET_TIME_SPENT_ON_INTERRUPTIONS = 'SET_TIME_SPENT_ON_INTERRUPTIONS';
export const SET_TIME_SPENT_ON_DISTRACTIONS = 'SET_TIME_SPENT_ON_DISTRACTIONS';
export const TOGGLE_FLOW_TIME_USED_FOR_DEEP_WORK = 'TOGGLE_FLOW_TIME_USED_FOR_DEEP_WORK';
export const SET_LEVEL_OF_FLOW_ACHIEVED = 'SET_LEVEL_OF_FLOW_ACHIEVED';
export const TOGGLE_DAY_IS_READY = 'TOGGLE_DAY_IS_READY';
export const TOGGLE_DAY_IS_COMPLETE = 'TOGGLE_DAY_IS_COMPLETE';

export const actions = {
    SET_DATE,
    SET_DAY_START_TIME,
    SET_DAY_LENGTH,
    SET_MINIMUM_FLOW_TIME,
    TOGGLE_BUILD_IN_BREAKS,
    SET_SHORT_BREAK_LENGTH,
    SET_LONG_BREAK_LENGTH,
    SET_LUNCH_LENGTH,
    ADD_MEETING,
    ADD_UNSCHEDULED_MEETING,
    ADD_NON_WORK_APPOINTMENT,
    ADD_SHALLOW_WORK_TASK,
    INCREMENT_DAY_PREP_CURRENT_INDEX,
    TOGGLE_FLOW_TIME_AVAILABLE,
    TOGGLE_DAY_WENT_ACCORDING_TO_PLAN,
    SET_TIME_SPENT_ON_INTERRUPTIONS,
    SET_TIME_SPENT_ON_DISTRACTIONS,
    TOGGLE_FLOW_TIME_USED_FOR_DEEP_WORK,
    SET_LEVEL_OF_FLOW_ACHIEVED,
    TOGGLE_DAY_IS_READY,
    TOGGLE_DAY_IS_COMPLETE,
};

// action creators
export const setDate = (date: string): Action => ({
    type: SET_DATE,
    date,
});

export const setDayStartTime = (startTime: string): Action => ({
    type: SET_DAY_START_TIME,
    startTime,
});

export const setDayLength = (length: string): Action => ({
    type: SET_DAY_LENGTH,
    length,
});

export const setMinimumFlowTime = (time: string): Action => ({
    type: SET_MINIMUM_FLOW_TIME,
    time,
});

export const toggleBuildInBreaks = (breaks: boolean): Action => ({
    type: TOGGLE_BUILD_IN_BREAKS,
    breaks,
});

export const setShortBreakLength = (length: string): Action => ({
    type: SET_SHORT_BREAK_LENGTH,
    length,
});

export const setLongBreakLength = (length: string): Action => ({
    type: SET_LONG_BREAK_LENGTH,
    length,
});

export const setLunchLength = (length: string | undefined): Action => ({
    type: SET_LUNCH_LENGTH,
    length,
});

export const addMeeting = (meeting: any): Action => ({
    type: ADD_MEETING,
    meeting,
});

export const addUnscheduledMeeting = (meeting: any): Action => ({
    type: ADD_UNSCHEDULED_MEETING,
    meeting,
});

export const addNonWorkAppointment = (meeting: any): Action => ({
    type: ADD_NON_WORK_APPOINTMENT,
    meeting,
});

export const addShallowWorkTask = (task: any): Action => ({
    type: ADD_SHALLOW_WORK_TASK,
    task,
});

export const incrementDayPrepCurrentIndex = (increment: number): Action => ({
    type: INCREMENT_DAY_PREP_CURRENT_INDEX,
    increment,
});

export const toggleFlowTimeAvailable = (flowTime: boolean): Action => ({
    type: TOGGLE_FLOW_TIME_AVAILABLE,
    flowTime,
});

export const toggleDayWentAccordingToPlan = (toPlan: boolean): Action => ({
    type: TOGGLE_DAY_WENT_ACCORDING_TO_PLAN,
    toPlan,
});

export const setTimeSpentOnInterruptions = (time: string | undefined): Action => ({
    type: SET_TIME_SPENT_ON_INTERRUPTIONS,
    time,
});

export const setTimeSpentOnDistractions = (time: string | undefined): Action => ({
    type: SET_TIME_SPENT_ON_DISTRACTIONS,
    time,
});

export const toggleFlowTimeUsedForDeepWork = (deepWork: boolean): Action => ({
    type: TOGGLE_FLOW_TIME_USED_FOR_DEEP_WORK,
    deepWork,
});

export const setLevelOfFlowAchieved = (flow: string): Action => ({
    type: SET_LEVEL_OF_FLOW_ACHIEVED,
    flow,
});

export const toggleDayIsReady = (isReady: boolean): Action => ({
    type: TOGGLE_DAY_IS_READY,
    isReady,
});

export const toggleDayIsComplete = (isComplete: boolean): Action => ({
    type: TOGGLE_DAY_IS_COMPLETE,
    isComplete,
});
