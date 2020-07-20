import styled from 'styled-components';

export const CardContainerWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 5px;
  border-radius: 4px;
`;

export const CardContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0 10px;
  min-width: 300px;
  background-color: #e5e5e5;
  border-radius: 4px;
`;
export const CardContainerTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const CardContainerDropable = styled.div`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
