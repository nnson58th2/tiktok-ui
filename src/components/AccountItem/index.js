import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9366bed55819a1889d53ff3a508c766b~c5_300x300.webp?x-expires=1653580800&x-signature=rlcY0QwH1l82PHhIvLggQI1YCtg%3D"
                alt="Son"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Nhu Son</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyennhuson</span>
            </div>
        </div>
    );
}

export default AccountItem;
