# GifsApp

Simple dashboard Angular (version 16) app that takes a query and returns 10 gifs matching the search terms. To obtain the gifs, the [GIPHY API](https://developers.giphy.com/) is used (the key included in this repo has already been deactivated, so obtaining a new one would be required to fully test the app locally).

The application also keeps track of the search history for up to the last 10 queries, using `localStorage` to persist the data after closing the app. The user can delete the search history at any point through a dedicated button.

This project is part of [Fernando Herrera](https://github.com/Klerith/)'s Angular course.
