
import axios from 'axios';

const url = 'https://tcc-puc-309309.uc.r.appspot.com/api/standards';

export const getStandards = async () => {
  const response = await axios.get(url , { headers: { token: localStorage.getItem('token')}})
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.log(error);
  });

  return response ? response : [];
}

export const getStandard = async (id) => {
  console.log(`${url}/${id}`);
  const response = await axios.get(`${url}/${id}` , { headers: { token: localStorage.getItem('token')}})
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.log(error);
  });

  return response ? response : [];
}

export const postStandard = async (standard) => {
  const token = localStorage.getItem("token");
  const request = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
    ...standard
  };

  console.log(request);

  const response = await axios.post(url, request)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};

export const deleteStandard = async (id) => {
  return await axios.delete(url + '/' + id , { headers: { token: localStorage.getItem('token')}});
}

export const putStandard = async (standard) => {
  const token = localStorage.getItem("token");
  const request = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
    ...standard
  };

  const response = await axios.put(url, request)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(response);

  return response;
}