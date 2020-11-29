# Music Playlist Manager
### Repo Link: https://github.com/vatsal121/music_playlist_manager_react_node

<div align="center">
    <h3>Project Demo</h3>
</div>

<div align="center" style="width: 100%">

![react-node-demo](react-node-demo.gif)

</div>

<div align="center">
    <a href="https://reactjs.org/">
        <img
            alt="React"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            width="150">
    </a>
    <a href="https://nodejs.org/en/">
        <img
            alt="Node JS"
            src="https://nodejs.org/static/images/logo.svg"
            width="150">
    </a>
</div>


### Music Playlist Manager using React JS and Node JS

  - React JS
  - Node JS
  - PostgreSQL as Database


### Installation

  - To run the project, clone it on your computer using the following command or download the project as zip directly.
  	
	`git clone https://github.com/vatsal121/music_playlist_manager_react_node.git`

  - Create a database named `final-project-music-albums` in pgAdmin4.
  - To add the tables, Import the "final-project-postgres-script.sql" file from the root of the project     directory into your pgAdmin which contains scripts to create tables.
  - Set up your Database credentials in the database file located at "final-project-server/src/dao.js".
  - Once done, open both the folders in your terminal/cmd and execute command `npm install`. 
  - Once installed, Run project by executing `npm start`.
  - Server APIs is located at `http://localhost:8000`
  - Front end React app is located at `http://localhost:3000/`


### Features

1. Search albums using Discogs API.
2. Add searched album to favourite list.
3. Delete album from favourite list.



