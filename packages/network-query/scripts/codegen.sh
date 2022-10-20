#!/bin/bash

# base types
graphql-codegen --require dotenv/config --config types.codegen.ts

# exchange
graphql-codegen --require dotenv/config --config exchange.codegen.ts

# registry
graphql-codegen --require dotenv/config --config registry.codegen.ts

yarn prettier --write . 

# creating export files
yarn ctix create --startAt ./src/__graphql__ --overwrite --noBackup
