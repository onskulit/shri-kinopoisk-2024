import { ImgHTMLAttributes } from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { WithClassName } from '@helpers/types';

import styles from './ImageSnippet.module.css';

type ImageSnippetProps = ImgHTMLAttributes<HTMLImageElement> &
    WithClassName & {
        size: 's' | 'm' | 'l' | 'xl';
        alt: string;
    };

export const ImageSnippet = (props: ImageSnippetProps) => {
    const { size, alt, className } = props;

    return (
        <Image
            {...props}
            width={500}
            height={500}
            src={props.src || ''}
            className={cn(styles.base, styles[`size-${size}`], className)}
            alt={alt}
        />
    );
};
