const API_KEY = '8c9d5a650b6501f152e154db5cb21cbb'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log('Request in action:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
