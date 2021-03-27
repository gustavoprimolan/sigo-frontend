import { createSelector } from 'reselect';
import { initialState } from './consultancy.reducer';

const selectConsultancyDomain = state => state.consultancy || initialState;

const makeSelectConsultancyList = () =>
  createSelector(
    selectConsultancyDomain,
    substate => substate.consultancyList,
  );

const makeSelectModalVisible = () =>
  createSelector(
    selectConsultancyDomain,
    substate => substate.modalVisible,
  );
const makeSelectModalLoading = () =>
  createSelector(
    selectConsultancyDomain,
    substate => substate.modalLoading,
  );

const makeSelectTitle = () =>
  createSelector(
    selectConsultancyDomain,
    substate => substate.consultancyForm.title,
  );
const makeSelectText = () =>
  createSelector(
    selectConsultancyDomain,
    substate => substate.consultancyForm.text,
  );
const makeSelectKey = () =>
    createSelector(selectConsultancyDomain, substate => substate.consultancyList);

export {
  selectConsultancyDomain,
  makeSelectConsultancyList,
  makeSelectModalVisible,
  makeSelectModalLoading,
  makeSelectTitle,
  makeSelectText,
};
