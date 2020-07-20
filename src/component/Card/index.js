import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip, faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  CardWrapperStyled,
  CardTitle,
  CardFooter,
  EstimateDate,
  Comments,
  Attachments,
  User,
  UserWrapper,
  CardBody
} from './style';
import {
  estimateDateFormat,
  nameFormat,
  overEsitmation
} from '../../util/helper';
const Card = forwardRef((props, ref) => {
  const { item, name, ...rest } = props;
  return (
    <CardWrapperStyled {...rest} ref={ref}>
      <CardTitle>{item.title}</CardTitle>
      {item.image && (
        <CardBody>
          <img src={item.image} alt='' />
        </CardBody>
      )}
      <CardFooter>
        {item.estimateDate && (
          <EstimateDate
            overTime={overEsitmation(name, item.estimateDate)}
            done={name === 'done'}
          >
            <FontAwesomeIcon icon={name === 'done' ? faCheck : faBell} />
            <span>{estimateDateFormat(item.estimateDate)}</span>
          </EstimateDate>
        )}

        {item.comments && item.comments.length > 0 && (
          <Comments>
            <FontAwesomeIcon icon={faComment} />
            <span>{item.comments.length}</span>
          </Comments>
        )}
        {item.attachments && item.attachments.length > 0 && (
          <Attachments>
            <FontAwesomeIcon icon={faPaperclip} />
            <span>{item.attachments.length}</span>
          </Attachments>
        )}
        {item.users && item.users.length > 0 && (
          <UserWrapper>
            {item.users.map((item, index) => (
              <User key={index}>{nameFormat(item)}</User>
            ))}
          </UserWrapper>
        )}
      </CardFooter>
    </CardWrapperStyled>
  );
});

export default Card;
