import { ImgHTMLAttributes } from 'react';
import cn from 'classnames';

import { WithClassName } from '@helpers/types.ts';

import styles from './ImageSnippet.module.css';

type ImageSnippetProps = ImgHTMLAttributes<HTMLImageElement> &
    WithClassName & {
        size: 's' | 'm' | 'l' | 'xl';
        alt: string;
    };

export const ImageSnippet = (props: ImageSnippetProps) => {
    const { size, alt, className } = props;

    return (
        <img
            {...props}
            className={cn(className, styles[`size-${size}`])}
            style={styles}
            alt={alt}
        />
    );
};
