import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { POST_SIGN_IN_REQUEST } from './signin.constants';
import { postSignInAPI } from './signin.api';
import { postSignInSuccess, postSignInFailure } from './signin.actions';
import { makeSelectEmail, makeSelectPassword } from './signin.selectors';

export function* postSignInSaga() {
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());

  try {
    // const user = yield call(postSignInAPI, { email, password });
    const user = {
      data: {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwZXJtaXNzaW9ucyI6WyJhZG1pbiJdfQ.Ij03jOca3qKcrJYsWuAGP8auAKImY97MvV4U8RU7-ls',
      },
    };
    yield put(postSignInSuccess(user));
    yield put(push('/'));
  } catch (error) {
    yield put(postSignInFailure(error));
  }
}

export default function* signInSaga() {
  yield takeLatest(POST_SIGN_IN_REQUEST, postSignInSaga);
}
