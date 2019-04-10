#!/bin/bash

echo "REACT_APP_SERVICES_BASE_URL=http://demo-58800555.us-east-1.elb.amazonaws.com/api" > .env
docker build -t rcruitme-front -f Dockerfile .
rm .env
