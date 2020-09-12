import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from 'components/atoms/Button';
import ButtonIcon from 'components/atoms/ButtonIcon';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import InputGroup from 'components/molecules/InputGroup';
import { itemTypes } from 'config';
import { addItem as addItemAction } from 'actions/items';
import withPageContext from 'hoc/withPageContext';
import multiplyIcon from 'assets/icons/multiply.svg';

const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.white};
    width: 68rem;
    height: 100vh;
    padding: 10rem 9rem;
    border-left: 1rem solid ${({ color }) => (theme[color] ? theme[color] : color)};
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    transform: translate(${({ isVisible }) => (isVisible ? '0%' : '100%')});
    transition: transform 0.25s ease-in-out;
  `}
`;

const StyledParagraph = styled(Paragraph)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  @media (max-width: 575.98px) {
    top: 3.4rem;
    bottom: 0;
  }
`;

const defaultSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(32, 'Too Long!').required('Required'),
  content: Yup.string().min(2, 'Too Short!').max(250, 'Too Long!').required('Required'),
});

const defaultFields = {
  title: '',
  content: '',
};

class NewItemBar extends Component {
  state = {
    initialValues: {
      notes: { ...defaultFields },
      twitters: { ...defaultFields, twitterName: '' },
      articles: { ...defaultFields, articleUrl: '' },
    },
    validationSchema: {
      notes: defaultSchema,
      twitters: defaultSchema.concat(
        Yup.object().shape({
          twitterName: Yup.string().min(2, 'Too Short!').max(32, 'Too Long!').required('Required'),
        }),
      ),
      articles: defaultSchema.concat(
        Yup.object().shape({
          articleUrl: Yup.string().min(2, 'Too Short!').max(32, 'Too Long!').required('Required'),
        }),
      ),
    },
  };

  render() {
    const { isVisible, isPending, pageContext, handleClose, addItem } = this.props;
    const { initialValues, validationSchema } = this.state;
    return (
      <Wrapper isVisible={isVisible} color={pageContext}>
        <Heading big>Add new {pageContext}</Heading>
        <StyledParagraph>A note requires title and description</StyledParagraph>
        <Formik
          initialValues={initialValues[pageContext]}
          validationSchema={validationSchema[pageContext]}
          onSubmit={(values, { resetForm }) => {
            addItem(pageContext, values);
            resetForm();
            handleClose();
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form autoComplete="off">
              <InputGroup
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {pageContext === 'twitters' && (
                <InputGroup
                  type="text"
                  name="twitterName"
                  placeholder="Twitter name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.twitterName}
                />
              )}
              {pageContext === 'articles' && (
                <InputGroup
                  type="text"
                  name="articleUrl"
                  placeholder="Link"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.articleUrl}
                />
              )}
              <InputGroup
                as="textarea"
                type="text"
                name="content"
                placeholder="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <Button type="submit" color={pageContext} disabled={isPending}>
                Add {pageContext}
              </Button>
              <StyledButtonIcon
                type="button"
                round
                icon={multiplyIcon}
                color={pageContext}
                onClick={handleClose}
              />
            </Form>
          )}
        </Formik>
      </Wrapper>
    );
  }
}

NewItemBar.propTypes = {
  isVisible: PropTypes.bool,
  isPending: PropTypes.bool,
  pageContext: PropTypes.oneOf(itemTypes).isRequired,
  handleClose: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  isVisible: false,
  isPending: false,
};

const mapStateToProps = ({ isPending }) => ({
  isPending,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, item) => dispatch(addItemAction(itemType, item)),
});

export default withPageContext(connect(mapStateToProps, mapDispatchToProps)(NewItemBar));
