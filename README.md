# Node.js and MySql API (Assignment given by Tricog)

#### Setup the Project
1. Clone or Download the Repo.
2. `cd folder_name` goto the Repo using Terminal.
3. Run `npm start` to ignite the project.
5. Use **Postman** to test the api.

#### Before inserting data into database make some changes in your code
1. Go to config folder, inside that open `config.json` and inside development mode change "username" and "password"  according to your `phpmyadmin` or `mysql` "username" and "password".
2. Go to terminal (inside Tricog) and run `sequelize db:migrate`  to create a table schema into database.

#### Routes
1. **Insert User details/Login:** `[POST]: /api/v1/user/insert`
2. **Fetch detail about all users:** `[GET]: /api/v1/user/all-users`
3. **Fetch detail about current user:** `[GET]: /api/v1/user`

#### Example to send data inside body (using Postman)
`{`<br>
    `"firstName": "Sonu Kumar",`<br>
    `"panCard": "BNZAA2318j",`<br>
    `"DOB": "1996-11-11",`<br>
    `"gender": "Male",`<br>
    `"email": "sonu5@gamil.com",`<br>
    `"profileImage": "https://www.tricog.com/"`<br>
`}`

