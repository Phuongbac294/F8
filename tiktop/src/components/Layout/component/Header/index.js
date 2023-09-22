import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('warpper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;