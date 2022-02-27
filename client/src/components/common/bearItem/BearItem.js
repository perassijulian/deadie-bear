import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSpecificBear } from '../../../actions/bearShowcase';
import './styles.scss';

const BearItem = () => {

  const data = {
      background: 'blue',
      mouth: 'closed',
      eyes: 'normal'
  }  

   const bear = useSelector(state => state);
  
   console.log('bearItem: ', bear)
  
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
                    {Object.keys(data).map((keyName, i) => (
                        <div className='bearItem--wrap--body--description--item' key={i}>
                            <h3>{keyName}</h3>
                            <h4>{data[keyName]}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BearItem