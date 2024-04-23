import React from 'react'

const img = (props) => {
  return (
    <div>

      <img className="photo" src={props.src} height={100} width={100}  alt='veg-img'/>

    </div>
  )
}

export default img;
