
## Zithara Assessment
**Deployed Project Link** :  
https://customer-data-management.vercel.app

**Task Description:**
1. Create 50 records in database with the following column fields “sno, customer name, age, phone, location, created_at” and dummy data
2. Create a single page application to display the above data in table format with search option, and pagination with 20 records per page.
3. The created_at column data has to be displayed in two separate columns as “date” and “time”
4. The search functionality will search the data by the column "name" or "location".
5. There should be an option to sort the data either by "date" or by "time".

*In addition to implementing the given tasks, I have also added functionality to add users to the database.*

## Project Demo


https://github.com/Manishb18/ZitharaAssessment/assets/81469629/d46a6056-ff1f-4c09-981d-96a2a53d4a4a


**Database used:** PostgreSQL  
**Commands Used:** Create, Insert, and Select

**Table schema used:**

| Column     | Type                        | Nullable | Default                                |
|------------|-----------------------------|----------|----------------------------------------|
| sno        | integer                     | not null | nextval('users_sno_seq'::regclass)    |
| username   | character varying(250)      | not null |                                        |
| age        | integer                     | not null |                                        |
| phone      | character varying(20)       | not null |                                        |
| location   | character varying(250)      | not null |                                        |
| created_at | timestamp without time zone|          | CURRENT_TIMESTAMP                     |

## Backend
Used Express.js to build API.  
**Endpoints used:**  
**GET** - To fetch the data of all the users present in the database.  
**POST** - To insert a new user into the database.

## Frontend

- Utilized **React.js** to build the frontend.
- Primarily utilized **Hooks**: useState and useEffect.
- Employed the **axios** library to fetch data from the backend.

## Deployment services used

 - [render.com](render.com) to deploy the backend
 - [vercel.com](vercel.com) to deploy the frontend

