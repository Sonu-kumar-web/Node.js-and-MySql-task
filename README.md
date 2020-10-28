# Node.js and MySql API (Assignment given by Tricog)

#### Setup the Project
1. Clone or Download the Repo.
2. `cd folder_name` goto the Repo using Terminal.
3. Run `npm start` to ignite the project.
5. Use **Postman** to test the api.

#### Routes
1. **Insert User details/Login:** `[POST]: /api/v1/user/insert`
2. **Fetch detail about all users:** `[GET]: /api/v1/user/all-users`
3. **Fetch detail about current user:** `[GET]: /api/v1/user`

#### Example to send data inside body (using Postman)
`{
    "firstName": "Sonu Kumar",
    "panCard": "BNZAA2318j",
    "DOB": "1996-11-11",
    "gender": "Male",
    "email": "sonu5@gamil.com",
    "profileImage": "https://www.tricog.com/"
}
`

