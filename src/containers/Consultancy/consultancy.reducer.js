import produce from 'immer';
import {
  GET_CONSULTANCIES_SUCCESS,
  HANDLE_MODAL_SHOW,
  HANDLE_MODAL_CANCEL,
  POST_CONSULTANCIES_REQUEST,
  POST_CONSULTANCIES_SUCCESS,
  POST_CONSULTANCIES_FAILURE,
  ON_CHANGE_TEXT,
  ON_CHANGE_TITLE,
  DELETE_CONSULTANCY_REQUEST,
} from './consultancy.constants';

export const initialState = {
  consultancyList: [],
  modalVisible: false,
  modalLoading: false,
  consultancyForm: {
    title: '',
    text: '',
  },
};

const consultancyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CONSULTANCIES_SUCCESS:
        draft.consultancyList = action.payload.data;
        break;
      case POST_CONSULTANCIES_REQUEST:
        draft.modalLoading = true;
        break;
      case POST_CONSULTANCIES_SUCCESS:
        draft.modalLoading = false;
        draft.modalVisible = false;
        draft.consultancyForm = {
          title: '',
          text: '',
          // photo: [],
        };
        break;
      case POST_CONSULTANCIES_FAILURE:
        draft.modalLoading = false;
        break;
      case DELETE_CONSULTANCY_REQUEST:
        draft.modalVisible = false;
        break;
      case HANDLE_MODAL_SHOW:
        draft.modalVisible = true;
        break;
      case HANDLE_MODAL_CANCEL:
        draft.modalLoading = false;
        draft.modalVisible = false;
        break;
      case ON_CHANGE_TITLE:
        draft.consultancyForm.title = action.payload;
        break;
      case ON_CHANGE_TEXT:
        draft.consultancyForm.text = action.payload;
        break;
      // case ON_CHANGE_ADD_PHOTO:
      //   draft.consultanciesForm.photo = [action.payload];
      //   break;
      // case ON_CHANGE_DEL_PHOTO:
      //   draft.consultanciesForm.photo = [];
      //   break;
    }
  });

export default consultancyReducer;
