import axios from 'axios';

const url = 'https://tcc-puc-309309.uc.r.appspot.com/api/consultancies';

export const getConsultancies = async () => {
  const response = await axios.get(url , { headers: { token: localStorage.getItem('token')}})
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.log(error);
  });

  return response ? response : [];
}

export const getConsultancy = async (id) => {
  console.log(`${url}/${id}`);
  const response = await axios.get(`${url}/${id}` , { headers: { token: localStorage.getItem('token')}})
  .then(response => {
    return response.data;
  })
  .catch(error => {
    console.log(error);
  });
  console.log(response);
  return response;
}

export const postConsultancy = async (consultancy) => {
  const token = localStorage.getItem("token");
  const request = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
    ...consultancy
  };

  const response = await axios.post(url, request)
    .then((result) => {
      return result.data;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(response);
  
  return response;
};

export const deleteConsultancy = async (id) => {
  return await axios.delete(url + '/' + id , { headers: { token: localStorage.getItem('token')}});
}

export const putConsultancy = async (consultancy) => {
  const token = localStorage.getItem("token");
  const request = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token
    },
    ...consultancy
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