# Calendar App

## Process to conect with the backend.

1. Set the ENV with the URL, through which pass all the endpoints

```
VITE_API_URL=https://calendar-mern-backend.up.railway.app/api

```

2. Get the Env through this function.

```
export const getEnvVariables = () => {

  import.meta.env; // This is the way to obtain the ENV in vite

  return {
    ...import.meta.env,
  };
};

```

3. Set an instance of axios and pass the ENV variables to baseURL property.

```
import axios from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const calendarApi = axios.create({
  baseURL: VITE_API_URL,
});

//TODO: Configure the interceptors

export default calendarApi;

```

Then use this calendarApi instance of axios where we need, with the HTTP method passing two arguments:

a. As a first argument a string that complete the endpoint
b. As a second argument, an object with the data that we're waiting.

```
const { data } = await calendarApi.post('/auth', { email, password });

```

## Development steps

1. Rename the file .env.template to .env and make the changes as need.

```
VITE_API_URL=https://calendar-mern-backend.up.railway.app/api

```
