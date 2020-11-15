# Software Deployment - Lab 3
The task was to set up a "Wordpress" with external MySQL DB in 2 containers. In each part the same software is provided by means of containers, whereas the containers in part 2 were created by the user.
### Part 1 
Creation of a Docker-Compose file that uses Wordpress and MySQL images to set up a Wordpress container infrastructure.

Here you will find a Docker-Compose file that uses Wordpress and MySQL images to set up a Wordpress container infrastructure. 
The following command in the folder where the docker-compose file is located has to be executed: 

```
                                            docker-compose up -d
``` 

### Part 2
The second part creates own images based on debian:jessie for a Wordpress container installation. 

The "Part 2" folder contains the docker-compose file to start it later.

There is also a folder named "MySQL" and "Wordpress". In both folders the images must be created once. 

For "MySQL": ```docker build -t mysqljules .``` 

For "Wordpress": ```docker build -t wordpressjules .``` 

(mysqljules and wordpressjules is the name for the image, which was also called later in docker-compose)

Afterwards you have to go back to the parent folder where the docker-compose file is located and execute the command `docker-compose up -d`, then you can log in to Wordpress when going to `localhost:80` and also install it.