import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Spinner from '../layout/Spinner';
import ProjectItem from '../projects/ProjectItem';
import TaskForm from '../project/TaskForm';
import TaskItem from '../project/TaskItem';
import TicketForm from '../project/TicketForm';
import TicketItem from '../project/TicketItem';
import {getProject} from '../../actions/project';

const Project = ({getProject, project: {project, loading}, match}) => {
  useEffect (
    () => {
      getProject (match.params.id);
    },
    [getProject, match.params.id]
  );

  return loading || project === null
    ? <Spinner />
    : <Fragment>
        <Link to="/projects" className="btn">
          Back to Projects
        </Link>
        <ProjectItem project={project} showActions={false} />
        <TaskForm projectId={project._id} />
        <div className='comments'>
            {project.tasks.map(task => (
                <TaskItem key={task._id} task={task} projectId={project._id} />
            ))}
        </div>
        <TicketForm projectId={project._id} />
        <div className='comments'>
            {project.tickets.map(ticket => (
                <TicketItem key={ticket._id} ticket={ticket} projectId={project._id} />
            ))}
        </div>
      </Fragment>;
};

Project.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  project: state.project,
});

export default connect (mapStateToProps, {getProject}) (Project);

/**
 * 
 * loading || project === null
    ? <Spinner />


 * <PostItem project={project} showActions={false} />
        <CommentForm postId={project._id} />
        <div className="comments">
          {project.tasks.map (comment => (
            <CommentItem
              key={task._id}
              task={task}
              projectId={project._id}
            />
          ))}
        </div>
 */
