import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificBear } from '../../../actions/bearShowcase';
import './styles.scss';

const BearItem = () => {
    const [bearToShow, setBearToShow] = useState({});

  const data = {
      background: 'blue',
      mouth: 'closed',
      eyes: 'normal'
  }  

   const bear = useSelector(state => state.bears);

   const data2 = Object.assign({}, bear)
  
   console.log(data2);
   console.log('bearItem: ', bear)
  
   useEffect(() => {
    if (params.deadieId) {
        for (let i=0; i<bear.length; i++) {
            if (bear[i]._id === params.deadieId) {
               setBearToShow(bear(i));
            }
        }

    }
   }, [])
   
//   const dispatch = useDispatch();

//   useEffect(() => {
//       dispatch(getSpecificBear());
//   }, [dispatch])

  let params = useParams();

  return (
    <div className='bearItem'>
        <div className='bearItem--wrap'>
            <div className='bearItem--wrap--header'>
                <img className='bearItem--wrap--header--arrow' src='' alt='arrow left'></img>
                <h1 className='bearItem--wrap--header--title'>Bear {params.deadieId}</h1>
                <img className='bearItem--wrap--header--arrow' src='' alt='arrow right'></img>
            </div>
            <div className='bearItem--wrap--body'>
                <img src='' alt='Nft selected'></img>
                <div className='bearItem--wrap--body--description'>
                    <h2>Attributes</h2>
                    {Object.keys(bearToShow).map((keyName, i) => (
                        <div className='bearItem--wrap--body--description--item' key={i}>
                            <h3>{keyName}</h3>
                            <h4>{bearToShow[keyName]}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BearItem