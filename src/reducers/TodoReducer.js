import Actions from "./actions/Actions";

export default function TodoReducer(state = [], action) {
  switch (action.type) {
    case Actions.ADD_TODO: {
      const updatedState = [
        ...state,
        { Task: action.payload, isChecked: false },
      ];
      return updatedState;
    }

    case Actions.DELETE_TASK: {
      const updatedState = [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
      return updatedState;
    }

    case Actions.TASK_COMPLETED: {
      const updatedState = [
        ...state.slice(0, action.payload),
        {
          ...state[action.payload],
          isChecked: !state[action.payload].isChecked,
        },
        ...state.slice(action.payload+1)
      ];
      
      return updatedState;
    }
    default: {
      return state;
    }
  }
}
