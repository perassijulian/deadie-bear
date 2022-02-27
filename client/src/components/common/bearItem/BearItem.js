import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificBear } from '../../../actions/bearShowcase';
import './styles.scss';

const BearItem = (props) => {
    const [bearToDisplay, setBearToDisplay] = useState({})

    useEffect(() => {
        axios.get(window.location.href)
        .then((bear) => setBearToDisplay(bear.data))
    }, [])
    
    


  return (
    <div className='bearItem'>
        <div className='bearItem--wrap'>
            <div className='bearItem--wrap--header'>
                <img className='bearItem--wrap--header--arrow' src='' alt='arrow left'></img>
                <h1 className='bearItem--wrap--header--title'>Bear {props.id}</h1>
                <img className='bearItem--wrap--header--arrow' src='' alt='arrow right'></img>
            </div>
            <div className='bearItem--wrap--body'>
                <img src='' alt='Nft selected'></img>
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