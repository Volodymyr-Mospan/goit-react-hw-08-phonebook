import Modal from 'react-modal';
import styled from 'styled-components';

export const ModalStyled = styled(Modal)`
  content {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;
