import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';

import { DragableContainerWrapper } from './style';
import CardContainer from '../../component/CardContainer';
import { reorderList, moveList } from '../../redux/Task/action';

import ModalForm from '../../component/ModalForm';

const renderCardContainer = (tasks) => {
  return Object.keys(tasks).map((item, index) => (
    <CardContainer key={index} type={tasks[item]} name={item} />
  ));
};

const DragableContainer = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      dispatch(reorderList(source, destination, tasks));
    } else {
      dispatch(moveList(source, destination, tasks));
    }
  };

  return (
    <DragableContainerWrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {renderCardContainer(tasks)}
      </DragDropContext>

      <ModalForm />
    </DragableContainerWrapper>
  );
};

export default DragableContainer;
