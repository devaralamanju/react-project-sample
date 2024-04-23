import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
   // let params = useParams();
    let {search} = useLocation();
    let params = new URLSearchParams(search);
    console.log(search);
  return (
    <div>
       <center>
        <h3>welcome to Dashboard page</h3>
        <p>Name : {params.get('name')}</p>
        <p>Age : {params.get('age')}</p>
        <Link to='/' className='Link'>Back to home</Link>
      </center>
    </div>
  )
}

export default Dashboard
