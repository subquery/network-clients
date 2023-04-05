#!/bin/bash

# base types
graphql-codegen --require dotenv/config --config types.codegen.ts

# exchange
graphql-codegen --require dotenv/config --config exchange.codegen.ts

# leadboard
graphql-codegen --require dotenv/config --config leaderboard.codegen.ts

# network
graphql-codegen --require dotenv/config --config network.codegen.ts

yarn prettier --write . 

# creating export files
yarn ctix create --startAt ./src/__graphql__ --overwrite --noBackup
