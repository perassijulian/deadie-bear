import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.scss';

const BearItem = (props) => {
    const [bearToDisplay, setBearToDisplay] = useState({});
    const [imageToDisplay, setImageToDisplay] = useState("");
    const [idToDisplay, setIdToDisplay] = useState("");
    

    //SHOULD BE ON API
    useEffect(() => {
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
                <a 
                    className='bearItem--wrap--header--arrow' 
                    href={idToDisplay>1 ? `/showcase/${idToDisplay-1}` : "/showcase/1"}
                >⬅️</a>
                <h1 className='bearItem--wrap--header--title'>Bear # {idToDisplay}</h1>
                <a 
                    className='bearItem--wrap--header--arrow' 
                    href={!(idToDisplay===props.lastBear) ? `/showcase/${idToDisplay+1}` : `/showcase/${idToDisplay}`}
                >➡️</a>
            </div>
            <div className='bearItem--wrap--body'>
                <img className='bearItem--wrap--body--image' src={imageToDisplay} alt='Nft selected'></img>
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