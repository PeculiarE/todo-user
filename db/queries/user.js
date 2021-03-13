const insertUser = `insert into user_info (
    id,
    email,
    first_name,
    last_name,
    password,
    gender) values ($1, $2, $3, $4, $5, $6)
    returning id, email, first_name, last_name, created_at, is_admin, gender;
`;

const getUserByEmail = `
    select * from user_info
    where email = $1;
`;

module.exports = { insertUser, getUserByEmail };
