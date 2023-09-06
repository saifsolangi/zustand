
import axios from 'axios';
import useWeatherStore from '../../store';
import { useEffect } from 'react';

const WeatherContainer = () => {
    const { city, code, loading, error, setError, setCity, setCode, setData, setLoading } = useWeatherStore();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=c8d707729d3a6a4c2dd049e2b73a9c5f`;

    const checkWeather = () => {
        setLoading(true);
        setError(null);

        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                setError('Enter Correct Location Please');
            })
            .finally(() => {
                setLoading(false);
            });

    };

    return (
        <>
            <div>
                <input
                    placeholder="Enter City Name ..."
                    onChange={(event) => setCity(event.target.value)}
                    value={city}
                />
                <input
                    placeholder="Enter Country Code ..."
                    onChange={(event) => setCode(event.target.value)}
                    value={code}
                />
                <button onClick={checkWeather} disabled={loading}>
                    {loading ? 'Fetching Data, Please Wait...' : 'Check Weather'}
                </button>
                {error && <p>{error}</p>}
            </div>
        </>
    );
};

export default WeatherContainer;
