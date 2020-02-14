import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTask} from '../../actions/project';

const TaskForm = ({projectId, addTask}) => {
  const [taskDescription, setTaskDescription] = useState ('');
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Set a task</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault ();
          addTask (projectId, {taskDescription});
          setTaskDescription ('');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Enter a task description"
          value={taskDescription}
          onChange={e => setTaskDescription (e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect (null, {addTask}) (TaskForm);
