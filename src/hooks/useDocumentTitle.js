import { useEffect } from 'react';

export function useDocumentTitle(title) {
    useEffect(
        () => {
            document.title = title;
            return () => {
                console.log('clean up code');
            }
        });

}