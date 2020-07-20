import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import {
  CardContainerStyled,
  CardContainerWrapper,
  CardContainerTitle,
  CardContainerDropable
} from './style';
import Card from '../Card';

const title = {
  todo: 'ToDo',
  inProgress: 'In Progress',
  inReview: 'In Review',
  done: 'Done'
};

const CardContainer = (props) => {
  const { type, name } = props;
  return (
    <CardContainerWrapper>
      <CardContainerStyled>
        <CardContainerTitle>{title[name]}</CardContainerTitle>
        <Droppable droppableId={name}>
          {(provided, snapshot) => (
            <CardContainerDropable ref={provided.innerRef}>
              {type.map((item, index) => (
                <Draggable
                  key={index}
                  draggableId={`${name}-${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Card
                      item={item}
                      name={name}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </CardContainerDropable>
          )}
        </Droppable>
      </CardContainerStyled>
    </CardContainerWrapper>
  );
};

export default CardContainer;
