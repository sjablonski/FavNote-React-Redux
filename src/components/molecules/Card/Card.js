import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import AdditionalInfo from 'components/atoms/AdditionalInfo';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import { itemTypes } from 'config';
import withPageContext from 'hoc/withPageContext';
import toLocalDate from 'utils/toLocaleDate';
import blankIcon from 'assets/icons/blank';
import linkIcon from 'assets/icons/link.svg';

const Wrapper = styled.div`
  min-height: 38.5rem;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
  border-radius: 0.7rem 0.7rem 0 0;
  box-shadow: 0 1rem 3rem -1rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const Header = styled.header`
  ${({ color, theme }) => css`
    padding: 1.6rem 3.2rem;
    background-color: ${theme[color] ? theme[color] : color};
    border-radius: 0.7rem 0.7rem 0 0;
    position: relative;
  `}
`;

const Avatar = styled.img`
  width: 8.6rem;
  height: 8.6rem;
  background: ${({ theme }) => theme.white};
  border: 0.5rem solid ${({ theme }) => theme.twitters};
  border-radius: 50%;
  position: absolute;
  top: 1.6rem;
  right: 2rem;
`;

const Icon = styled.a`
  display: block;
  width: 4.7rem;
  height: 4.7rem;
  background: white url(${linkIcon}) no-repeat;
  background-position: center;
  background-size: 50% 50%;
  border-radius: 50%;
  position: absolute;
  top: 1.6rem;
  right: 2rem;
`;

const Content = styled.div`
  padding: 3.6rem 3.2rem 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class Card extends Component {
  state = {
    redirect: false,
  };

  handleCardClick = () => {
    this.setState({ redirect: true });
  };

  handleRemoveItem = (ev) => {
    const { id, onRemoveItem } = this.props;
    ev.stopPropagation();
    onRemoveItem(id);
  };

  render() {
    const { id, title, created, twitterName, articleUrl, content, pageContext } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect push to={`${pageContext}/${id}`} />;
    }
    return (
      <Wrapper onClick={this.handleCardClick}>
        <Header color={pageContext}>
          <Heading>{title}</Heading>
          <AdditionalInfo small>{toLocalDate(created)}</AdditionalInfo>
          {pageContext === 'twitters' && (
            <Avatar
              src={twitterName ? `https://unavatar.now.sh/twitter/${twitterName}` : blankIcon}
            />
          )}
          {pageContext === 'articles' && (
            <Icon
              target="_blank"
              rel="noopener noreferrer"
              href={articleUrl}
              onClick={(ev) => ev.stopPropagation()}
            />
          )}
        </Header>
        <Content>
          <Paragraph>{content}</Paragraph>
          <Button onClick={this.handleRemoveItem} secondary>
            Remove
          </Button>
        </Content>
      </Wrapper>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  twitterName: '',
  articleUrl: '',
};

export default withPageContext(Card);
