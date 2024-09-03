

import axios from "axios";

//crear instancia... 

export const pokeApi= axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
});




