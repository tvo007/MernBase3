import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteProject} from '../../actions/project';

const ProjectItem = ({
  auth,
  deleteProject,
  project: {_id, title, name, description, avatar, user, tasks, tickets, date},
  showActions,
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
          Project Name: {title}
        </p>
        <p className="my-1">
          Project description: {description}
        </p>
        <p className="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        {showActions &&
          <Fragment>
            <Link to={`/projects/${_id}`} className="btn btn-primary">
              Tasks
              {' '}
              {tasks.length > 0 &&
                <span className="comment-count">{tasks.length}</span>}
            </Link>
            {!auth.loading &&
              user === auth.user._id &&
              <button
                onClick={() => deleteProject (_id)}
                type="button"
                className="btn btn-danger"
              >
                <i className="fas fa-times" />
              </button>}
          </Fragment>}

      </div>
    </div>
  );
};

ProjectItem.defaultProps = {
  showActions: true,
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps, {deleteProject}) (ProjectItem);
