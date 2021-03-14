import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Table } from 'antd';

import { makeSelectConsultancyList } from '../consultancy.selectors';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Text',
    dataIndex: 'text',
    key: 'text',
    render: text => <pre style={{ marginBottom: 0, maxHeight: 100 }}>{text}</pre>,
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: time => <span>{time}</span>,
  },
  {
    title: 'Updated At',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: time => <span>{time}</span>,
  },
];

function ConsultancyTable(props) {
  return <Table dataSource={props.consultancyList} columns={columns} />;
}

ConsultancyTable.propTypes = {
  consultancyList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  consultancyList: makeSelectConsultancyList(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect, memo)(ConsultancyTable);
