import React from 'react'
import BidForm from '../components/BidForm'
import BidList from '../components/BidList';
import CarPic1 from '../assets/images/lincoln-continental.jpg'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_POST, QUERY_ME } from '../utils/queries'

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
    // Use `useParams()` to retrieve value of the route parameter `:postId`
    const { postId } = useParams();
    const { loading: loadingM, data: dataM } = useQuery(QUERY_ME);
    const { loading, data } = useQuery( QUERY_SINGLE_POST,  {
      // pass URL parameter
      variables: { postId: postId },
    });
  
    const post = data?.post || {};
    const user = dataM?.me

    
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className='cartitle'>{post.make} {post.model}</h1> <p className='cartitle'>{user.location}</p>
            <div className='singlepost'>
                <Card className='Card' sx={{ minWidth: 400 }}>
                    <CardMedia
                    sx={{ height: 300 }}
                    image={CarPic1}
                    title="green iguana"
                    />
                <div>
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
                </Card>


                <div className='poster'>
                    <Card className='Card' sx={{ maxWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            This vehicle was posted by:
                            </Typography>
                            <Typography variant="h5" component="div">
                            {post.username}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {user.location}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">View User</Button>
                        </CardActions>
                    </Card>

                    <div className='bidformcontainer'>
                        <BidForm postId={postId}/>
                    </div>
                    <div className='bidlistcontainer'>
                        <BidList bids={post.bids}/>
                    </div>
                </div>
            </div>
        </div>
      )
    }
    
    export default SinglePost