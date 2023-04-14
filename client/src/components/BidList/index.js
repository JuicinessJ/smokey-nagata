import React from 'react';

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
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Bids
      </h3>
      <div className="flex-row my-4">
        <p>The Top 5 Highest Bids Are...</p>
        {sortBids.map((bid) => (
            <div key={bid._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light bidsContainer">
                <h5 className="card-body">
                   {bid.username} bid  ${bid.amount} on {bid.createdAt}
                </h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BidList;
