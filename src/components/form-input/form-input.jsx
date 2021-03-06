import React from 'react'
import './form-input.styles.scss'

const FormInput = ({handleChange,label,type,value}) =>{
 return <div className="group">
  <input className="form-input" onChange={handleChange} type={type}/>

  {
   label ? 
   (<label className={`${value.length? "shrink" : ""} form-input-label`}>
    {label}
   </label>)
   :null
  }
 </div>
}

export default FormInput;