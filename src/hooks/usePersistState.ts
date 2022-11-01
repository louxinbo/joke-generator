import { useState, useEffect } from 'react';

export function usePersistState<T>(defaultValue: T, key: string) {
    const [value, setValue] = useState<T>(() => {
        const persistValue = window.localStorage.getItem(key);
        return persistValue !== null ? JSON.parse(persistValue) : defaultValue;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue] as const;
}
