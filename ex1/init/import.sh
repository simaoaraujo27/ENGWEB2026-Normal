#!/bin/bash
mongoimport --host mongodb --db jogostabuleiro --collection jogos --type json --file /jogos.json --jsonArray
