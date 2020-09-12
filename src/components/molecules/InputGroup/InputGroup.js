import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import styled, { css } from 'styled-components';
import Input from 'components/atoms/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.6rem;
`;

const TextArea = styled(Input)`
  resize: none;
  height: 30vh;
  font-family: ${({ theme }) => theme.fontFamily};
  border-radius: 2rem;
`;

const Message = styled.p`
  ${({ theme }) => css`
    margin: 0.4rem 0 0 2.4rem;
    color: ${theme.red};
    font-size: ${theme.fontSize.xs};
  `}
`;

const InputGroup = ({ as, name, ...props }) => (
  <Wrapper>
    <>
      {as === 'textarea' ? (
        <TextArea name={name} as={as} {...props} />
      ) : (
        <Input name={name} {...props} />
      )}
      <ErrorMessage name={name}>{(msg) => <Message>{msg}</Message>}</ErrorMessage>
    </>
  </Wrapper>
);

InputGroup.propTypes = {
  as: PropTypes.string,
  name: PropTypes.string.isRequired,
};

InputGroup.defaultProps = {
  as: 'input',
};

export default InputGroup;
