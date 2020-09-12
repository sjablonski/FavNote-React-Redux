import styled, { css } from 'styled-components';

const Paragraph = styled.p`
  ${({ theme }) => css`
    margin: 0 0 4.8rem 0;
    font-size: ${theme.fontSize.s};
    font-weight: ${theme.light};
  `}
`;

export default Paragraph;
