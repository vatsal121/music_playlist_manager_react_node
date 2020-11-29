import React from 'react';

const ADD_TO_FAV_URL = process.env.REACT_APP_SERVER_API_URL_TO_ADD_TO_FAVOURITES;
const PLAYLIST_URL = process.env.REACT_APP_SERVER_API_URL_TO_GET_PLAYLIST;

class Discogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchAlbumsQuery: "",
            albumsList: [],
            playList: [],
            error: null,
            isLoaded: false,
            selectedGenre: "1"
        }
    }
    componentDidMount() {
        this.getAllPlayList();
    }

    onInputChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    getAllPlayList() {
        try {
            fetch(PLAYLIST_URL)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            playList: result && Object.keys(result).length > 0 ? result.playList : []
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        }, () => {
                            alert(error)
                        });
                    }
                )
        } catch (error) {
            console.error(error);
        }
    }



    searchQueryOnDiscogs() {
        try {
            const { searchAlbumsQuery } = this.state;
            const DISCOGS_URL = `https://api.discogs.com/database/search?key=${process.env.REACT_APP_KEY}&secret=${process.env.REACT_APP_SECRET}&country=canada&artist=${searchAlbumsQuery}`;
            fetch(DISCOGS_URL)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            albumsList: result && Object.keys(result).length > 0 ? result.results : []
                        });
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        } catch (error) {
            console.error(error);
        }
    }

    addToFavourite(albumRecord) {
        try {
            let { selectedGenre } = this.state;
            let { onAddedToFavourites } = this.props;

            let albumObject = {
                id: albumRecord.id,
                playlist_id: selectedGenre,
                title: albumRecord.title,
                uri: albumRecord.uri,
                master_id: albumRecord.master_id
            };
            fetch(ADD_TO_FAV_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(albumObject),
            })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                    onAddedToFavourites(true);
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    renderPlayListOptions() {
        const { playList } = this.state;
        return playList.map((item, index) => {
            return (
                <option value={item.id} key={item.id}>{item.title}</option>
            )
        })
    }
    renderAlbumList() {
        try {
            const { albumsList } = this.state;
            if (albumsList && albumsList.length > 0) {
                return albumsList.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {item.title}
                            </td>
                            <td>
                                <img src={item.thumb} alt="thumb" />
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label"><strong>Id</strong>:&nbsp;</label>
                                        <span>{item.id}</span>
                                    </div>
                                </div>
                                {item.style.length > 0 && (<div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label"><strong>Style</strong>:&nbsp;</label>
                                        <span>{item.style.join(", ")}</span>
                                    </div>
                                </div>)}
                                {item.format.length > 0 && (<div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label"><strong>Format</strong>:&nbsp;</label>
                                        <span>{item.format.join(", ")}</span>
                                    </div>
                                </div>)}
                                <div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label"><strong>Country & Year</strong>:&nbsp;</label>
                                        <span>{item.country} - {item.year}</span>
                                    </div>
                                </div>
                                {item.genre.length > 0 && (<div className="row">
                                    <div className="col-md-12">
                                        <label className="form-label"><strong>Genre</strong>:&nbsp;</label>
                                        <span>{item.genre.join(", ")}</span>
                                    </div>
                                </div>)}
                                <div className="row">
                                    <div className="col-md-12">
                                        <a href={"https://www.discogs.com" + item.uri} target="_blank" rel="noreferrer">More information</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.master_id}
                            </td>
                            <td>
                                <div className="row">
                                    <div className="col-md-12">
                                        <label htmlFor="selectPlayList">Select genre</label>
                                        <select className="form-control" id="selectPlayList" defaultValue="1" onChange={(e) => {
                                            this.setState({
                                                selectedGenre: e.target.value
                                            })
                                        }}>
                                            {this.renderPlayListOptions()}
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        <button type="button" className="btn btn-primary" onClick={() => {
                                            this.addToFavourite(item);
                                        }}>Add to favourite</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
            return (
                <tr>
                    <td colSpan="5">No Data found.</td>
                </tr>
            )
        } catch (error) {
            console.error("Album List Render: ", error);
        }
    }

    render() {
        const { searchAlbumsQuery } = this.state;
        return (
            <div>
                <div className="row mt-2">
                    <div className="col-md-12">
                        <div className="alert alert-info" role="alert">
                            <strong>
                                Music search results provided by Discogs.com
                            </strong>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-12 align-items-center">
                        <form>
                            <div className="form-group row">
                                <label htmlFor="searchAlbumsQuery" className="col-sm-2 col-form-label">Search albums: </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="searchAlbumsQuery" placeholder="Enter search query" value={searchAlbumsQuery} onChange={(e) => { this.onInputChange(e); }} required />
                                </div>
                                <div className="col-sm-2">
                                    <button type="submit" className="btn btn-warning w-100" onClick={(e) => {
                                        this.searchQueryOnDiscogs();
                                        e.preventDefault();
                                        // e.stopPropagation();
                                    }}>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mt-2 mb-2">
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Cover Image</th>
                                <th>Info</th>
                                <th>Master ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderAlbumList()}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Discogs;