module.exports = {
  insertTodo: `
    insert into todo (
        id,
        title,
        user_id
    ) values ($1, $2, $3)
    returning *;
    `,
  fetchAllTodos: 'select * from todo',
  fetchAllTodosForSingleUser: `
    select * from todo
    where user_id = $1;`,
  fetchSingleTodoById: `
    select * from todo
    where id = $1;`,
};
