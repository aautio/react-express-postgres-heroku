# Used for Demo Purposes

## Server Code Setup
1. migrations: all the required database changes, such as creating a new table
2. lib: general server methods, such as connecting to the database
3. routes: directs the api endpoints to the appropriate handlers.
4. models: contains all the business logic and database manipulations/querying
    a. data: contains the formatting for the tables
    b. db: contains the sql querying and manipulation statements
    c. handlers: contains all the business logic for a certain behaviour

5. tests: contains all the test code

* Special Notes: 
1. For naming the migrations, it needs to follow [version].[action].[optional-description].sql. Refer to [Postgrator documentation](https://www.npmjs.com/package/postgrator) for more details.
2. Do NOT touch past migrations to avoid checksum errors. If corrections need to be made, create a new sql statement.
3. Use single quotes for strings in the sql statements. 