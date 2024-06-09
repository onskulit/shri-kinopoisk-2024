import { useEffect, useRef } from 'react';
import { IsNode } from '@helpers/IsNode';

/**
 * Хук для клик вне элемента
 * @param {string} ignoreNodeId - id ноды, по которой outerClick не будет происходить.
 */

export const useOuterClick = <T extends HTMLElement>(
    callback: () => void,
    ignoreNodeId: string
) => {
    const innerRef = useRef<T>(null);

    useEffect(() => {
        const outerClick = (event: MouseEvent) => {
            const target = event.target;
            const block = document.getElementById(ignoreNodeId);
            const path = event.composedPath();

            if (
                innerRef.current &&
                IsNode(target) &&
                !innerRef.current.contains(target) &&
                block &&
                !path.includes(block)
            ) {
                callback();
            }
        };

        document.addEventListener('mousedown', outerClick);
        return () => {
            document.removeEventListener('mousedown', outerClick);
        };
    }, [innerRef]);

    return innerRef;
};
