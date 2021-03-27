import { takeLatest, call, put, select } from 'redux-saga/effects';
import { getConsultanciesSuccess, getConsultanciesFailure, postConsultanciesFailure, postConsultanciesSuccess, getConsultanciesAction } from './consultancy.actions';
import { DELETE_CONSULTANCY_REQUEST, GET_CONSULTANCIES_REQUEST, POST_CONSULTANCIES_REQUEST } from './consultancy.constants';
import { getConsultanciesAPI, postConsultanciesAPI, deleteConsultancyAPI } from './consultancy.api';
import { makeSelectTitle, makeSelectText } from './consultancy.selectors';

export function* getConsultanciesSaga() {
  try {
    const consultancyList = yield call(getConsultanciesAPI);
    yield put(getConsultanciesSuccess(consultancyList));
  } catch (error) {
    yield put(getConsultanciesFailure(error));
  }
}

export function* postConsultanciesSaga() {
  const title = yield select(makeSelectTitle());
  const text = yield select(makeSelectText());

  try {
    yield call(postConsultanciesAPI, { title, text });
    yield put(postConsultanciesSuccess());
    yield put(getConsultanciesAction());
  } catch (error) {
    yield put(postConsultanciesFailure(error));
  }
}

export function* deleteConsultancySaga() {
  const key = yield select(makeSelectKey());
  try {
    yield call(deleteConsultancyAPI, key);
    // yield put(postConsultanciesSuccess());
    yield put(getConsultanciesAction());
  } catch (error) {
    console.log('Erro');
    // yield put(postConsultanciesFailure(error));
  }
}

export default function* consultancySaga() {
  yield takeLatest(GET_CONSULTANCIES_REQUEST, getConsultanciesSaga);
  yield takeLatest(POST_CONSULTANCIES_REQUEST, postConsultanciesSaga);
  yield takeLatest(DELETE_CONSULTANCY_REQUEST, deleteConsultancySaga);
}
