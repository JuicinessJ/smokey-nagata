// import jwt-decode to decode a token
import decode from 'jwt-decode';

// create a new class to create instances for a user and their auth
class AuthService {
    // get user data
    getProfile() {
        return decode(this.getToken());
    }

    // check if user is logged in
    loggedIn() {
        // checks if there is a saved token and to see if the token is still valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token); //got this code from challenge 21
    }

    // check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            // check to see if the decoded exp is less than datnow which has to be converted to milliseconds
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;     
        } catch (err) {
            return false;
        }
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    }

    logout() {
        // clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        // this will reload the page and reset the state of the app
        window.location.assign('/');
    }
}   

export default new AuthService();