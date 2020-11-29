
import './App.css';
import React from 'react';
import Header from './Header';
import PlayList from './PlayList';
import Discogs from './Discogs'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToFavourites: false
    }
  }

  onAddedToFavourites(isAdded, playListCount) {
    this.setState({
      addedToFavourites: isAdded
    })
  }

  onPlayListFetched(addedToFavourites) {
    this.setState({
      addedToFavourites: addedToFavourites
    })
  }

  render() {
    const { addedToFavourites } = this.state;
    return (

      <div className="App">
        <Header companyName="Music Album Project by " authorName="Vatsal Chauhan & Meet Patel" />
        <div className="container-fluid">
          <PlayList onFetchedPlayList={(value) => {
            this.onPlayListFetched(value);
          }} addedToFavourites={addedToFavourites} />
          <hr />
          <Discogs onAddedToFavourites={(isAdded) => { this.onAddedToFavourites(isAdded) }} />
        </div>
        <Footer authorName="Vatsal Chauhan & Meet Patel" />
      </div>

    );
  }

}

export default App;
