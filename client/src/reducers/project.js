import {
  GET_PROJECTS,
  PROJECT_ERROR,
  DELETE_PROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK_COMPLETED,
} from '../actions/types';

const initialState = {
  projects: [],
  project: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: payload,
        loading: false,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: payload,
        loading: false,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [payload, ...state.projects],
        loading: false,
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter (project => project._id !== payload),
        loading: false,
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case TOGGLE_TASK_COMPLETED:
      return {
        ...state,
        project: {
          ...state.project,
          tasks: state.project.tasks.map (
            (task, index) =>
              task._id === payload.taskId
                ? {...task, isCompleted: payload.isCompleted[index].isCompleted}
                : task
          ),
        },
        loading: false,
      };
    case ADD_TASK:
      return {
        ...state,
        project: {...state.project, tasks: payload},
        loading: false,
      };
    case REMOVE_TASK:
      return {
        ...state,
        project: {
          ...state.project,
          tasks: state.project.tasks.filter (task => task._id !== payload),
        },
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * case TOGGLE_TASK_COMPLETED:
      return {
        ...state,
        project: {
          ...state.project,
          tasks: state.tasks.map (
            task =>
              task._id === payload.taskId
                ? {...task, isCompleted: payload.isCompleted}
                : task
          ),
        },
        loading: false,
      };
 */
