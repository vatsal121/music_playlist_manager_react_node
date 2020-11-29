import React from 'react';
import './footer.css'
class Footer extends React.Component {
    render() {
        let { authorName } = this.props;
        return (
            <footer>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; {new Date().getFullYear()}, All Right Reserved <a href="##" role="button">{authorName}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;