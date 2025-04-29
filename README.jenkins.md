# Running Jenkins Locally with Docker

This guide will help you set up and run Jenkins locally using Docker.

## Prerequisites

- Docker installed on your machine
- Docker Compose installed on your machine

## Quick Start

1. Start Jenkins:
   ```bash
   docker-compose -f docker-compose.jenkins.yml up -d
   ```

2. Access Jenkins:
   - Open your browser and go to `http://localhost:8080`
   - The initial admin password can be found in the container logs:
     ```bash
     docker logs jenkins
     ```

3. Stop Jenkins:
   ```bash
   docker-compose -f docker-compose.jenkins.yml down
   ```

## Important Notes

- Jenkins data is persisted in a Docker volume named `jenkins_home`
- The Jenkins instance runs on port 8080
- The setup wizard is disabled by default for easier setup
- To view logs: `docker logs -f jenkins`

## Customization

You can modify the `docker-compose.jenkins.yml` file to:
- Change exposed ports
- Add additional plugins
- Configure environment variables
- Add more volumes for data persistence

## Troubleshooting

If you encounter any issues:
1. Check the container logs: `docker logs jenkins`
2. Ensure ports 8080 and 50000 are not in use
3. Verify Docker has enough resources allocated 