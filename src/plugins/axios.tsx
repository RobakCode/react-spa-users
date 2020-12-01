import axios from 'axios';
import { UserType, PostType, CommentType } from '../types/types';


const getUsers = async () => {
  let result:UserType[];
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    result = response.data.map((user: any) => {
      return {
        id: user.id,
        name: user.name,
        street: user.address.street,
        city: user.address.city,
        email: user.email,
        phone: user.phone,
        website: user.website,
        companyName: user.company.name
      }
    });
  } catch (e) {
    result = [];
  }
  return result;
};



const getPosts = async () => {
  let result:PostType[];
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    result = response.data;
  } catch (e) {
    result = [];
  }
  return result;
};



const getComments = async () => {
  let result:CommentType[];
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    result = response.data;
  } catch (e) {
    result = [];
  }
  return result;
};


export {
  getUsers,
  getPosts,
  getComments
};
