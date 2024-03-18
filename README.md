# Architecture

### Backend

* Project backend is based on a 3-layer architecture, specifically controllers, service, and DAO layer.
* Controllers exposes the API end-points. Controller class accepts all api request which are then passed to the service layer.
* Service layer takes care of the bussiness logic before doing database access.
* DAO layer acts as an interface between the database and the service layer.
* Basic authorization is implemented using Spring security

### Frontend

* Frontend is built using React and Chakra UI components

## Endpoints

Every endpoint except `/api/users/register` requires Basic auth header

### GET `/api/cashCards`

* Returns list of all the CashCards owned by the user.

### POST `/api/cashCards`

* Body: CashCard object to be created
* Creates new CashCard

### PUT `/api/cashCards`

* Body: New CashCard object
* Updates an existing CashCard

### DELETE `/api/cashCards/{id}`

* Deletes an existing CashCard

### GET `/api/users/login`

* An empty request to check if the user is valid

### POST `/api/users/register`

* Body: User object representing new user
* Creates a new user account

## Video demonstration

* YouTube link: [https://youtu.be/sw-yk5C6WmM](https://youtu.be/sw-yk5C6WmM)
