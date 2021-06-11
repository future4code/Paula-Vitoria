CREATE TABLE cookenu_users(
id VARCHAR(255) NOT NULL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
role VARCHAR(255) NOT NULL DEFAULT 'NORMAL'
);
CREATE TABLE cookenu_recipes(
id VARCHAR(255) NOT NULL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
date DATE NOT NULL,
);