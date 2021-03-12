const todoArray = [
  {
    id: '719a6c77-f46e-43ba-bbdb-fd7fa890af72',
    title: 'Todo 1',
    isComplete: false,
    ownerEmail: 'perhis@gmail.com',
  },
];

module.exports = todoArray;

// create table if not exists todo (
//   id UUID primary key,
//   user_id uuid references user_info not null
//   title varchar ( 100 ) not null,
//   is_complete boolean default 'false',
//   created_at timestamptz default now(),
//   updated_at timestamptz default now()
//   )
