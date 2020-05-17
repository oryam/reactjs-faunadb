/* Api methods to call /functions */
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const base = publicRuntimeConfig.serviceBaseUrl;

const createTodo = (data) => {
  return fetch(`${base}/.netlify/functions/todos-create`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAllTodos = () => {
  return fetch(`${base}/.netlify/functions/todos-read-all`).then((response) => {
    return response.json()
  })
}

const updateTodo = (todoId, data) => {
  return fetch(`${base}/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteTodo = (todoId) => {
  return fetch(`${base}/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const deleteTodos = (todoIds) => {
  return fetch(`${base}/.netlify/functions/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  create: createTodo,
  list: readAllTodos,
  update: updateTodo,
  delete: deleteTodo,
  batchDelete: deleteTodos
}
