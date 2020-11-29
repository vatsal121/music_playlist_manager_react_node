DROP TABLE IF EXISTS track;
DROP TABLE IF EXISTS playlist;

CREATE TABLE playlist (
id SERIAL PRIMARY KEY,
title VARCHAR(100) NOT NULL,
creation_date TIMESTAMPTZ DEFAULT Now()
);

CREATE TABLE track (
id SERIAL PRIMARY KEY,
playlist_id INTEGER REFERENCES playlist (id),
title VARCHAR(200) NOT NULL,
uri VARCHAR(100) NOT NULL,
master_id INTEGER NOT NULL
);

INSERT INTO playlist (title) VALUES ('Default');
INSERT INTO playlist (title) VALUES ('Acoustique');
INSERT INTO playlist (title) VALUES ('Classique');
INSERT INTO playlist (title) VALUES ('Country');
INSERT INTO playlist (title) VALUES ('Metal');
INSERT INTO playlist (title) VALUES ('Pop/Dance');
INSERT INTO playlist (title) VALUES ('Rock');
