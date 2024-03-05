#!/bin/bash

# Create Docker network
docker network create backend

# Run Docker Compose dependency
docker-compose -f docker-compose-dep.yaml -p busniessid-dependency up

# Run Docker Compose
docker-compose -p busniessid-microservices up
