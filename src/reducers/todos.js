const initialState = [
  {
    id: 1,
    text: "你好, 图雀",
    completed: false
  },
  {
    id: 2,
    text: "我是一只小小小小图雀",
    completed: false
  },
  {
    id: 3,
    text: "小若燕雀，亦可一展宏图！",
    completed: false
  }
]


const todos = (state = {...initialState}, action) => {
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

export default todos;
