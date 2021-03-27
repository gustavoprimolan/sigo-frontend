import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Popconfirm, Table, Space } from 'antd';

import { makeSelectConsultancyList } from '../consultancy.selectors';
import { deleteConsultancyAction } from '../consultancy.actions';


function ConsultancyTable(props) {
  const columns = [
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
    {
      title: 'Ação',
      dataIndex: 'acao',
      key: 'acao',
      render: (text, record) => (
        <Space size="middle">
          <Popconfirm title="Certeza que deseja excluir?" onConfirm={() => {this.onDelete(record.key)}}>
            <a>Excluir</a>
          </Popconfirm>
          <a>Editar</a>
        </Space>
      ),
    },
  ];

  onDelete = (key) => {
    props.key = key;
  }

  return <Table dataSource={props.consultancyList} columns={columns} />;
}

ConsultancyTable.propTypes = {
  consultancyList: PropTypes.array,
  onDeleteConsultancy: PropTypes.func,

};

const mapStateToProps = createStructuredSelector({
  consultancyList: makeSelectConsultancyList(),
  key: makeSelectKey(),
});

const mapDispatchToProps = dispatch => ({
  onDeleteConsultancy: () => dispatch(deleteConsultancyAction()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(ConsultancyTable);
