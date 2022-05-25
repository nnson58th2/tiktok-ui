import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ item }) {
    return (
        <Button leftIcon={item.icon} to={item.to} className={cx('menu-item')}>
            {item.title}
        </Button>
    );
}

export default MenuItem;
