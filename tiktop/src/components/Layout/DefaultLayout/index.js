import classNames from 'classnames/bind';
import Header from '../component/Header';
import Sidebar from './Sidebar';
import styles from './defaultlayout.module.scss';

const cx = classNames.bind(styles);
function DefaultLayout({ Children }) {
    return (
        <div className={cx('warpper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{Children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
