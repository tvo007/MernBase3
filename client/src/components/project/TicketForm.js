import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTicket} from '../../actions/project';

const TicketForm = ({projectId, addTicket}) => {
  const [ticketDescription, setTicketDescription] = useState ('');
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Describe your bug.</h3>
      </div>
      <form
        className="form my-1"
        onSubmit={e => {
          e.preventDefault ();
          addTicket (projectId, {ticketDescription});
          setTicketDescription ('');
        }}
      >
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Enter your bug summary here."
          value={ticketDescription}
          onChange={e => setTicketDescription (e.target.value)}
          required
        />
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div>
  );
};

TicketForm.propTypes = {
  addTicket: PropTypes.func.isRequired,
};

export default connect (null, {addTicket}) (TicketForm);
