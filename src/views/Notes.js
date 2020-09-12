import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from 'components/molecules/Card';
import GridTemplate from 'templates/GridTemplate';
import { fetchItems } from 'actions/items';
import filterItems from 'utils/filterItems';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes,
    };
  }

  componentDidMount() {
    const { fetchNotes } = this.props;
    fetchNotes();
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate = (prevProps) => {
    const { notes } = this.props;
    if (JSON.stringify(prevProps.notes) !== JSON.stringify(notes)) {
      this.setState({ notes });
    }
  };

  handleSearch = (ev) => {
    const { notes } = this.props;
    const result = filterItems(notes, ev.target.value);
    this.setState({ notes: result });
  };

  render() {
    const { notes } = this.state;
    return (
      <GridTemplate handleSearch={this.handleSearch}>
        {notes.map(({ id, title, created, content }) => (
          <Card key={id} id={id} title={title} created={created} content={content} />
        ))}
      </GridTemplate>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  fetchNotes: PropTypes.func.isRequired,
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

const mapDispatchToProps = (dispatch) => ({
  fetchNotes: () => dispatch(fetchItems('notes')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
