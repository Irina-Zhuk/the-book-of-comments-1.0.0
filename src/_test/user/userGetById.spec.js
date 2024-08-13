const {expect} = require('chai');
const {userGetByIdQ} = require('./queries');
const {user} = require('./data');
const gqlRequest = require('../gqlRequest');

let respData = null;
let postData = null


describe('USER GET BY ID', () => {
    describe('USER GET BY ID - POSITIVE TESTS', () => {
        it('Should Get User by Id', (done) => {
            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: '66bad72da36640b8945330f0'
                }
            }
            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err)
                    respData = res.body.data.userGetById
                    console.log(respData)
                    expect(respData._id).eq('66bad72da36640b8945330f0')
                    done()
                })
        })
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