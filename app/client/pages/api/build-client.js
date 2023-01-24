import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'http://auth-svc:3000',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseUrl: 'https://ticketing.test:8080',
    });
  }
};