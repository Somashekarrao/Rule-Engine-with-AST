# Rule Engine with AST

## Description
A simple rule engine to determine user eligibility based on attributes like age, department, income, and spend.

## Setup
1. Clone the repository
2. Navigate to the project directory
3. Run `mvn clean install` to install dependencies
4. Run `mvn spring-boot:run` to start the backend server
5. Navigate to `frontend` directory
6. Run `npm install` to install frontend dependencies
7. Run `npm start` to start the frontend server

## API
- POST `/api/evaluate`
  - Request Body: 
    ```json
    {
      "age": 25,
      "department": "IT",
      "income": 60000,
      "spend": 1000
    }
    ```
  - Response: `true` or `false`
