import mongosee from 'mongoose'
mongosee.connect('mongodb://mongo/designcreate')
  .then(res => { console.log('Db is connected') })
  .catch(error => { console.error(error) })
