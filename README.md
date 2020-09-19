# Purpose
Training and playground for team members to interact with a basic structure of the codebase.

# Setup Steps
### Step 1: Download the following tools (if not installed already):
- [Visual Studio Code](https://code.visualstudio.com/Download) (or your preferred code editor)

### Step 2: Clone GitHub repo
- Click *Code* dropdown, *HTTPS option* and then copy the link using the Clipboard icon. 
- Open Terminal (Mac) or Command Prompt (Windows). 
- Navigate to your appropriate directory using cd. You can see the list of folders in a directory by using ls (Mac) or dir (Windows).
- Once at the desired file location, type in the following (and replace the COPIED LINK with the link that was copied to your Clipboard): 

```shell
git clone <COPIED LINK>
```

### Step 3: Open the code in Visual Studio
- Open the Visual Studio app
- Go to *File* located at the top, *Open Folder*, and then click the desired folder.

### Step 4: Setup the codebase locally
- Open up Terminal in Visual Studio Code by selecting the *Terminal* option located at the top.
- Run the following commands in the Visual Studio Code terminal:

<ins>Option 1</ins>

```shell
npm install
```

<ins>Option 2</ins> 
Use this option if you encounter any issues with Option 1. 

Navigate to the third icon on the left of Visual Studio and then press the first button next to Changes. When hovered, this button will say  "Discard All Changes". Once discarded, enter the following into the Visual Studio Code Terminal.

```shell
cd react-ui
npm install
cd ..
cd server
npm install
```

### Step 5: Setup PostgreSQL
*For Mac users, https://postgresapp.com/ is another option.*

1. Download [PostgreSQL] (https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
2. Setup a default user and connection following the instructions in the prompts
*Please note down your password, port, and superuser values!*
3. Navigate to the location of the PostgreSQL installation

Location of PostgreSQL (may need to google/search your files if different):

```json
{
    "windows": "C:\Program Files\PostgreSQL\9.0\bin",
    "mac": "/usr/local/var/postgres"
}
```

Potential debugging links:
- [Windows](https://doc.odoo.com/7.0/install/windows/postgres/)
- [Mac](https://www.microfocus.com/documentation/idol/IDOL_12_0/MediaServer/Guides/html/English/Content/Getting_Started/Configure/_TRN_Set_up_PostgreSQL.htm)

4. Connect to the database server

```shell
psql -U <USERNAME>
```

5. Create a new database

```sql
CREATE DATABASE testing;
```

6. Navigate to Visual Studio Code Terminal and enter the following code (and replace the capitalized values in <> when your values):

*Make sure the final line does NOT have <> around the replaced values!*

```shell
echo DATABASE_URL=postgres://<SUPERUSER>:<PASSWORD>@127.0.0.1:<PORT>/<DATABASENAME> >> server/.env
```

### Step 6: Run locally
<ins>Option 1</ins>
```shell
npm run start:dev
```

<ins>Option 2</ins> 
Use this option if you encounter any issues with Option 1. 

```shell
cd react-ui
npm start
```
Open up another Visual Studio Code terminal by pressing the + button on the top right of the navigation for the Terminal.

```shell
cd server
npm install
```

## Notes
1. The React app runs on http://localhost:3000/
2. The API Server runs on http://localhost:4000. 
3. Whenever the server starts, it executes sql migrations from `server/postgrator`. Read more at [Postgrator](https://github.com/rickbergfalk/postgrator)
4. pgAdmin 4 (installed with PostgreSQL) can be used to view your database and database tables in a similar fashion to phpmyadmin. You'll have to navigate to Schemas > Tables to see the individual table information. 

## Practice Ideas (feel free to Google!)
1. Create a new branch off of master. Make changes and then push your changes onto that branch.
2. Make changes on GitHub for that new branch and commit them using GitHub's interface. Try to make changes locally and push again. What happens? Follow the prompts to resolve the problem.
3. Modify one of the current API endpoints to return something different.
4. Modify the front page of the React app. Also try to add Sass files to the react-ui folders and try to style the web page differently.
5. Add changes to the database by creating sql files in `server/postgrator`. You may need to restart your server to see the changes propagate. 
6. Anything else you want to try!

## Useful References
- [React](https://reactjs.org/tutorial/tutorial.html)
- [Sass](https://sass-lang.com/guide)
- [Express](https://expressjs.com/en/starter/hello-world.html)
- [SQL](https://www.w3schools.com/sql/)
- [Postgres vs. MySQL](https://developer.okta.com/blog/2019/07/19/mysql-vs-postgres)
