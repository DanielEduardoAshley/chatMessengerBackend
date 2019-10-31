const request = require('supertest');
const {app} = require('../app.js');

jest.mock('../services/dbconnection');
jest.mock('../services/messages');
const { messages } = require('../services/messages');
const db = require('../services/dbconnection');


test('expect {test:1}', done =>{
    messages.getMessages.mockImplementation(()=>{
        return Promise.resolve()
    })
    // console.log(app.use('/users', usersRouter))
     request(app)
        .get('/')
        .then((response)=>{
            console.log(response.status)
            expect(response.status).toBe(200)
            done();
        })

    })