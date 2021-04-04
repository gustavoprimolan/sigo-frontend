
const url = 'http://localhost:8080/consultancies';

let standards = [{
  id: 1,
  file: "http://linkdoarquivo.com",
  code: "ISO-XPTO:2002",
  organization: "ABNT - Associação Brasileira de Normas Técnicas",
  title: "Sistema de Gestão da Qualidade - Fundamentos e vocabulário",
  type: "Externa",
  language: "Portguês",
  releaseDate: "30/09/2015",
  validStartDate: "30/09/2015",
  createdDate: "30/08/2015",
  updatedDate: "",
  valid: true,
  description: "Esta norma descreve os conceitos fundamentias e princípios de gestão da qualidade que são universalmente..."
}]

export const getStandards = () => {
  // axios.get(this.url , { params: { token: this.token}})
        //     .then(response => {
        //         const employees = response.data.data.consultancies;
        //         this.setState({ consultancies });
        //     })
        //     .catch(error => {
        //         this.setState({ toDashboard: true });
        //         console.log(error);
        //     });
  return standards;
}

export const postStandard = (standard) => {
  const token = localStorage.getItem("token");
  const id = standards[standards.length - 1].id + 1;
  standard = {...standard, id}
  standards.push(standard);
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

export const deleteStandard = (id) => {
  const token = localStorage.getItem('token');
  standards.splice(id-1, 1);
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

export const putStandard = (standard) => {
  
  
  
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