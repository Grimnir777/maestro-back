db.createUser(
    {
        user: "admin",
        pwd: "AwesomePassword",
        roles : [
            {
                role: "readWrite",
                db: "maestro"
            }
        ]
    }
)