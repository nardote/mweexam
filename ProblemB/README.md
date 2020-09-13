# Appoiment
Appointment is a system for making appointments. The end user can select from several types of appoinments. And in the backend it is possible to change the dates, names or types of appoinment.

---

## Installation
### Initialization
Read README.md in the root

## Required
- Mysql 5+
- node.js 12+
- next.js 9+
- Express 4+
- sequelize 6+

## Usage
### Frontend
http://localhost:3001
### Backend
http://localhost:3001/admin


## Features
### Backend
- [x] Create appointments
- [x] Modify existing appointments
- [x] Reschedule appointments
- [ ] Cancel appointments
- [ ] Manage hours of operation
#### Frontend
- [x] Select an appointment type
- [x] Select a date from the calendar
- [x] Select a time slot
- [ ] Confirm the appointment

---

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