import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HOC from './HOC'
import About from './Abouts'
import Home from './Home'
import Dashboard from './Dashboard'
import Pagenotfound from './Pagenotfound';
import {useSate} from 'react'

    

const App = (props) => {
  const [data,setData] = useSate(
    {
      name:'',
      age:''
    }
  )
  const changeHandler  = e =>{
   setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault();
    fetch('https://test-api-a0775-default-rtdb.firebaseio.com/data.json',
    {
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      }
    }
    ).then(res => alert('Data Posted')).catch(err => console.log(err))
  }
  return (
  
    <div>
      <center>
        <label>Name:</label>
        <input type="text" name="name" onChange={changeHandler}/><br />
        <label>Name:</label>
        <input type="text" name="name" onChange={changeHandler}/><br />
        <input type="submit" value ="post data"/>
      </center>
        <div>
          <h4>Welcome to User!!{props.name}</h4>
        </div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default HOC(App);
