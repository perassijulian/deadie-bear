import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getBears } from '../../../actions/bearShowcase';

import BearItem from '../../common/bearItem/BearItem'

const Showcase = () => {
  const bears = useSelector(state => state.bears);
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getBears());
  }, [dispatch])
  
  let params = useParams();

  return (
    <div className='showcase'>
      {!params.deadieId && <div className='showcase--wrap'>
        {bears.map((item) => (
          <Link 
            to={`/showcase/${item._id}`}
            key={item._id}
          >
            <img src='bear' alt='nft example' key={item._id} />
          </Link>
        ))}
      </div>}
      {params.deadieId && <BearItem />}
    </div>
  )
}

export default Showcase