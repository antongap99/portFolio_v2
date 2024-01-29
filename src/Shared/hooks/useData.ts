import { useState, useEffect } from 'react';
import {parseStream} from "../helpers/readers.ts";

interface UseDataProps {
    url: string; // URL для запроса данных
}

interface UseDataState<T> {
    data: T[];
    loading: boolean;
    error: string | null;
}

export const useData = <T>({ url }: UseDataProps): UseDataState<T> => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                console.log('response', response)
                if(response.body){
                    const result = await parseStream<T>(response.body);
                    console.log('result', result)
                    setData(result);
                } else {
                    throw new Error(`Нет данных`);
                }

            } catch (error: unknown) {
                if(error instanceof Error){
                    console.log(error)
                    setError(error?.message as string);
                } else {
                    setError('Unknown error');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

