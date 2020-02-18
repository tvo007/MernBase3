import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTask} from '../../actions/project';
import {toggleTaskCompleted} from '../../actions/project';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const TaskItem = ({
  projectId,
  task: {_id, taskDescription, name, avatar, user, date, isCompleted},
  auth,
  deleteTask,
  toggleTaskCompleted,
}) => {
  const toggleHandler = e => toggleTaskCompleted (projectId, _id);
  const deleteHandler = e => deleteTask (projectId, _id);
  
  const taskCompletedStyling = {
    textDecoration: isCompleted ? 'line-through' : null,
  };

  /**
   * useEffect(() => {
   // take action when isVisible Changed
}, [isVisible])
   */

  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>

        <h1 className="my-1" style={taskCompletedStyling}>Task: {taskDescription}</h1>

        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {!auth.loading &&
          user === auth.user._id &&
          <button
            onClick={toggleHandler}
            type="button"
            className="btn btn-success"
          >
            <i className="fas fa-check" />
          </button>}

        {!auth.loading &&
          user === auth.user._id &&
          <button
            onClick={deleteHandler}
            type="button"
            className="btn btn-danger"
          >
            <i className="fas fa-times" />
          </button>}
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  projectId: PropTypes.string.isRequired,
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps, {deleteTask, toggleTaskCompleted}) (
  TaskItem
);
