import { Children, PropsWithChildren } from 'react';
import { WithClassName } from '@helpers/types.ts';

type PageBlocksProps = PropsWithChildren & WithClassName;

export const PageBlocks = ({ children, className }: PageBlocksProps) => {
    const arrayChildren = Children.toArray(children);
    return (
        <div className={className}>
            {Children.map(arrayChildren, (child, index) => {
                const isLast = index === arrayChildren.length - 1;
                return (
                    <div style={{ marginBottom: isLast ? 0 : 24 }}>{child}</div>
                );
            })}
        </div>
    );
};
