import { TASk_TYPES } from './types';
import { reorder, move } from '../../util/helper';

export const reorderList = (source, destination, state) => async (dispatch) => {
  const items = reorder(
    state[source.droppableId],
    source.index,
    destination.index
  );
  const data = { [source.droppableId]: items };
  dispatch({
    type: TASk_TYPES.REORDER,
    payload: data
  });
};

export const moveList = (source, destination, state) => async (dispatch) => {
  const result = move(
    state[source.droppableId],
    state[destination.droppableId],
    source,
    destination
  );
  dispatch({
    type: TASk_TYPES.REORDER,
    payload: result
  });
};

export const addTask = (data) => async (dispatch) => {
  console.log(data);
  dispatch({
    type: TASk_TYPES.ADD_TASK,
    payload: data
  });
};
