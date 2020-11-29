import React from 'react';
const URL = process.env.REACT_APP_SERVER_API_URL_TO_ADD_TO_FAVOURITES
class PlayList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracksList: []
        }
    }
    componentDidMount() {
        this.getAllTracks();
    }

    getAllTracks() {
        fetch(URL)
            .then(
                (response) => {
                    if (response.ok) {
                        response.json().then(json_response => {
                            this.setState({
                                tracksList: json_response.tracks
                            }, () => {
                                this.props.onFetchedPlayList(false)
                            })
                        }
                        )

                    } else {
                        // handle errors, for example 404
                        response.json().then(json_response => {

                        })
                    }
                },

                (error) => {
                    console.error(error);
                }
            )
    }

    deletePlayListRecord(playListRecord) {
        fetch(URL + `/${playListRecord.id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                alert(res.message);
                this.getAllTracks();
            })
    }

    renderTableCell(dataObject) {
        return Object.keys(dataObject).map((item, index) => {
            return <td key={dataObject[item] + "_" + index}>{dataObject[item]}</td>
        })
    }

    renderTableBody() {
        let { tracksList } = this.state;
        if (tracksList && tracksList.length > 0) {
            return tracksList.map((item, index) => {
                return (
                    <tr key={index}>
                        {this.renderTableCell(item)}
                        <td>
                            <button type="button" className="btn btn-danger" onClick={() => {
                                this.deletePlayListRecord(item);
                            }}>Delete</button>
                        </td>
                    </tr>
                )
            }, this)
        }
        return (<tr>
            <td colSpan="6" className="text-center">No data available</td>
        </tr>)
    }

    renderTracksTable() {
        return (

            <div className="row mt-2">
                <div className="col-md-12 table-responsive">
                    <div className="alert alert-info" role="alert">
                        <strong>
                            My Playlist
                        </strong>
                    </div>
                    <table className="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Playlist Name</th>
                                <th>Title</th>
                                <th>URI</th>
                                <th>Master ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTableBody()}
                        </tbody>
                    </table>
                </div>
            </div>

        )

    }

    render() {
        const { addedToFavourites } = this.props;
        if (addedToFavourites) {
            this.getAllTracks();
        }
        return (
            <div className="row">
                <div className="col-md-12">
                    {this.renderTracksTable()}
                </div>
            </div>
        )
    }
}

export default PlayList;