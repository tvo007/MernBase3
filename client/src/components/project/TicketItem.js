import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTicket} from '../../actions/project';
import {toggleTicketCompleted} from '../../actions/project';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

const TicketItem = ({
  projectId,
  ticket: {_id, ticketDescription, name, avatar, user, date, isCompleted},
  auth,
  deleteTicket,
  toggleTicketCompleted,
}) => {
  const toggleHandler = e => toggleTicketCompleted (projectId, _id);
  const deleteHandler = e => deleteTicket (projectId, _id);

  const ticketCompletedStyling = {
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

        <h1 className="my-1" style={ticketCompletedStyling}>
          Ticket: {ticketDescription}
        </h1>

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

TicketItem.propTypes = {
  projectId: PropTypes.string.isRequired,
  ticket: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTicket: PropTypes.func.isRequired,
  toggleTicketCompleted: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect (mapStateToProps, {
  deleteTicket,
  toggleTicketCompleted,
}) (TicketItem);
