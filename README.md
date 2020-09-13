# Appoiment
Appointment is a system for making appointments. The end user can select from several types of appoinments. And in the backend it is possible to change the dates, names or types of appoinment.

## Installation
###
### Initialization
`bash start && bash deploy;`


## Some tools
### Shoutdown container
`bash stop`

### Start container
`bash start`

### Go inside the node container 
`bash in-node`

### Go inside the mysql container 
`bash in-mysql`


## Requiere
### Docker composer
`sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose`

## Features
### Usage
#### Frontend
http://localhost:3001
#### Backend
http://localhost:3001/admin

## Best practices
### Clear code
Indented.
Airy code.
The name of the variable, functions and classes should describe what is has inside or does.
### Components small
Try to make the components as small possible.
### Reusability 
Make components thinking for reutilization.
Make documentation for easy reuse.
### Not repeat code
If some components use same code. Put the code in a file to import it.
### Coment code
Comment all code that does especial functions or difficult implementation.
### Choice a good name for components
First letter capitalize (UpperCamelCase).
The name should describe the behavior.
### Use existing components
There is a lot of pages with good components
### Make test 
Make test for all code (?)