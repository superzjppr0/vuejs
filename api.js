import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers: {
    Authorization: `Bearer 79a8c6bc8a160468ec01ebb29441191e98f4577128595a840c7a9a78917d0c640abfc33f8624d78f6d1e7f4c9a42684c2285589c6108360bcc0f5059963adadf7d02196a6d8fa1381e1d31792fbf482dfc9942a832cf5558fcd604dc46ec4899d64493269fe1367b51ac482fa3ea7fca9d2827dbedd7697c26c0b8cddb3f7e52`, // Replace with your actual token
  },
});

export const getCategories = async () => {
  return await api.get('/categories');
};
