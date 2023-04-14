import React from 'react'
import BidForm from '../components/Bidform'
import CarPic1 from '../assets/images/lincoln-continental.jpg'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_POST } from '../utils/queries'

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

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const SinglePost = () => {
    // Use `useParams()` to retrieve value of the route parameter `:profileId`
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
        <div className='singlepost'>
        <h1 className='cartitle'>{post.make} {post.model}</h1> <p className='cartitle'>{post.location}</p>
        <Card className='Card' sx={{ maxWidth: 500 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={CarPic1}
        title="green iguana"
        />
        <div>
                <div className='imgspecsandbidform'>
                    <div className='imageandspecs'>
                        {/* <img className='carpic' src={CarPic1} alt='car for sale'></img> */}
                        <div className='carspecs'>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Model: " />
                                        <p className='specsinfo' id='specsinfomodel'>{post.make} {post.model}</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Year: " />
                                        <p className='specsinfo' id='specsinfoyear'>{post.year}</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Color: " />
                                        <p className='specsinfo' id='specsinfocolor'>{post.color}</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Mileage: " />
                                        <p className='specsinfo' id='specsinfomileage'>{post.mileage}</p>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Condition: " />
                                        <p className='specsinfo' id='specsinfocondition'>{post.condition}</p>
                                </ListItem>
                            </List>
                        </div>
                    </div>
                    </div>
                    </div>
                    </Card>
                    <div className='bidformcontainer'>
                        <BidForm />
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