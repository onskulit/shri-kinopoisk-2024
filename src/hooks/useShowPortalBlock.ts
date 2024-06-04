import { CSSProperties, useCallback, useEffect, useState } from 'react';

import { useOuterClick } from './useOuterClick';

// Открывает портал рядом с нужной нодой

export const useShowPortalBlock = (ignoreNodeId: string) => {
    const [show, setShow] = useState<boolean>(false);
    const [blockStyles, setBlockStyles] = useState<CSSProperties>({});

    const switchShow = useCallback(() => setShow((prev) => !prev), []);

    const blockRef = useOuterClick<HTMLDivElement>(
        () => setShow(false),
        ignoreNodeId
    );

    useEffect(() => {
        if (blockRef?.current) {
            const bounding = blockRef.current.getBoundingClientRect();
            const elementHeight = bounding.height;
            const left = bounding.left;
            const top = bounding.top + elementHeight + 4;
            const minWidth = bounding.width;
            const width = bounding.width;

            setBlockStyles((prev) => ({
                ...prev,
                top,
                left,
                minWidth,
                width: prev?.width ?? width,
            }));
        }
    }, [show]);

    return {
        blockRef,
        show,
        switchShow,
        blockStyles,
    };
};
