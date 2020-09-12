import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions/items';
import filterItems from 'utils/filterItems';

class Twitters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twitters: props.twitters,
    };
  }

  componentDidMount() {
    const { fetchTwitters } = this.props;
    fetchTwitters();
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate = (prevProps) => {
    const { twitters } = this.props;
    if (JSON.stringify(prevProps.twitters) !== JSON.stringify(twitters)) {
      this.setState({ twitters });
    }
  };

  handleSearch = (ev) => {
    const { twitters } = this.props;
    const result = filterItems(twitters, ev.target.value);
    this.setState({ twitters: result });
  };

  render() {
    const { twitters } = this.state;
    return (
      <GridTemplate handleSearch={this.handleSearch}>
        {twitters.map(({ id, title, twitterName, created, content }) => (
          <Card
            key={id}
            id={id}
            title={title}
            twitterName={twitterName}
            created={created}
            content={content}
          />
        ))}
      </GridTemplate>
    );
  }
}

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object),
  fetchTwitters: PropTypes.func.isRequired,
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

const mapDispatchToProps = (dispatch) => ({
  fetchTwitters: () => dispatch(fetchItems('twitters')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Twitters);
