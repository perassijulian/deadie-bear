import React, { useState } from 'react';
import './styles.scss';

const AddBear = () => {
    const [formData, setFormData] = useState({
        eyes:"",
        mouth:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => {
            return {
                ...prevState, [name]: value}
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

  return (
    <div className='addBear'>
        <form className='addBear--form' onSubmit={handleSubmit}>
            <input type='text' name='eyes' value={formData.eyes} placeholder='eyes' onChange={handleChange}/>
            <input type='text' name='mouth' value={formData.mouth} placeholder='mouth' onChange={handleChange}/>
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default AddBear