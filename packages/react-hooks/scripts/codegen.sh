#!/bin/bash

# exchange
graphql-codegen --require dotenv/config --config exchange.codegen.ts

# network
graphql-codegen --require dotenv/config --config network.codegen.ts

# leadboard
graphql-codegen --require dotenv/config --config leadboard.codegen.ts

yarn prettier --write . 

# creating export files
yarn ctix create --startAt ./src/__hooks__ --overwrite --noBackup