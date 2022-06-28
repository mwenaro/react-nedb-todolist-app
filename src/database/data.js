import React, {useState} from 'react';

  const useData =()=>{
const [data, setData] = useState([]);
React.useEffect(()=>{
    fetchData();
setData(data);
},[data]);
const fetchData = ()=>{
const items = localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[];
setData(items);
return items;
};

const saveData = data=>{
    // setData(data);
    localStorage.setItem('todos', JSON.stringify(data));
    fetchData();
}

const delData=()=>localStorage.removeItem('todos');







    return {fetchData, saveData, delData, data};
  }

  export default useData;

