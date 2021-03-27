import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Modal, Input, Icon, Upload } from 'antd';

import {
  makeSelectModalVisible,
  makeSelectModalLoading,
  makeSelectTitle,
  makeSelectText,
  makeSelectPhoto,
} from '../consultancy.selectors';
import {
  handleModalCancelAction,
  postConsultanciesAction,
  onChangeTitleAction,
  onChangeTextAction,
  onChangeAddPhotoAction,
  onChangeDelPhotoAction,
} from '../consultancy.actions';

function WriteConsultancyModal(props) {
  return (
    <Modal
      title="Consultoria e Assessorias"
      visible={props.modalVisible}
      onOk={props.postConsultancies}
      confirmLoading={props.modalLoading}
      onCancel={props.handleModalCancel}
    >
      <div style={{ marginBottom: 16 }}>
        <Input placeholder="Title" onChange={props.onChangeTitle} value={props.title} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <Input.TextArea
          rows={4}
          placeholder="Write some text..."
          onChange={props.onChangeText}
          value={props.text}
        />
      </div>
      {/* <div style={{ marginBottom: 16 }}>
        <Upload
          onRemove={props.onChangeDelPhoto}
          beforeUpload={props.onChangeAddPhoto}
          fileList={props.photo}
          accept="image/*"
        >
          <Button>
            <Icon type="upload" /> Select a Photo
            </Button>
        </Upload>
      </div> */}
    </Modal>
  )
}

WriteConsultancyModal.propTypes = {
  modalVisible: PropTypes.bool,
  modalLoading: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  photo: PropTypes.array,
  postConsultancies: PropTypes.func,
  handleModalCancel: PropTypes.func,
  onChangeTitle: PropTypes.func,
  onChangeText: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  modalVisible: makeSelectModalVisible(),
  modalLoading: makeSelectModalLoading(),
  title: makeSelectTitle(),
  text: makeSelectText(),
});

const mapDispatchToProps = dispatch => ({
  postConsultancies: () => dispatch(postConsultanciesAction()),
  handleModalCancel: () => dispatch(handleModalCancelAction()),
  onChangeTitle: e => dispatch(onChangeTitleAction(e.target.value)),
  onChangeText: e => dispatch(onChangeTextAction(e.target.value)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WriteConsultancyModal);
