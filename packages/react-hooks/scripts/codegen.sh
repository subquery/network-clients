#!/bin/bash


# network
graphql-codegen --require dotenv/config --config network.codegen.ts

# leaderboard
graphql-codegen --require dotenv/config --config leaderboard.codegen.ts

yarn prettier --write . 

# creating export files
yarn ctix create --startAt ./src/__hooks__ --overwrite --noBackup