export const initialState = [
    {
      id: 0,
      text: '1',
      completed: false
    },
    {
      id: 1,
      text: '2',
      completed: false
    },
  ];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    }

    case "TOGGLE_TODO": {
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }

    default:
      return state;
  }
};

export default todosReducer;
