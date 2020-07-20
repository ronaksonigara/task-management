export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export const randomColoricker = () => {
  const value = Math.floor(Math.random() * Math.floor(2));
  if (value) {
    return '#ffe500';
  }
  return '#f00';
};

export const estimateDateFormat = (date) => {
  let value = new Date(new Date(date).toDateString());
  if (value) {
    const formatedDate = value
      .toLocaleString('default', { month: 'short', day: '2-digit' })
      .split(' ');

    return `${formatedDate[1]}, ${formatedDate[0]}`;
  }
  return value;
};

export const nameFormat = (name) => {
  const nameArr = name.trim().split(' ');
  if (nameArr.length > 1) {
    return nameArr[0][0] + nameArr[1][0];
  }
  return nameArr[0][0] + nameArr[0][1];
};

export const overEsitmation = (name, date) => {
  const estimationDate = new Date(new Date(date).toDateString());
  const today = new Date(new Date().toDateString());
  if (today > estimationDate && (name === 'todo' || name === 'inProgress')) {
    return true;
  }
  return false;
};
