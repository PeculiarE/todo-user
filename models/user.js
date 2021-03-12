const userArray = [
  {
    id: '719a6c77-f46e-43ba-bbdb-fd7fa890af71',
    email: 'perhis@gmail.com',
    firstName: 'Peculiar',
    lastName: 'Erhis',
    password: '1234567',
    gender: 'female',
    isAdmin: true,
  },
];

module.exports = userArray;

// create type current_gender as enum (
// 'male', 'female', 'transgender', 'gender-neutral', 'non-binary', 'others'
// );

// create table if not exists user_info (
// id UUID primary key,
// email varchar unique not null,
// first_name varchar ( 100 ) not null,
// last_name varchar ( 100 ) not null,
// password varchar not null,
// gender current_gender,
// is_admin boolean default 'false',
// created_at timestamptz default now(),
// updated_at timestamptz default now()
// );
