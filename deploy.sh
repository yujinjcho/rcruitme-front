#!/bin/bash

VERSION=v1
DOCKER_IMAGE=rcruitme-front
ECR_REPO=692977587379.dkr.ecr.us-east-1.amazonaws.com
ECS_CLUSTER=Nodejs-Monolith-ECSCluster-14Q5JZDDGF5JE
SERVICE_NAME=rcruitme-front

DEPLOY_TAG=$ECR_REPO/$DOCKER_IMAGE:$VERSION

docker tag $DOCKER_IMAGE:latest $DEPLOY_TAG
docker push $DEPLOY_TAG

aws ecs update-service \
  --cluster $ECS_CLUSTER \
  --service $SERVICE_NAME \
  --force-new-deployment
