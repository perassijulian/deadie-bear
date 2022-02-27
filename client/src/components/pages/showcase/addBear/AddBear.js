import React, { useState } from 'react';
import './styles.scss';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addBear } from '../../../../actions/bearShowcase';

const AddBear = () => {
    const [formData, setFormData] = useState({
        eyes:"",
        mouth:"",
        image: ""
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => {
            return {
                ...prevState, [name]: value}
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBear(formData))
        console.log(formData)
    }

  return (
    <div className='addBear'>
        <form className='addBear--form' onSubmit={handleSubmit}>
            <input type='text' name='eyes' value={formData.eyes} placeholder='eyes' onChange={handleChange}/>
            <input type='text' name='mouth' value={formData.mouth} placeholder='mouth' onChange={handleChange}/>
            <div>
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setFormData({...formData, image : base64}) }
                />
            </div>
            <button>SUBMIT</button>
        </form>
    </div>
  )
}

export default AddBear