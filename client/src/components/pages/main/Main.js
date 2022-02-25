import React from 'react';

import doggo from '../../../images/doggos.gif';
import './styles.scss';


const Main = () => {

  return (
      <div className='main'>
        <div className='main--text'>
            <h1>Too late to save Deadie</h1>
            <p>We are sorry to tell you this way but there is no other way. 
            Deadie is dead due to climate change and if we do nothing soon 
            his friends will join him. We think the best way to remember him 
            is as he would have wanted, by having one of his many profile 
            picture photos. Don't miss our March 15 release!</p>
        </div>
        <div className='main--showcase'>
            <div className='main--showcase--box'>
                <img src={doggo} alt='spinning showcase' className='main--showcase--image'></img>
                <h2 className='main--showcase--text'>SPECIAL</h2>
            </div>
            <div className='main--showcase--box'>
                <img src={doggo} alt='spinning showcase' className='main--showcase--image'></img>
                <h2 className='main--showcase--text'>RARE</h2>
            </div>
            <div className='main--showcase--box'>
                <img src={doggo} alt='spinning showcase' className='main--showcase--image'></img>
                <h2 className='main--showcase--text'>UNCOMMON</h2>
            </div>    
        </div>
        <div className='main--action'>
            <button className='main--action--button'>MINT</button>
        </div>
      </div>);
};

export default Main;
