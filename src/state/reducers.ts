import { Action, actions } from './actions';

import { AppState } from './index';

const initialState: AppState = {
    date: '',
    dayStartTime: '',
    dayLength: '',
    minimumFlowTime: '',
    shortBreakLength: '',
    longBreakLength: '',
    lunch: false,
    meetings: [],
    unscheduledMeetings: [],
    nonWorkAppointments: [],
    shallowWork: [],
    dayPrepCurrentIndex: 0,
    flowTimeAvailable: false,
    dayWentAccordingToPlan: true,
    dayHadInterruptions: false,
    dayHadDistractions: false,
    flowTimeUsedForDeepWork: true,
    flowAchieved: '',
    dayIsReady: false,
    dayIsComplete: false,
};

export function arrangeMyDay(state = initialState, action: Action): AppState {
    switch (action.type) {
        case actions.SET_DATE:
            return { ...state, date: action.date };

        case actions.SET_DAY_START_TIME:
            return { ...state, dayStartTime: action.startTime };

        case actions.SET_DAY_LENGTH:
            return { ...state, dayLength: action.length };

        case actions.SET_MINIMUM_FLOW_TIME:
            return { ...state, minimumFlowTime: action.time };

        case actions.TOGGLE_BUILD_IN_BREAKS:
            return { ...state, buildInBreaks: action.breaks };

        case actions.SET_SHORT_BREAK_LENGTH:
            return { ...state, shortBreakLength: action.length };

        case actions.SET_LONG_BREAK_LENGTH:
            return { ...state, longBreakLength: action.length };

        case actions.SET_LUNCH_LENGTH:
            if (action.length) {
                return { ...state, lunch: true, lunchLength: action.length };
            }
            return { ...state, lunch: false, lunchLength: undefined };

        case actions.ADD_MEETING:
            const meetings = [ ...state.meetings ];
            meetings.push(action.meeting);
            return { ...state, meetings };

        case actions.ADD_UNSCHEDULED_MEETING:
            const unscheduledMeetings = [ ...state.unscheduledMeetings ];
            unscheduledMeetings.push(action.meeting);
            return { ...state, unscheduledMeetings };

        case actions.ADD_NON_WORK_APPOINTMENT:
            const nonWorkAppointments = [ ...state.nonWorkAppointments ];
            nonWorkAppointments.push(action.meeting);
            return { ...state, nonWorkAppointments };

        case actions.ADD_SHALLOW_WORK_TASK:
            const shallowWork = [ ...state.shallowWork ];
            shallowWork.push(action.task);
            return { ...state, shallowWork };

        case actions.INCREMENT_DAY_PREP_CURRENT_INDEX:
            return { ...state, dayPrepCurrentIndex: state.dayPrepCurrentIndex + action.increment };

        case actions.TOGGLE_FLOW_TIME_AVAILABLE:
            return { ...state, flowTimeAvailable: action.flowTime };

        case actions.TOGGLE_DAY_WENT_ACCORDING_TO_PLAN:
            return { ...state, dayWentAccordingToPlan: action.toPlan };

        case actions.SET_TIME_SPENT_ON_INTERRUPTIONS:
            if (action.time) {
                return { ...state, dayHadInterruptions: true, timeSpentOnInterruptions: action.time };
            }
            return { ...state, dayHadInterruptions: false, timeSpentOnInterruptions: undefined };

        case actions.SET_TIME_SPENT_ON_DISTRACTIONS:
                if (action.time) {
                    return { ...state, dayHadDistractions: true, timeSpentOnDistractions: action.time };
                }
                return { ...state, dayHadDistractions: false, timeSpentOnDistractions: undefined };

        case actions.TOGGLE_FLOW_TIME_USED_FOR_DEEP_WORK:
            return { ...state, flowTimeUsedForDeepWork: action.deepWork };

        case actions.SET_LEVEL_OF_FLOW_ACHIEVED:
            return { ...state, flowAchieved: action.flow };

        case actions.TOGGLE_DAY_IS_READY:
            return { ...state, dayIsReady: action.isReady };

        case actions.TOGGLE_DAY_IS_COMPLETE:
            return { ...state, dayIsComplete: action.isComplete };

        default:
            return state;
    }
}