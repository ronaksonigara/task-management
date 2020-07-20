import styled from 'styled-components';
import { CardContainerWrapper } from '../../component/CardContainer/style';

export const DragableContainerWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow-x: auto;
  ${CardContainerWrapper} {
    &:first-child {
      margin-left: 5px;
    }
    &:last-child {
      margin-right: 5px;
    }
  }
`;
