import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
    mountElement?: HTMLElement | null;
} & PropsWithChildren;

export const Portal: FC<PortalProps> = ({ children, mountElement }) => {
    const element = mountElement ?? document.body;

    return createPortal(children, element);
};
