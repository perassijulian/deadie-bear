import React, { useState } from 'react';
import './styles.scss';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addBear } from '../../../actions/bearShowcase';

const AddBear = () => {
    const [formData, setFormData] = useState({
        accesories:"",
        background:"",
        costume:"",
        ears:"",
        eyes:"",
        head:"",
        mouth:"",
        face:"",
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
        console.log(formData);
        dispatch(addBear(formData));
        setFormData({
            accesories:"",
            background:"",
            costume:"",
            ears:"",
            eyes:"",
            head:"",
            mouth:"",
            face:"",
            image: ""
        });
    }

  return (
    <div className='addBear'>
        <form className='addBear--form' onSubmit={handleSubmit}>
            <input type='text' name='accesories' value={formData.accesories} placeholder='accesories' onChange={handleChange}/>
            <input type='text' name='background' value={formData.background} placeholder='background' onChange={handleChange}/>
            <input type='text' name='costume' value={formData.costume} placeholder='costume' onChange={handleChange}/>
            <input type='text' name='ears' value={formData.ears} placeholder='ears' onChange={handleChange}/>
            <input type='text' name='eyes' value={formData.eyes} placeholder='eyes' onChange={handleChange}/>
            <input type='text' name='head' value={formData.head} placeholder='head' onChange={handleChange}/>
            <input type='text' name='mouth' value={formData.mouth} placeholder='mouth' onChange={handleChange}/>
            <input type='text' name='face' value={formData.face} placeholder='face' onChange={handleChange}/>
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