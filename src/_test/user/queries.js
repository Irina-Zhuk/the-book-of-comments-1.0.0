const userCreateQ = `mutation UserDeleteById($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`
module.exports = { userCreateQ }