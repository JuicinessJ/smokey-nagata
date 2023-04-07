import React, { useState } from 'react';
//import PortfolioItems from './Pages/PortfolioItems';
//import PortfolioNav from './PortfolioNav';
//import AboutMe from './Pages/AboutMe';
//import ContactMe from './Pages/ContactMe';
import Homepage from './Pages/Homepage';

function DisplayPage() {
    const [currentPage, setCurrentPage] = useState('Homepage');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Login/Signup') {
        return <LoginSignUp />;
      }
      if (currentPage === 'MyProfile') {
        return <MyProfile />;
      }
      return <Homepage />;
    }

const handlePageChange = (page) => setCurrentPage(page);

// let submitBtn = document.querySelector('.submitbtn');
//     let userEmail = document.querySelector('useremail');

//     function displayEmailError() {
//         userEmail.placeholder = 'Please enter a valid email address';
//         userEmail.setAttribute('style', 'color: red;');
//     }

//     submitBtn.addEventListener('click', function formSubmit() {
//         if(userEmail.value === /.*@.*.(com|net)/) {
//             return;
//         } else {
//             displayEmailError();
//         };
//     }
//     );

return (
    <div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
    )
};

export default DisplayPage;