'use client';

import {
    CSSProperties,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { useOuterClick } from './useOuterClick';

/**
 * Хук Открывает портал рядом с нужной нодой
 * @param {string} ignoreNodeId - id ноды, по которой outerClick не будет происходить.
 * @param {string} topMargin - расстояние от топа портала до блока
 */

export const useShowPortalBlock = (ignoreNodeId: string, topMargin = 0) => {
    const [isShown, setIsShown] = useState<boolean>(false);
    const [blockStyles, setBlockStyles] = useState<CSSProperties>({});

    const switchShow = useCallback(
        () => setIsShown((prev) => !prev),
        [setIsShown]
    );

    const blockRef = useOuterClick<HTMLDivElement>(
        () => setIsShown(false),
        ignoreNodeId
    );

    useEffect(() => {
        if (blockRef?.current) {
            const bounding = blockRef.current.getBoundingClientRect();
            const elementHeight = bounding.height;
            const left = bounding.left;
            const top = bounding.top + elementHeight + topMargin;
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
    }, [isShown]);

    return useMemo(
        () => ({
            blockRef,
            isShown,
            switchShow,
            blockStyles,
        }),
        [blockRef, blockStyles, isShown, switchShow]
    );
};
