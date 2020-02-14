import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTask} from '../../actions/project';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const TaskItem = ({
  projectId,
  task: {_id, taskDescription, name, avatar, user, date},
  auth,
  deleteTask,
}) => {
  return (
    <div className="post bg-white p-1 my-1">
      <div>
        <Link to={`/profile/${user}`}>
          <img className="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className="my-1">
          {taskDescription}
        </p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {!auth.loading &&
          user === auth.user._id &&
          <button
            onClick={e => deleteTask (projectId, _id)}
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
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps, {deleteTask}) (TaskItem);
