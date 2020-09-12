import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { itemTypes } from 'config';
import AdditionalInfo from 'components/atoms/AdditionalInfo';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Heading from 'components/atoms/Heading';
import Input from 'components/atoms/Input';
import Loader from 'components/molecules/Loader';
import NewItemBar from 'components/organisms/NewItemBar';
import RemoveItemModal from 'components/organisms/RemoveItemModal';
import UserPageTemplate from 'templates/UserPageTemplate';
import { removeItem as removeItemAction } from 'actions/items';
import withPageContext from 'hoc/withPageContext';
import magnifierIcon from 'assets/icons/magnifier.svg';
import plusIcon from 'assets/icons/plus.svg';

const Wrapper = styled.div`
  padding: 5.8rem 16rem 3.2rem 7.2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8.6rem;
  margin-top: 5.2rem;

  @media all and (max-width: 999.98px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
    grid-gap: 4.3rem;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 2048px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledHeading = styled(Heading)`
  margin-top: 2.6rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
    isRemoveItemModalOpen: false,
    removeItemId: null,
  };

  toggleNewItemBar = (newState) => {
    this.setState((prevState) => ({
      isNewItemBarVisible:
        typeof newState === 'boolean' ? newState : !prevState.isNewItemBarVisible,
    }));
  };

  toggleRemoveItemModal = (removeItemId) => {
    this.setState((prevState) => ({
      removeItemId,
      isNewItemBarVisible: false,
      isRemoveItemModalOpen: !prevState.isRemoveItemModalOpen,
    }));
  };

  handleRemoveItem = () => {
    const { removeItemId } = this.state;
    const { removeItem } = this.props;
    removeItem(removeItemId);
    this.setState({
      removeItemId: null,
      isRemoveItemModalOpen: false,
    });
  };

  render() {
    const { children, pageContext, handleSearch, isPendingFetchItems } = this.props;
    const { isNewItemBarVisible, isRemoveItemModalOpen } = this.state;

    const childrenWithProps = React.Children.map(children, (child) => {
      const props = { onRemoveItem: this.toggleRemoveItemModal };
      if (React.isValidElement(child)) {
        return React.cloneElement(child, props);
      }
      return child;
    });

    return (
      <UserPageTemplate>
        <>
          <Wrapper onClick={() => this.toggleNewItemBar(false)}>
            <Input small placeholder="Search" icon={magnifierIcon} onChange={handleSearch} />
            <StyledHeading big>{pageContext}</StyledHeading>
            <AdditionalInfo>
              {children.length} {pageContext}
            </AdditionalInfo>
            {isPendingFetchItems ? <Loader /> : <Grid>{childrenWithProps}</Grid>}
          </Wrapper>
          <NewItemBar isVisible={isNewItemBarVisible} handleClose={this.toggleNewItemBar} />
          <ButtonIcon round color={pageContext} icon={plusIcon} onClick={this.toggleNewItemBar} />
          {isRemoveItemModalOpen && (
            <RemoveItemModal
              toggleModal={this.toggleRemoveItemModal}
              removeItem={this.handleRemoveItem}
            />
          )}
        </>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
  isPendingFetchItems: PropTypes.bool,
  handleSearch: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

GridTemplate.defaultProps = {
  isPendingFetchItems: false,
};

const mapStateToProps = ({ isPendingFetchItems }) => ({ isPendingFetchItems });

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeItem: (id) => dispatch(removeItemAction(ownProps.pageContext, id)),
});

export default withPageContext(connect(mapStateToProps, mapDispatchToProps)(GridTemplate));
