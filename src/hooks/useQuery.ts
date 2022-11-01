import { useState, useEffect, useCallback } from 'react';

export default function useQuery<T>(url: string) {
    const [data, setData] = useState<T[]>();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    const handleError = (error: unknown) => {
        if (typeof error === 'string') {
            setError(error);
        } else if (error instanceof Error) {
            setError(error.message);
        } else {
            setError('Fetch Error');
        }
        setLoading(false);
    };

    const runQuery = useCallback(async () => {
        setLoading(true);
        setError(undefined);
        try {
            const res = await fetch(url, {
                method: 'GET',
            });
            if (res.ok) {
                const data = await res.json();
                setData(Array.isArray(data) ? data : [data]);
                setLoading(false);
            } else {
                const e = await res.json();
                handleError(e);
            }
        } catch (e) {
            handleError(e);
        }
    }, [url]);

    useEffect(() => {
        runQuery();
    }, [runQuery]);

    return { data, loading, error, refetch: runQuery };
}
