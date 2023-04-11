import React from 'react'
import CarPic from '../assets/images/lincoln-continental.jpg'

const MiniPost = () => {
  return (
    <div className='minipostcontainer'>
        <div className='minipostpicandtitle'>
            <img className='minipostcarpic' src={CarPic} alt='car for sale'></img>
            <h1 className='miniposttitle'>Lincoln Continental</h1>
        </div>
        <div className='minipostlower'>
        <div className='minipostinfo'>
            <h2 className='minipostinfotitle'>For Sale By:</h2>
            <p className='posterusername'>This.Username</p>
        </div>
        <btn className='button' id='minipostbidbutton'>Bid On This Vehicle</btn>
        </div>
    </div>
  )
}

export default MiniPost