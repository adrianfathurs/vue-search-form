import {
  api
} from '../plugins/axios'


export const getData = async () => {
  try {
    let response = await api.get('/users');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}