'use client'

import {
    FC,
    PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';

import { NavigationButton } from '@components/NavigationButton';
import { WithClassName } from '@helpers/types';

import styles from './Carousel.module.css';

type CarouselProps = PropsWithChildren & WithClassName;

export const Carousel: FC<CarouselProps> = ({ children }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalScrolls, setTotalScrolls] = useState(0);
    const [showControls, setShowControls] = useState(true);

    const scrollHorizontally = useCallback((position: 'left' | 'right') => {
        if (!carouselRef.current) {
            return;
        }

        const carouselWidth = carouselRef.current.clientWidth;

        carouselRef.current.scrollBy({
            left: position === 'left' ? -1 * carouselWidth : carouselWidth,
            behavior: 'smooth',
        });
    }, []);

    const handlePrev = useCallback(() => {
        if (currentIndex <= 0) {
            return;
        }

        scrollHorizontally('left');
        setCurrentIndex(currentIndex - 1);
    }, [currentIndex, scrollHorizontally]);

    const handleNext = useCallback(() => {
        if (currentIndex >= totalScrolls) {
            return;
        }

        scrollHorizontally('right');
        setCurrentIndex(currentIndex + 1);
    }, [currentIndex, scrollHorizontally, totalScrolls]);

    useEffect(() => {
        if (!carouselRef.current || !containerRef.current) {
            return;
        }

        const carouselWidth = carouselRef.current.scrollWidth;
        const containerWidth = containerRef.current.scrollWidth;

        setTotalScrolls(Math.ceil(carouselWidth / containerWidth));

        if (carouselWidth <= containerWidth) {
            setShowControls(false);
        }
    }, []);

    return (
        <div ref={containerRef}>
            <div ref={carouselRef} className={styles.childContainer}>
                {children}
            </div>
            {showControls && (
                <div className={styles.controls}>
                    <NavigationButton
                        type="prev"
                        size="m"
                        onClick={handlePrev}
                        isHidden={currentIndex === 0}
                    />
                    <NavigationButton
                        type="next"
                        size="m"
                        onClick={handleNext}
                        isHidden={currentIndex === totalScrolls - 1}
                    />
                </div>
            )}
        </div>
    );
};
