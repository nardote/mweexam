# API Documentation
## API Appointments

### [GET] /api/appointment
#### Description
Return all rows in pd_appointment table

### [GET] /api/appointment/:id
#### Description
Return a rows by id from pd_appointment table

### [POST] /api/appointment
#### Description
Create a row in pd_appointment table
#### Requiere
- name (string)
- date_start (date)
- pbAppoTypeId (id appoType)

### [DELETE] /api/appointment/:id
#### Description
Remove a row in pd_appointment table

### [PUT] /api/appointment/:id
#### Description
Modifies a row in pd_appointment table
#### Requiere
- id (int)
- name (string)
- date_start (date)
- pbAppoTypeId (id appoType)

---
## API Appointments Type
### [GET] /api/appoType
#### Description
Return all rows in appo_types table


### [POST] /api/appoType
#### Description
Create a row in appo_types table
#### Requiere
- name (string)
- enable (boolean)
- start_day (date)
- module_block (int)
  - init minutes

### [DELETE] /api/appoType/:id
#### Description
Remove a row in appo_types table

### [PUT] /api/appoType/:id
#### Description
Modifies a row in appo_types table
#### Requiere
- id (int)
- name (string)
- enable (boolean)
- start_day (date)
- module_block (int)
  - init minutes
