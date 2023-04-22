import axios from 'axios';




export const getPlacesData = async (type, sw, ne) => {
    try {

        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '1edaca6861mshb9c65a7bdc32d2ap116be6jsn6beef6659d80',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const getWeatherData = async (lat, lng) => {
    try {
        
            const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/weather', {
                params: { 
                    lat: lat, 
                    lon: lng 
                },
                headers: {
                    'x-rapidapi-key': '1edaca6861mshb9c65a7bdc32d2ap116be6jsn6beef6659d80',
                    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                },
            });

            return data;
        
    } catch (error) {
        console.log(error);
    }
}