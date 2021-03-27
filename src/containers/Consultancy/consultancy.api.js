import request from 'utils/request';

const consultancyList = {
  data: [
    {
      key: 1,
      id: 1,
      title: 'teste',
      text: 'text1',
      createdAt: 'teste5',
      updatedAt: 'teste6',
    },
    {
      key: 2,
      id: 2,
      title: 'title2',
      text: 'text02',
      createdAt: 'teste55',
      updatedAt: 'teste222',
    },
    {
      key: 3,
      id: 3,
      title: 'title3',
      text: 'text03',
      createdAt: 'teste66',
      updatedAt: 'teste1223',
    }
  ],
};

export function getConsultanciesAPI() {
  return consultancyList;
  // return request.get('v1/posts?limit=100');
}

export function postConsultanciesAPI(payload) {
  // const formData = new FormData();
  // formData.set('title', payload.title);
  // formData.set('text', payload.text);
  // payload.photo && formData.set('photo', payload.photo);

  // return request.post('v1/posts', formData);
}

export function deleteConsultancyAPI(key) {
  console.log('Caiu delete API');
  let indexToDelete = -1;
  consultancyList.forEach((consultancy, index) => {
    if(consultancy.key == key) indexToDelete = index;
  });

  if(indexToDelete > -1) consultancyList.splice(indexToDelete, 1);
  // return request.delete(`v1/consultancies/${key}`);
}
