import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.scss';

const BearItem = (props) => {
    const [bearToDisplay, setBearToDisplay] = useState({});
    const [imageToDisplay, setImageToDisplay] = useState("");
    const [idToDisplay, setIdToDisplay] = useState("");
    

    //SHOULD BE ON API
    useEffect(() => {
        console.log("first")
        axios.get(window.location.href)
        .then((bear) => {
            const { _id, __v, image, ...attributes } = bear.data;
            setBearToDisplay(attributes);
            setImageToDisplay(image);
            setIdToDisplay(_id);
        })
    }, [])
    
  return (
    <div className='bearItem'>
        <div className='bearItem--wrap'>
            <div className='bearItem--wrap--header'>
                <img className='bearItem--wrap--header--arrow' src='' alt='arrow left'></img>
                <h1 className='bearItem--wrap--header--title'>Bear {idToDisplay}</h1>
                <img className='bearItem--wrap--header--arrow' src='' alt='arrow right'></img>
            </div>
            <div className='bearItem--wrap--body'>
                <img src={imageToDisplay} alt='Nft selected'></img>
                <div className='bearItem--wrap--body--description'>
                    <h2>Attributes</h2>
                    {Object.keys(bearToDisplay).map((keyName, i) => (
                        <div className='bearItem--wrap--body--description--item' key={i}>
                            <h3>{keyName}</h3>
                            <h4>{bearToDisplay[keyName]}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BearItem