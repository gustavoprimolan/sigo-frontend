import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button } from 'antd';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { getConsultanciesAction, handleModalShowAction } from './consultancy.actions';
import reducer from './consultancy.reducer';
import saga from './consultancy.saga';

import WriteConsultancyModal from './WriteConsultancyModal';
import ConsultancyTable from './ConsultancyTable';

const key = 'consultancy';

function Consultancy(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    props.getConsultancies();
  }, []);

  return (
    <>
      <Helmet>
        <title>Consultorias e Assessorias</title>
        <meta name="description" content="Consultorias e Assessorias" />
      </Helmet>
      <WriteConsultancyModal />
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={props.handleModalShow}>
          Write
        </Button>
      </div>
      <ConsultancyTable />
    </>
  );
}

Consultancy.propTypes = {
  getConsultancies: PropTypes.func,
  handleModalShow: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  getConsultancies: () => dispatch(getConsultanciesAction()),
  handleModalShow: () => dispatch(handleModalShowAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(Consultancy);
