'use client';

import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
    mountElement?: HTMLElement | null;
} & PropsWithChildren;

// TODO: фиксануть костыль referenceerror: document is not defined
export const Portal: FC<PortalProps> = ({ children, mountElement }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted
        ? createPortal(children, mountElement ?? document?.body)
        : null;
};
