import { useEffect, useState } from 'react';

/**
 * Создает ноду, если ее нет
 * @param {string} id - id ноды, которую нужно создать.
 */

export const useCreateNodeWithId = (id: string) => {
    const [mountNode, setMountedNode] = useState(document.getElementById(id));

    useEffect(() => {
        if (!mountNode) {
            const node = document.createElement('div');
            node.setAttribute('id', id);
            document.body.appendChild(node);
            setMountedNode(node);

            return () => {
                document.body.removeChild(node);
            };
        }
    }, []);

    return mountNode;
};
