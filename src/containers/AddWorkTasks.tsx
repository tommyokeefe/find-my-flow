import React from 'react';
import { connect } from 'react-redux'

import { AppState, Task } from '../state';
import { toggleDayIsReady, addShallowWorkTask } from '../state/actions';
import Tasks from '../components/Tasks';

const mapStateToProps = (state: AppState) => ({ tasks: state.shallowWork });

const mapDispatchToProps = (dispatch: CallableFunction) => ({
    onClickAddTask: (task: Task) => dispatch(addShallowWorkTask(task)),
    onClickFinishedAddingTasks: () => dispatch(toggleDayIsReady(true)),
});

interface AddWorkTasksProps {
    tasks: Task[];
    onClickAddTask: any;
    onClickFinishedAddingTasks: any;
}

const AddWorkTasks = ({ tasks, onClickAddTask, onClickFinishedAddingTasks }: AddWorkTasksProps) => {
    let title: any;
    let estimatedTime: any;

    const onClickSubmit = (e: any) => {
        e.preventDefault();
        const task: Task = {
            title: title.value,
            estimatedTime: estimatedTime.value,
        };
        onClickAddTask(task);
        title.value = '';
        estimatedTime.value = '';
    };

    return (
        <div>
            <Tasks tasks={tasks} />
            <h2>Add NonFlow/"Shallow" Tasks:</h2>
            <form onSubmit={onClickSubmit}>
                Task:<br />
                <input placeholder="Appointment" ref={node => { title = node; }} /><br />
                Estimated time to finish the task (in minutes)<br />
                <input placeholder="30" ref={node => { estimatedTime = node; }} /><br />
                <button type="submit">Submit</button><br />
            </form>
            <button onClick={onClickFinishedAddingTasks}>Done Adding Tasks</button>
        </div>
    );
};

const AddWorkTasksContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddWorkTasks);

export default AddWorkTasksContainer;