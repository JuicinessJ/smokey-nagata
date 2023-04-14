import React from 'react'
import BidForm from '../components/Bidform'
import CarPic1 from '../assets/images/lincoln-continental.jpg'

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

return (
    <div>
    <h1 className='cartitle'>Lincoln Continental<p className='carlocation'>In Twin Cities Area</p></h1>
    <div className='singlepost'>
    <Card className='Card' sx={{ minWidth: 400 }}>
    <CardMedia
    sx={{ height: 300 }}
    image={CarPic1}
    title="green iguana"
    />
    <div>
                    {/* <img className='carpic' src={CarPic1} alt='car for sale'></img> */}
                    <div className='carspecs'>
                    <List>
                            <ListItem>
                                <ListItemText primary="Model: " />
                                    <p className='specsinfo' id='specsinfomodel'>Lincoln Continental</p>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Year: " />
                                    <p className='specsinfo' id='specsinfoyear'>1964</p>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Color: " />
                                    <p className='specsinfo' id='specsinfocolor'>White</p>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Mileage: " />
                                    <p className='specsinfo' id='specsinfomileage'>50000</p>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Condition: " />
                                    <p className='specsinfo' id='specsinfocondition'>Excellent</p>
                            </ListItem>
                        </List>
                    </div>
                </div>
                </Card>
        <div className='poster'>

            <Card className='Card' sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          This vehicle was posted by:
        </Typography>
        <Typography variant="h5" component="div">
          I'm A Dolphin
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Twin Cities, MN
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View User</Button>
      </CardActions>
    </Card>
        </div>
    </div>
    </div>
  )
}

export default SinglePost
