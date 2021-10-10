import { useEffect } from 'react';

export function useDocumentTitle(title, array = null) {
    useEffect(
        () => {
            document.title = title;
            return () => {
                console.log('clean up code');
            }
        }, array);

}