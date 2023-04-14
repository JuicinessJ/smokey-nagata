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
    <div className='singlepost'>
    <h1 className='cartitle'>Lincoln Continental</h1> <p className='cartitle'>Twin Cities</p>
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
                </div>
                </div>
                </Card>
                <div className='bidformcontainer'>
                    <BidForm />
                </div>
        <div className='poster'>
            <h2 className='postertitle'>This vehicle was posted for sale by:</h2>
            <div className='posterinfo'>
                <p className='posterinfoitem' id='posterinfouser'>Im A Dolphin</p>
                <p className='posterinfoitem' id='posterinfolocation'>Minneapolis, MN</p>
                <p>View This User</p>
                <p className='posterinfoitem' id='posterinfolink'>View Profile</p>
            </div>
        </div>
    </div>
  )
}

export default SinglePost