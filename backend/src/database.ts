import mongosee from 'mongoose'

let connection = 'mongodb://'
mongosee.connect(`${connection}${process.env.HOST ?? "localhost"}:27017/designcreate`)
  .then(res => { console.log('Db is connected') })
  .catch(error => { console.error(error) })
