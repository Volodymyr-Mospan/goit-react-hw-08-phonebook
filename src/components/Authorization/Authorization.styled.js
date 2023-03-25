import styled from 'styled-components';

export const AuthFormStyled = styled.div`
  Form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    display: flex;
    flex-direction: column;

    input {
      padding: 5px 25px;
      border-radius: 10px;

      font-size: 20px;
    }
  }

  button {
    width: 150px;
    margin-top: 91px;
    padding: 10px 25px;
    /* border-radius: 10px; */
    cursor: pointer;
  }
`;
