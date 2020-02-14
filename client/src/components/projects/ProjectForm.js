import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addProject} from '../../actions/project';

const ProjectForm = ({addProject}) => {
  //create a controlled form and model off of createProfile.js

  const [formData, setFormData] = useState ({
    title: '',
    description: '',
  });

  const {title, description} = formData;

  const onChange = e =>
    setFormData ({...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault ();
    addProject (formData);
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Enter Project Name: ...</h3>
      </div>
      <form className="form my-1" onSubmit={e => onSubmit (e)}>
        <textarea
          name="title"
          cols="30"
          rows="5"
          placeholder="Enter a name for your project."
          value={title}
          onChange={e => onChange (e)}
          required
        />
        <div className="bg-primary p">
        <h3>Enter a description of your project: </h3>
      </div>
        <textarea
          name="description"
          cols="30"
          rows="5"
          placeholder="Enter a description"
          value={description}
          onChange={e => onChange (e)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

ProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired,
};

export default connect (null, {addProject}) (ProjectForm);

//--------------------------------------

/**ProjectForm.js backup
 * 
 * 
 * import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addProject} from '../../actions/project';

const ProjectForm = ({addProject}) => {
  //create a controlled form and model off of createProfile.js

  
  const [text, setText] = useState ('');
  
  
  
  
  
  
  
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Enter Project Name: ...</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault ();
          addProject ({text});
          setText ('');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={e => setText (e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

ProjectForm.propTypes = {
  addProject: PropTypes.func.isRequired,
};

export default connect (null, {addProject}) (ProjectForm);

 */
