import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {connect} from 'react-redux';
import {getProjects} from '../../actions/project';
import ProjectItem from '../projects/ProjectItem';
import ProjectForm from '../projects/ProjectForm';

const Projects = ({getProjects, project: {projects, loading}}) => {
  useEffect (
    () => {
      getProjects ();
    },
    [getProjects]
  );

  return loading
    ? <Spinner />
    : <Fragment>
        <h1 className="large text-primary">Projects</h1>
        <p className="lead">
          <i className="fas fa-user" /> Let's build something together!
        </p>
        <ProjectForm />
        <div className="posts">
          {projects.map (project => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
      </Fragment>;
};

Projects.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  project: state.project,
});

export default connect (mapStateToProps, {getProjects}) (Projects);

//prelim mock up of projects folder
