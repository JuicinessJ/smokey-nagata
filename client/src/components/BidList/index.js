import React from 'react';

const BidList = ({ bids = [] }) => {
    console.log(bids);
  if (!bids.length) {
    return <h3>No Bids Yet</h3>;
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
        {bids &&
          bids.map((bid) => (
            <div key={bid._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {bid.amount} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {bid.createdAt}
                  </span>
                </h5>
                <p className="card-body">{bid.username}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BidList;
