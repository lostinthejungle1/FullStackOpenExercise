import axios from "axios";

const base_url ='http://localhost:3001/persons/'

const create = (newObj)=>{
    return axios.post(base_url,newObj).then(res=>res.data)
}

const getAll = ()=>{
    return axios.get(base_url).then(res=>res.data)
}

const deletePerson = id=>axios.delete(`${base_url}${id}`).then(res=>res.data)

const updateNumber = (id,newObj)=>axios.put(`${base_url}${id}`,newObj).then(res=>res.data);
export default {create,getAll,deletePerson,updateNumber}