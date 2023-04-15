import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';

const BidList = ({ bids = [] }) => {
  // copy the bids to another object so we can sort it
  const sortBids = [...bids]
  if (!bids.length) {
    return <h3>No Bids Yet</h3>;
  } else {
    sortBids.sort((a, b) => {
        return b.amount - a.amount;
    });
    sortBids.splice(5);
  }
  
  return (
    <>
      <Card className='Card' sx={{ maxWidth: 345 }}>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Bids
      </h3>
      <div className="flex-row my-4">
        <p>The Top 5 Highest Bids Are...</p>
        {sortBids.map((bid) => (  
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{bid.username}</TableCell>
                <TableCell align="right">$ {bid.amount}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
          ))}
        </div>
      </Card>
    </>
  );
};

export default BidList;
