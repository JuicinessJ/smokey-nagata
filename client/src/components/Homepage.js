// import React, { useState } from 'react';
// import LogIn from './pages/Login';
// import Signup from './pages/Signup';
// import MyProfile from './pages/Profile';
// import Navigation from './Navigation';

// function DisplayPage() {
//     const [currentPage, setCurrentPage] = useState('Navigation');
  
//     // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//     const renderPage = () => {
//       if (currentPage === 'Login') {
//         return <LogIn />;
//       }
//       if (currentPage === 'Signup') {
//         return <Signup />;
//       }
//       if (currentPage === 'MyProfile') {
//         return <MyProfile />;
//       }
//     }

// const handlePageChange = (page) => setCurrentPage(page);

// return (
//     <div>
//         <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//         {renderPage()}
//     </div>
//     )
// };

// export default DisplayPage;