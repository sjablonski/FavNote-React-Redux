import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { itemTypes } from 'config';
import AdditionalInfo from 'components/atoms/AdditionalInfo';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import RemoveItemModal from 'components/organisms/RemoveItemModal';
import UserPageTemplate from 'templates/UserPageTemplate';
import { removeItem as removeItemAction } from 'actions/items';
import withPageContext from 'hoc/withPageContext';
import toLocaleDate from 'utils/toLocaleDate';
import blankIcon from 'assets/icons/blank';

const Wrapper = styled.div`
  padding: 12rem 13rem;
  width: 65vw;

  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

const Header = styled.header`
  margin-bottom: 3.6rem;

  ${({ grid }) =>
    grid &&
    css`
      display: grid;
      grid-template-columns: 1fr 12rem;

      ${Heading}:first-of-type {
        align-self: flex-end;
      }
    `}
`;

const SubHeading = styled(AdditionalInfo)`
  font-size: ${({ theme }) => theme.fontSize.s};
  grid-row: 2 / 3;
  grid-column: 1 /2;
`;

const Avatar = styled.img`
  width: 12rem;
  height: 12rem;
  background: ${({ theme }) => theme.white};
  border-radius: 50%;
  grid-row: 1 / 3;
  grid-column: 2 / 3;
`;

const StyledLink = styled.a`
  ${({ theme }) => css`
    display: block;
    font-weight: ${theme.bold};
    font-size: ${theme.fontSize.s};
    color: ${theme.black};
    text-transform: uppercase;
    margin-bottom: 4.8rem;
  `}
`;

class DetailsTemplate extends Component {
  state = {
    isRemoveItemModalOpen: false,
  };

  handleRemoveItem = async () => {
    const { history, removeItem } = this.props;
    const result = await removeItem();
    if (result) {
      history.goBack();
    }
  };

  toggleRemoveItemModal = () => {
    this.setState((prevState) => ({
      isRemoveItemModalOpen: !prevState.isRemoveItemModalOpen,
    }));
  };

  render() {
    const {
      item: { title, created, twitterName, articleUrl, content },
      pageContext,
      history,
    } = this.props;
    const { isRemoveItemModalOpen } = this.state;
    return (
      <UserPageTemplate>
        <Wrapper>
          <Header grid={pageContext === 'twitters'}>
            <Heading big>{title}</Heading>
            <SubHeading>CREATED - {toLocaleDate(created)}</SubHeading>
            {pageContext === 'twitters' && (
              <Avatar
                src={twitterName ? `https://unavatar.now.sh/twitter/${twitterName}` : blankIcon}
              />
            )}
          </Header>
          <Paragraph>{content}</Paragraph>
          {pageContext === 'articles' && (
            <StyledLink target="_blank" rel="noopener noreferrer" href={articleUrl}>
              Open article
            </StyledLink>
          )}
          <Button color={pageContext} onClick={history.goBack}>
            Close
          </Button>
          <Button color="red" onClick={this.toggleRemoveItemModal}>
            Remove
          </Button>

          {isRemoveItemModalOpen && (
            <RemoveItemModal
              toggleModal={this.toggleRemoveItemModal}
              removeItem={this.handleRemoveItem}
            />
          )}
        </Wrapper>
      </UserPageTemplate>
    );
  }
}

DetailsTemplate.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
  }).isRequired,
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: () => dispatch(removeItemAction(ownProps.pageContext, ownProps.match.params.id)),
});

export default withPageContext(withRouter(connect(null, mapDispatchToProps)(DetailsTemplate)));
