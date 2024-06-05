export type WithClassName = {
    className?: string;
};

export type IconBaseProps = {
    /**
     * Цвет иконки
     */
    color: 'secondary' | 'secondary-light';

    /**
     * Ширина иконки
     */
    width: number;

    /**
     * Высота иконки
     */
    height: number;

    /**
     * Управление заблокированным состоянием иконки
     */
    disabled?: boolean;

    /**
     * Текст при наведении мышки
     */
    title?: string;
} & React.ComponentPropsWithoutRef<'svg'>;
