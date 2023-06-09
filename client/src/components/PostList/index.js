import React from 'react';
import { Link } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import CarPic1 from '../../assets/images/lincoln-continental.jpg';
import CarPic2 from '../../assets/images/Range-Rover-Classic.jpg';

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
<div className='minipostcontainer'>
      {posts &&
        posts.map((post) => (
      <Card className='Card' sx={{ maxWidth: 345 }}>
      <CardMedia
      sx={{ height: 140 }}
      image={post.image}
      title="green iguana"
      />
      <CardContent>
          <div className='minipostpicandtitle'>
              {/* <img className='minipostcarpic' src={CarPic1} alt='car for sale'></img> */}
              <Typography gutterBottom variant="h5" component="div">
                {post.make} {post.model}
              </Typography>
          </div>
          <div className='minipostlower'>
              <div className='minipostinfo'>
              <Typography variant="body2" color="text.secondary">
                  For sale by: 
                  <p>{post.username}</p>
              </Typography>
              </div>
              <CardActions>
              <Link
                to={`/post/${post._id}`}
              >
              <Button size='small' variant="contained">Bid On This Vehicle</Button>
            </Link>
            </CardActions>
          </div>
      </CardContent>
    </Card>
    ))}
</div>
    )
  };

export default PostList;