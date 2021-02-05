import { useEffect } from "react/cjs/react.development"

import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: 'san jose'
                }
            });
            
            setResults(response.data.businesses);
        
        } catch (err) {
            setErrorMessage('Something went wrong!')
        }
    };

    useEffect( () => {
        
    }, []);

    return [searchApi, results, errorMessage]
}