import { CSSProperties, ImgHTMLAttributes } from 'react';

type ImageSizes = 'm' | 'l' | 'xl'
const SizeMapper: Record<ImageSizes, CSSProperties> = {
    m: {
        borderRadius: 'var(--border-radius-m)',
        maxWidth: 150,
    },
    l: {
        borderRadius: 'var(--border-radius-l)',
        maxWidth: 200,
    },
    xl: {
        borderRadius: 'var(--border-radius-xl)',
        maxWidth: 350,
    },
};

type ImageSnippetProps = ImgHTMLAttributes<HTMLImageElement> & {
    size: ImageSizes;
    alt: string;
};

export const ImageSnippet = (props: ImageSnippetProps) => {
    const { size, alt } = props;
    const styles = SizeMapper[size];

    return <img {...props} style={styles} alt={alt} />;
};
