/* Api methods to call /functions */

import config from '../../config/server.config'

const createTodo = (data) => {
  return fetch(`${config.ServerConfig.baseUrl}/.netlify/functions/todos-create`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAllTodos = () => {
  return fetch(`${config.ServerConfig.baseUrl}/.netlify/functions/todos-read-all`).then((response) => {
    return response.json()
  })
}

const updateTodo = (todoId, data) => {
  return fetch(`${config.ServerConfig.baseUrl}/.netlify/functions/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const deleteTodo = (todoId) => {
  return fetch(`${config.ServerConfig.baseUrl}/.netlify/functions/todos-delete/${todoId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const deleteTodos = (todoIds) => {
  return fetch(`${config.ServerConfig.baseUrl}/.netlify/functions/todos-delete-batch`, {
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
