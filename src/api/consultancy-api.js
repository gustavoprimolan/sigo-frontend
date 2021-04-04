
const url = 'http://localhost:8080/consultancies';

let consultancies = [{
  id: 1,
  department: "Segurança e Qualidade",
  sector: "Inspecao Qualidade Fornecedores",
  company: "CGA Consultoria Ambiental LTDA",
  cnpj: "66.968.505/0001-52",
  hiringDate: "05/09/2020",
  startDate: "20/09/2020",
  endDate: "20/12/2020",
  situation: "IN_PROGRESS",
  active: true
}]

export const getConsultancies = () => {
  // axios.get(this.url , { params: { token: this.token}})
        //     .then(response => {
        //         const employees = response.data.data.consultancies;
        //         this.setState({ consultancies });
        //     })
        //     .catch(error => {
        //         this.setState({ toDashboard: true });
        //         console.log(error);
        //     });
  return consultancies;
}

export const postConsultancy = (consultancy) => {
  const token = localStorage.getItem("token");
  const id = consultancies[consultancies.length - 1].id + 1;
  consultancy = {...consultancy, id}
  consultancies.push(consultancy);
  return true;
  // const name = document.getElementById("inputName").value;
  // const phone = document.getElementById("inputPhone").value;
  // const email = document.getElementById("inputEmail").value;
  // const location = document.getElementById("inputLoca").value;
  // const empid = document.getElementById("inputEmpId").value;
  // const company = document.getElementById("inputComp").value;

  // let bodyFormData = new FormData();
  // bodyFormData.set("name", name);
  // bodyFormData.set("phone", phone);
  // bodyFormData.set("email", email);
  // bodyFormData.set("location", location);
  // bodyFormData.set("emp_id", empid);
  // bodyFormData.set("company", company);
  // bodyFormData.set("token", token);
  // axios
  //   .post(url, bodyFormData)
  //   .then((result) => {
  //     if (result.data.status) {
  //       this.setState({ redirect: true, isLoading: false });
  //     }
  //   })
  //   .catch((error) => {
  //     this.setState({ toDashboard: true });
  //     console.log(error);
  //   });
};

export const deleteConsultancy = (id) => {
  const token = localStorage.getItem('token');
  consultancies.splice(id-1, 1);
  return true;
  
  // return axios.delete(this.url + '/' + id , { params: { token: this.token}});
  

  // return axios.delete(this.url + '/' + id , { params: { token: this.token}})
  //           .then(response => {
  //               this.componentDidMount();
  //               this.setState({ isLoading: true})
  //           })
  //           .catch( error => {
  //               console.log(error.toString());
  //               this.setState({ toDashboard: true });
  //           });
  // return consultancies.push(consultancy);
}

export const putConsultancy = (consultancy) => {
  consultancies.splice(consultancy.id-1, 1);
  consultancies.push(consultancy);

  return true;
  // const token = localStorage.getItem('token');
  // const url = 'https://gowtham-rest-api-crud.herokuapp.com/employees/'+ this.state.id;
  
  // axios.put(url, { name: name, phone: phone, email:email, location:location, emp_id:empid, company:company, token:token })
  //     .then(result => {
  //         if (result.data.status) {
  //             this.setState({redirect: true, isLoading: false})
  //         }
  //     })
  //     .catch(error => {
  //         this.setState({ toDashboard: true });
  //         console.log(error);
  //     });
      

  // return consultancies.push(consultancy);
}