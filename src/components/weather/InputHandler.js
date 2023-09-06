import React from 'react'
import useWeatherStore from '../../store';

const InputHandler = () => {
    const { data } = useWeatherStore();
    return (
        <div>
            <h1> {data.weather && data.weather[0].description}</h1>
            {data.main && data.main.temp && (
                <h1> {data.main.temp}°F</h1>
            )}
        </div>
    )
}

export default InputHandler