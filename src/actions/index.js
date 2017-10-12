import axios from 'axios';

const ROOT_URL = `http://stgng.letsdogether.com/web_app/home/experiences`;

export const FETCH_EXPERIENCE = 'FETCH_EXPERIENCE';


export const FETCH_WEATHER = 'FETCH_WEATHER';



export function fetchWeather(city){

  const url = `${ROOT_URL}/${city}`;
  console.log(url);
    const request = axios.get(url);



  return{
    type: FETCH_WEATHER,
    payload : request
  };
}
