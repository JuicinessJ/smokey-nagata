import React from 'react'
import BidForm from '../components/BidForm'
import BidList from '../components/BidList';
import CarPic1 from '../assets/images/lincoln-continental.jpg'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_POST } from '../utils/queries'

const SinglePost = () => {
    // Use `useParams()` to retrieve value of the route parameter `:postId`
    const { postId } = useParams();
  
    const { loading, data } = useQuery(QUERY_SINGLE_POST, {
      // pass URL parameter
      variables: { postId: postId },
    });
  
    const post = data?.post || {};

    
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div className='maincontent'>
        <h1 className='sitetitle'><p className='cartitle'>{post.make} {post.model}</p> In <p className='cartitle'>{post.location}</p> Area</h1>
            <div className='imgspecsandbidform'>
                <div className='imageandspecs'>
                    <img className='carpic' src={CarPic1} alt='car for sale'></img>
                    <div className='carspecs'>
                        <ul className='carspecslist'>
                            <li className='carspecs'>Model:<p className='specsinfo' id='specsinfomodel'>{post.make} {post.model}</p></li>
                            <li className='carspecs'>Year: <p className='specsinfo' id='specsinfoyear'>{post.year}</p></li>
                            <li className='carspecs'>Color: <p className='specsinfo' id='specsinfocolor'>{post.color}</p></li>
                            <li className='carspecs'>Mileage: <p className='specsinfo' id='specsinfomileage'>{post.mileage}</p></li>
                            <li className='carspecs'>Condition: <p className='specsinfo' id='specsinfocondition'>{post.condition}</p></li>
                        </ul>
                    </div>
                </div>
                <div className='bidformcontainer'>
                    <BidForm postId={postId}/>
                    <BidList bids={post.bids}/>
                </div>
            </div>
        <div className='poster'>
            <h2 className='postertitle'>This vehicle was posted for sale by:</h2>
            <div className='posterinfo'>
                <p className='posterinfoitem' id='posterinfouser'>{post.username}</p>
                <p className='posterinfoitem' id='posterinfolocation'>{post.location}</p>
                <p>View This User</p>
                <p className='posterinfoitem' id='posterinfolink'>View Profile</p>
            </div>
        </div>
    </div>
  )
}

export default SinglePost