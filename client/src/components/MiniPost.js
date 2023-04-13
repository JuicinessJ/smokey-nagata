import React from 'react'
import CarPic1 from '../assets/images/lincoln-continental.jpg'
import CarPic2 from '../assets/images/Range-Rover-Classic.jpg'

const MiniPost = () => {
  return (
    <div className='minipostcontainer'>
        <div className='minipostpicandtitle'>
            <img className='minipostcarpic' src={CarPic1} alt='car for sale'></img>
            <h1 className='miniposttitle'>Lincoln Continental</h1>
        </div>
        <div className='minipostlower'>
            <div className='minipostinfo'>
                <h2 className='minipostinfotitle'>For Sale By:</h2>
                <p className='posterusername'>This.Username</p>
            </div>
            <btn className='button' id='minipostbidbutton'>Bid On This Vehicle</btn>
        </div>

        <div className='minipostpicandtitle'>
            <img className='minipostcarpic' src={CarPic2} alt='car for sale'></img>
            <h1 className='miniposttitle'>Range Rover Classic</h1>
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