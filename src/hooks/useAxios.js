import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.251.127:7444/test/getgames';

const useAxios = ( url ) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = () => {
        axios
            .get( url )
            .then((res) => {
                setResponse(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
    } , [url]);

    return { response , error , loading };
};

export default useAxios;