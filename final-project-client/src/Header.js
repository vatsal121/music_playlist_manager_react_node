import React from 'react';
import './header.css'

class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentSelectedLink: "playlist"
    //     }
    // }
    render() {
        let { companyName, authorName } = this.props;
        // let { currentSelectedLink } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1 text-center">{companyName} <i className="text-info">{authorName}</i></span>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={currentSelectedLink === "playlist" ? "nav-item active" : "nav-item"}>
                            <a id="playlist" className="nav-link" href="##" onClick={(e) => {
                                this.setState({
                                    currentSelectedLink: e.target.id
                                })
                            }}>Playlist {currentSelectedLink === "playlist" && (<span className="sr-only">(current)</span>)}</a>
                        </li>
                        <li className={currentSelectedLink === "search" ? "nav-item active" : "nav-item"}>
                            <a id="search" className="nav-link" href="##" onClick={(e) => {
                                this.setState({
                                    currentSelectedLink: e.target.id
                                })
                            }}>Search Albums {currentSelectedLink === "search" && (<span className="sr-only">(current)</span>)}</a>
                        </li>
                    </ul>
                </div> */}
            </nav>
        )
    }
}

export default Header;