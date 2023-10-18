# Udacity ToDos Serverless capstone project

## Project Components
- Restful API (Lambda Functions, API Gateway and DynamoDb)
- Client (React)

## How to run the application
### Deploy Backend
To deploy an application run the following commands:

```bash
cd backend
npm install
sls deploy -v
````
### Update frontend configuration
```js
const apiId = 'hyicgirysc'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  
  domain: 'dev-htore8nz2n21p0n4.us.auth0.com',            // Auth0 domain
  clientId: 'TjH0vElG6j6YwzGs6ZHXcxO29NG0Ry7n',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
```
### Frontend
```bash
cd client
npm install
npm run start
```

## Current Deplyment details
API Endpoint
```
https://hyicgirysc.execute-api.us-east-1.amazonaws.com/dev/todos
```
Postman Collection
```
Udacity Cloud developer capstone.postman_collection.json
```
