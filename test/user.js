import { async } from 'regenerator-runtime'
import supertest from 'supertest'
const request = supertest('https://gorest.co.in/public-api/')
const assert = require('chai').assert
const TOKEN = "7d16c55af6344222f37cf3d052720b894a169a62125e7738a1afc22dc3e1a9b8"

describe('get users',()=>{

    it('GET/users',()=>{

        //  request.get(`users?access-token=${TOKEN}`).end((err,res) =>{
        
        //     assert.isNotEmpty([res.body.data])
        //     done()

        return request.get(`users?access-token=${TOKEN}`).then((res) =>{
            assert.isNotEmpty([res.body.data])
            console.log(res.body.data)
        
        })
    })

        it('GET/users/ID',async()=>{

            await request.get(`users/5676872?access-token=${TOKEN}`).then((res) =>{
        
                assert.equal([res.body.data.id],5676872)
            
            })

        })

        it('GET/users with query params',()=>{

        

            return request.get(`users/?access-token=${TOKEN}&page=5&gender=Female&status=Active`).then((res) =>{
        
                assert.isNotEmpty([res.body.data])
                console.log(res.body)
            
            })

        })

    it.only('POST users', () => {

        const data ={
            email :`test-${Math.floor(Math.random()*9999)}@testmail.com`,
            name:"asdas",
            gender :"female",
            status :'INACTIVE'
        }

        return request.post('users').set('Authorization', `Bearer ${TOKEN}`).send(data).then((res) => {
            console.log(res.body)
            assert.equal([res.body.data.email],data.email)
           assert.deepEqual([res.body.data],data)
        })

    })

    it('PUT /Users',async()=>{

        const data ={
            status :'Active',
            name :`silly-${Math.floor(Math.random()*9999)}`
        
        }
        const response= await request
        .put('users/132')
        .set('authorization',`bearer ${TOKEN}`
        ).send(data).then((res)=>{
            assert.deepEqual((res.body.data),data)

        })
    })

    it.only('Delete',async()=>{

        await request.delete('users/2')
        .set('Authorization',`Bearer ${TOKEN}`)
        .then(res =>{assert.equal((res.body.data),null)})
    })

})

        

    
    

    
        
    
           
        





