import styled from 'styled-components';

import theme from '@/theme';

export const FormContainer = styled.form<{
  ref: React.RefObject<HTMLFormElement>;
}>`
  grid-area: contact-form;
  width: 100%;
  justify-self: flex-end;
  display: grid;

  grid-template:
    'email name'
    'theme theme'
    'message message'
    'button button' / 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template:
      'email'
      'name'
      'theme'
      'message'
      'button' / 1fr;
  }

  input:hover,
  textarea:hover {
    border-color: ${theme.colors.primary};
  }

  input:focus,
  textarea:focus {
    outline: none;
    border: 2px solid ${theme.colors.primary};
  }

  input.error,
  textarea.error {
    border: 2px solid ${theme.colors.red};
  }
`;

export const EmailField = styled.input`
  grid-area: email;
  height: 54px;
  padding-left: 25px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid ${theme.colors.grey};
  border-radius: 6px;
`;

export const NameField = styled.input`
  grid-area: name;
  height: 54px;
  padding-left: 25px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid ${theme.colors.grey};
  border-radius: 6px;
`;

export const EmailNameWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const SubjectField = styled.input`
  grid-area: theme;
  width: 100%;
  height: 54px;
  padding-left: 25px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid ${theme.colors.grey};
  border-radius: 6px;
`;
export const MessageField = styled.textarea`
  grid-area: message;
  resize: none;
  width: 100%;
  height: 140px;
  padding-left: 25px;
  padding-top: 15px;
  font-family: 'Open Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid ${theme.colors.grey};
  border-radius: 6px;
`;

export const SendButton = styled.button`
  grid-area: button;
  justify-self: flex-end;
  width: 137px;
  height: 44px;
  border-radius: 6px;
  border: none;
  align-self: flex-end;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.white};
  background: ${theme.colors.primary};

  &:hover {
    cursor: pointer;

    box-shadow: 0px 12px 30px rgba(24, 92, 255, 0.18);
  }

  @media (max-width: 768px) {
    height: 54px;
    width: 100%;

    font-size: 16px;
  }
`;
