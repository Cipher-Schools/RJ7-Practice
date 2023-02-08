export const globalState = [
  {
    id: 1,
    title: "Watching Movie",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Eating Food",
    isCompleted: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (action.id === todo.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
