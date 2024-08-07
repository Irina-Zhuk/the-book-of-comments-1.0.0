const {expect} = require('chai');
const {userCreateQ} = require('./queries');
const {user} = require('./data');
const gqlRequest = require('../gqlRequest');


let respData = null
let postData = null;
describe('USER CREATE', () => {
    describe('USER CREATE - POSITIVE TESTS', () => {
        it('Should Create User with All Fields', () => {
           postData = {
               query: userCreateQ,
               variables: user
           }
           gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
               if (err) return done (err)
               respData = res.body
               console.log(respData)
               // expect(respData).eql()
               done()

            })


        })
//         it('Should Create User with All Fields', () => {
//
//         })
//     })
//     describe('USER CREATE - NEGATIVE TESTS', () => {
//         it('Should not Create User... ', () => {
//
//         })
//         it('Should not Create User... ', () => {
//
//         })
//         it('Should not Create User... ', () => {
//
//         })
//         it('Should not Create User... ', () => {
//
//         })
  })
})