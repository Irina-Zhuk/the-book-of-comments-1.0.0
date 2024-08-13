const userCreateQ = `mutation UserDeleteById($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`

const userGetByIdQ = `query Query($userId: ID!) {
  userGetById(userId: $userId) {
    firstName
    lastName
    _id
  }
}`
module.exports = { userCreateQ, userGetByIdQ }