
export default class FetchData {

    startUrl = 'api.openweathermap.org/data/2.5/weather?lang=ru&appid=';
    apiKey = '47765400ad97b7c36c3d970d3dc8f2d9';

    getResource = async url => {

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Произошла ошибка ${res.status}`);
        }

        return await res.json();
    };

    getWeather = async (city) => 
        await this.getResource(this.startUrl + this.apiKey + '&q=' + city)
}   