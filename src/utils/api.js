import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization : "bearer" + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try{
        try {
            const{data} = await axios.get(BASE_URL + url + "?api_key=319d41685e62f52479dd1aeae493ded4", {
                headers,
                params
            })
            console.log('The Query is Done!!!!');
            return data;
        } catch (error) {
            console.log('the error is: ' + error);
            const{data} = await axios.get(BASE_URL + url + "&api_key=319d41685e62f52479dd1aeae493ded4", {
                headers,
                params
            })
            console.log('Used \'& for the Query....');
            return data;
        }
    }catch(err){
        console.log('There is no data!!');
        console.log(err);
        return err;
    }
}
