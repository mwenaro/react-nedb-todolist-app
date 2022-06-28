import React, {useState} from 'react';

const Datastore = require('nedb-promises');

var db = Datastore.create('./todos.db');
// db.insert({ doc: 'yourdoc' })
//   .then((doc,err)=>{
//     console.log({err, doc});
//   })


  const useData =()=>{
const [todos, setTodos] = useData([]);
const [errs, setErrs] = useData([]);
const getAll = (where={})=>{
    db.find(where).then(docs=>{
        return docs;
    }).catch(ex=>setErrs(ex));
}
const getOne = ()=>{}
const insert = (todo)=>{
    db.insert(todo).then(d=>{});
    // getAll({});
}
const insertBulky = ()=>{}
const del= (where)=>{
db.remove(where).then(msg=>{});
}
const delAll= ()=>{
    db.remove({},{multi:true}).then(msg=>{});
    }

const update= (where,payload)=>{
db.update(where, payload).then(d=>{});
};

    return {getAll, insert,delAll, del, update, errs};
  }

  export default useData;