import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions/items';
import filterItems from 'utils/filterItems';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles,
    };
  }

  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate = (prevProps) => {
    const { articles } = this.props;
    if (JSON.stringify(prevProps.articles) !== JSON.stringify(articles)) {
      this.setState({ articles });
    }
  };

  handleSearch = (ev) => {
    const { articles } = this.props;
    const result = filterItems(articles, ev.target.value);
    this.setState({ articles: result });
  };

  render() {
    const { articles } = this.state;
    return (
      <GridTemplate handleSearch={this.handleSearch}>
        {articles.map(({ id, title, articleUrl, created, content }) => (
          <Card
            key={id}
            id={id}
            title={title}
            articleUrl={articleUrl}
            created={created}
            content={content}
          />
        ))}
      </GridTemplate>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  fetchArticles: PropTypes.func.isRequired,
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchItems('articles')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
