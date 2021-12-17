# SAPUI5 App with NodeJS Project Test
Create SAPUI5 + NodeJs Service on BTP Cloud Foundry

# Basic Concept
Create a screen that will list a base of pre-registered books.
This book base will be a pre-registered JSON that will have to be exposed through a NodeJs service.
Access to the SAPUI5 application and to the NodeJS Service must contain authentication using a Approuter.

# Technologies
    - SAP BTP Cloud Foundry
    - NodeJS Service
    - SAPUI5 Application

# Endpoint
GET Books List: <YOUR_SERVER_CF_APP_URL>/api/books

# Initial Setup

## 1: Create XSUAA Service
run command: cf create-service-key xsuaa-service-books xsuaa-service-books-key

## 2: Create XSUAA Service Key
run command: cf service-key xsuaa-service-books xsuaa-service-books-key

## 3: Deploy backend
Go to the backend folder and run the command: cf push

## 4: Deploy frontend
Go to the frontend folder, build and deploy the MTA file.

## 5: Create BTP Destination
On your subaccount, create a new destination called "approuter-nodejs" with the credentials from step 2

## 6: Run SAPUI5 APP
Go to menu "HTML Applications" on you subaccount and click on app "cominetuminetumfront"

## 7: Load Book List
Click on the button "Load Books Data" to load the book list.

