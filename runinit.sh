#!bin/bash
export FAUNADB_SERVER_SECRET=$(cat ".key") && npm run db:bootstrap