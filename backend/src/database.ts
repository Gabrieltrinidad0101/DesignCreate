import mongosee from 'mongoose'

let connection = 'mongodb://'
if (process.env.DBUSER !== undefined && process.env.DBPASSWORD !== undefined) connection = `mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@`
mongosee.connect(`${connection}${process.env.HOST ?? 'localhost'}/designcreate`)
  .then(res => { console.log('Db is connected') })
  .catch(error => { console.error(error) })
