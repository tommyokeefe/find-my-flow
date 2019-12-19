import React from 'react';
import { connect } from 'react-redux'

import { AppState } from '../state';
import { toggleBuildInBreaks } from '../state/actions';

const mapStateToProps = (state: AppState) => ({ flowTime: state.minimumFlowTime, breaks: state.buildInBreaks });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickBreaks: (breaks: boolean) => dispatch(toggleBuildInBreaks(breaks)),
});

interface BuildInBreaksProps {
    flowTime?: string;
    breaks?: boolean;
    onClickBreaks: any;
}

const BuildInBreaks = ({ flowTime, breaks, onClickBreaks }: BuildInBreaksProps) => {
    if (!flowTime || breaks !== undefined) {
        return <div/>;
    }

    let input: any;

    const onSubmitHandler = (e: any) => {
        console.log(e);
      }

    return (
        <form>
            Do you want breaks built in to your schedule?
            <input type="radio" name="breaks" value="true" onClick={onSubmitHandler} /> Yes<br/>
            <input type="radio" name="breaks" value="false" onClick={onSubmitHandler} /> No<br/>
        </form>
    )
};

const BuildInBreaksContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BuildInBreaks);

export default BuildInBreaksContainer;
