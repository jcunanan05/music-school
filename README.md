# Music school

Built with jekyll. Instructions below.

## How to run

### Docker

- Build the docker compose first. run `docker-compose buld`
- Run the container with ports. `docker-compose run --rm --service-ports jekyll_dev`

To run on multiple terminal windows:

- run `docker exec -it YOUR_CONTAINER_ID /bin/bash`

To cleanup:

- run docker-compose down
- run docker rmi jekyl_dev

### Jekyll

To create a new project:

- run `jekyll new my_project`
