import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


import CarPic1 from '../assets/images/lincoln-continental.jpg'
import CarPic2 from '../assets/images/Range-Rover-Classic.jpg'

const MyVehiclesList = () => {

      return (
        <Card className='Card' sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={CarPic1}
        title="green iguana"
        />
        <CardContent className='minipostcontainer'>
            <div className='minipostpicandtitle'>
                {/* <img className='minipostcarpic' src={CarPic1} alt='car for sale'></img> */}
                <Typography gutterBottom variant="h5" component="div">
                    Lincoln Continental
                </Typography>
            </div>
            <div className='minipostlower'>
                <div className='minipostinfo'>
                <Typography variant="body2" color="text.secondary">
                    Created On: 
                    <p>Post.CreatedAt</p>
                </Typography>
                </div>
                <CardActions>
                <Link
                  to={`/post/`}
                >
                <Button size='small' variant="contained">View Bids On This Vehicle</Button>
              </Link>
              </CardActions>
            </div>
</CardContent>
</Card>

      )
    };

export default MyVehiclesList;