import { useState, forwardRef } from 'react';
import classes from 'classnames';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            ref={ref}
            src={fallBack || src}
            alt={alt}
            className={classes(styles.wrapper, className)}
            onError={handleError}
            {...props}
        />
    );
});

export default Image;
