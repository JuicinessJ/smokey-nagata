import React from 'react';
import { Link } from 'react-router-dom';


import CarPic1 from '../../assets/images/lincoln-continental.jpg'
import CarPic2 from '../../assets/images/Range-Rover-Classic.jpg'

const PostList = (
  { posts,
    title, 
    showTitle = true, 
    /*showUsername = true*/
  }) => {
    if (!posts.length) {
      return <h3>No Content Yet</h3>;
    }

      return (
        <div>
          {posts && posts.map((post) => (
        <div className='minipostcontainer'>
            <div className='minipostpicandtitle'>
                <img className='minipostcarpic' src={CarPic1} alt='car for sale'></img>
                <h1 className='miniposttitle'>{post.make} {post.model}</h1>
            </div>
            <div className='minipostlower'>
                <div className='minipostinfo'>
                    <h2 className='minipostinfotitle'>For Sale By:</h2>
                    <p className='posterusername'>{post.username}</p>
                </div>
                <Link
                  className="button"
                  to={`/post/${post._id}`}
                >
                  Bid On This Vehicle
              </Link>
            </div>
        </div>
          ))}
        </div>
      )
    };

export default PostList;