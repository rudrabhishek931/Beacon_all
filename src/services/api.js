// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://beacon-cz70.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNpdF9zdXBlcmFkbWluIiwiaWF0IjoxNzIyOTIxMzkwLCJleHAiOjE3MjMwMDc3OTB9.OiisJYMPmkwErjMXXPAMebyjxIyAm1AqhN2fpHtdtX0`,
  },
});

export function addShop(shopData) {
  api.post('/shop', shopData)
    .then(response => {
      console.log(response.data);
      // Handle success response
    })
    .catch(error => {
      console.error(error.response.data);
      // Handle error response
      if (error.response.status === 401) {
        console.error('Unauthorized access');
      } else if (error.response.status === 500) {
        console.error('Internal server error');
      } else {
        console.error('Failed to add shop');
      }
    });
}