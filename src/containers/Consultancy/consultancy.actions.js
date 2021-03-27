import {
  GET_CONSULTANCIES_REQUEST,
  GET_CONSULTANCIES_FAILURE,
  GET_CONSULTANCIES_SUCCESS,
  POST_CONSULTANCIES_REQUEST,
  POST_CONSULTANCIES_SUCCESS,
  POST_CONSULTANCIES_FAILURE,
  HANDLE_MODAL_SHOW,
  HANDLE_MODAL_CANCEL,
  ON_CHANGE_TITLE,
  ON_CHANGE_TEXT,
  ON_CHANGE_ADD_PHOTO,
  ON_CHANGE_DEL_PHOTO,
  DELETE_CONSULTANCY_REQUEST,
} from './consultancy.constants';

export const getConsultanciesAction = payload => ({ type: GET_CONSULTANCIES_REQUEST, payload });
export const getConsultanciesSuccess = payload => ({ type: GET_CONSULTANCIES_SUCCESS, payload });
export const getConsultanciesFailure = payload => ({ type: GET_CONSULTANCIES_FAILURE, payload });

export const postConsultanciesAction = payload => ({ type: POST_CONSULTANCIES_REQUEST, payload });
export const postConsultanciesSuccess = payload => ({ type: POST_CONSULTANCIES_SUCCESS, payload });
export const postConsultanciesFailure = payload => ({ type: POST_CONSULTANCIES_FAILURE, payload });

export const deleteConsultancyAction = payload => ({ type: DELETE_CONSULTANCY_REQUEST, payload});

export const handleModalShowAction = payload => ({ type: HANDLE_MODAL_SHOW, payload });
export const handleModalCancelAction = payload => ({ type: HANDLE_MODAL_CANCEL, payload });

export const onChangeTitleAction = payload => ({ type: ON_CHANGE_TITLE, payload });
export const onChangeTextAction = payload => ({ type: ON_CHANGE_TEXT, payload });
// export const onChangeAddPhotoAction = payload => ({ type: ON_CHANGE_ADD_PHOTO, payload });
// export const onChangeDelPhotoAction = payload => ({ type: ON_CHANGE_DEL_PHOTO, payload });
