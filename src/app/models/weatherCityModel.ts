export interface CityWeather {
    description?: string;
    icon?: string;
    main?: MainWeatherData;
    feels_like?: number; 
    humidity?: number;
    pressure?: number;
    temp?: number;
    name?: string;
    weather: CurrentWeather[];
    wind?: Wind;
    sys?: Sys;
}

export interface MainWeatherData {
    feels_like?: number;
    humidity?: number;
    pressure?: number;
    temp?: number;
    temp_max?: number;
    temp_min?: number;
}

export interface CurrentWeather {
    description?: string;
    icon?: string;
    id?: number;
    main?: string;
}

export interface Wind {
    deg?: number;
    speed?: number;
}

export interface Sys {
    sunset?: number;
    sunrise?: number;
}