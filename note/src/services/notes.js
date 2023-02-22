import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

const getAll = ()=>axios.get(baseUrl).then(res=>{
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
      }
    return res.data.concat(nonExisting)});

const create = (newObject)=>axios.post(baseUrl,newObject).then(res=>res.data);

const update = (id,newObject)=>axios.put(baseUrl+'/'+id,newObject)
.then(res=>{
    console.log('sucesss')
    return res.data})

export default {
    getAll,create,update
}