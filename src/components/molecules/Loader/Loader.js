import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AdditionalInfo from 'components/atoms/AdditionalInfo';
import Spinner from 'components/atoms/Spinner';
import { itemTypes } from 'config';
import withPageContext from 'hoc/withPageContext';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledAdditionalInfo = styled(AdditionalInfo)`
  margin-top: 3.2rem;
  text-align: center;
`;

const Loader = ({ pageContext }) => (
  <Wrapper>
    <Spinner color={pageContext} />
    <StyledAdditionalInfo>Loading...</StyledAdditionalInfo>
  </Wrapper>
);

Loader.propTypes = {
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
};

export default withPageContext(Loader);
