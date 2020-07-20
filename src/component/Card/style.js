import styled from 'styled-components';

export const CardWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #fff;
  min-width: 280px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  padding-left: 10px;
  border-left: 3px solid #f00;
  margin-bottom: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
  padding-left: 8px;
  padding-right: 8px;
`;

export const EstimateDate = styled.span`
  font-size: 12px;
  padding: 4px;
  background-color: ${(props) =>
    props.overTime ? '#f00' : props.done ? '#44c349' : '#e5e5e5'};
  color: ${(props) => (props.overTime || props.done ? '#fff' : '#000')};
  border-radius: 4px;
  margin-right: 2px;
  margin-left: 2px;
  span {
    display: inline-block;
    margin-left: 5px;
  }
`;

export const Comments = styled.span`
  font-size: 12px;
  padding: 4px;
  background-color: #e5e5e5;
  border-radius: 4px;
  margin-right: 2px;
  margin-left: 2px;
  span {
    display: inline-block;
    margin-left: 5px;
  }
`;
export const Attachments = styled(Comments)``;

export const User = styled(Comments)``;
export const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;
