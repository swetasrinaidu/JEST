const axios = require('axios').default;

const getPeopleAxios = axios=> {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(data =>{ console.log("success",data.data.id)})
            .catch(error=>console.log(error))
}
getPeopleAxios(axios)

const getPeople = async (axios) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
             .then(data =>{
                return{
                    count:data.count,
                    results:data.results
                }
   
            })
} 
getPeople(axios)

module.exports = {
    getPeopleAxios: getPeopleAxios,
    getPeople: getPeople
}