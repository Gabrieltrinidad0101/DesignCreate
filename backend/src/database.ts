import mongosee from 'mongoose'

let connection = 'mongodb://'
if (process.env.DBUSER !== undefined && process.env.DBPASSWORD !== undefined) connection += `${process.env.DBUSER}:${process.env.DBPASSWORD}@`
console.log(`${connection}${process.env.HOST ?? "localhost"}/designcreate`)
mongosee.connect(`${connection}${process.env.HOST ?? "localhost"}/designcreate`)
  .then(res => { console.log('Db is connected') })
  .catch(error => { console.error(error) })
