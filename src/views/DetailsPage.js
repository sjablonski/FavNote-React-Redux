import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import LoadingPageTemplate from 'templates/LoadingPageTemplate';
import { fetchItem as fetchItemAction } from 'actions/items';
import withPageContext from 'hoc/withPageContext';
import isEmptyObject from 'utils/isEmptyObject';

class DetailsPage extends Component {
  componentDidMount() {
    const { activeItem, fetchItem } = this.props;
    if (isEmptyObject(activeItem)) {
      fetchItem();
    }
  }

  render() {
    const { activeItem } = this.props;
    if (!isEmptyObject(activeItem)) {
      return <DetailsTemplate item={activeItem} />;
    }
    return <LoadingPageTemplate />;
  }
}

DetailsPage.propTypes = {
  activeItem: PropTypes.shape({
    title: PropTypes.string,
    created: PropTypes.number,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string,
  }),
  fetchItem: PropTypes.func.isRequired,
};

DetailsPage.defaultProps = {
  activeItem: {},
};

const mapStateToProps = (state, ownProps) => {
  const { pageContext, match } = ownProps;
  if (state[pageContext]) {
    return {
      activeItem: Object.assign(
        {},
        ...state[pageContext].filter((item) => {
          return item.id.toString() === match.params.id;
        }),
      ),
    };
  }
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItem: () => dispatch(fetchItemAction(ownProps.pageContext, ownProps.match.params.id)),
});

export default withPageContext(connect(mapStateToProps, mapDispatchToProps)(DetailsPage));
