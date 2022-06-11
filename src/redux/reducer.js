import actionTypes from "./actionTypes";

const INITIAL_STATE = {
  commands: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_CMD:
      const sprite = action.payload.sprite;
      const cmd = action.payload.cmd;

      if (!state.commands[sprite]) state.commands[sprite] = [];
      const newSpriteCmds = state.commands[sprite];
      newSpriteCmds.push(cmd);

      return {
        ...state,
        commands: {
          ...state.commands,
          [sprite]: [...newSpriteCmds],
        },
      };

    case actionTypes.REMOVE_CMD:
      return {
        ...state,
        commands: {
          ...commands,
          [action.payload.sprite]: action.payload.cmd,
        },
      };

    default:
      return state;
  }
};

export default reducer;
