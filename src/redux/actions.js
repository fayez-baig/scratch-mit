import actionTypes from "./actionTypes";

export const addCommand = (sprite, cmdID, cmdText) => ({
  type: actionTypes.ADD_CMD,
  payload: { sprite, cmd: { cmdID, cmdText } },
});

export const removeCommand = (sprite, cmdId) => ({
  type: actionTypes.REMOVE_CMD,
  payload: { sprite, cmdId },
});
