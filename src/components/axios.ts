import axios from 'axios';
export const registerUser = async (userData: { fullName: string; email: string; password: string; dob: string; }) => {
    try {
      const response = await axios.post(`http://localhost:4000/auth/sign-upl`, userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        console.log(res);
        console.log(res.data);
      });;
      console.log('User registered:', response);
    } catch (error) {
      console.error('Error config:', error);
    }
  };