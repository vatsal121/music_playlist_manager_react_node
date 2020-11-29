# Music Playlist Manager
<div align="center">
    <a href="https://reactjs.org/">
        <img
            alt="React"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            width="150" height="150">
    </a>
    <a href="https://nodejs.org/en/">
        <img
            alt="Node JS"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
            width="150" height="150">
    </a>
    <a href="https://www.postgresql.org/">
        <img
            alt="PostgreSQL"
            src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg"
            width="150" height="150">
    </a>
</div>

### Repo Link: https://github.com/vatsal121/music_playlist_manager_react_node

<div align="center">
    <h3>Project Demo</h3>
</div>

<div align="center" style="width: 100%">

![react-node-demo](react-node-demo.gif)

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


### Please See:
  - It is a good practice to run the terminal/command prompt with admin privileges.
  - If for some reason npm start doesn't work on the server project just update the package.json file in the script section, set the "start" property to `node server.js` from `nodemon server.js`
  - Another alternative is fire the following command in your command prompt/terminal `npm install nodemon -g` and then re-run the `npm start` command in the server project folder.


### Features

1. Search albums using Discogs API.
2. Add searched album to favourite list.
3. Delete album from favourite list.



