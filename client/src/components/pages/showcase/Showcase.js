import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getBears } from '../../../actions/bearShowcase';

import BearItem from '../../common/bearItem/BearItem'

const Showcase = () => {
  const bears = useSelector(state => state.bears);
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getBears());
  }, [dispatch])

  console.log(bears);
  

  return (
    <div className='showcase'>
      <div className='showcase--wrap'>
        {bears.map((item) => <img src='bear' alt='nft example' key={item._id} />)}
      </div>
      <BearItem />
    </div>
  )
}

export default Showcase