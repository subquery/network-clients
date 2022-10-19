#!/bin/bash

# exchange
graphql-codegen --require dotenv/config --config exchange.codegen.ts

# registry
graphql-codegen --require dotenv/config --config registry.codegen.ts

yarn prettier --write . 

# creating export files
yarn cti create src/__hooks__/registry --withoutbackup
yarn cti create src/__hooks__/exchange --withoutbackup
yarn cti create src/__hooks__/ --withoutbackup
