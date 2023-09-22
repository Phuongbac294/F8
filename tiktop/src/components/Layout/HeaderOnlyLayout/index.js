import Header from '../component/Header';

function HeaderOnlyLayout({ Children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{Children}</div>
            </div>
        </div>
    );
}

export default HeaderOnlyLayout;
