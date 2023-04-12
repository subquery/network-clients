#!/bin/bash

# base types
graphql-codegen --config types.codegen.ts

# exchange
graphql-codegen --config exchange.codegen.ts

# network
# graphql-codegen --config network.codegen.ts

yarn prettier --write . 

# creating export files
yarn ctix create --startAt ./src/__graphql__ --overwrite --noBackup
