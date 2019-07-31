const mongoose = require('mongoose')

const URL = 'mongodb+srv://kapeles:kapeles@cluster0-1jpvu.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(URL, function(err, client) {
  if(err) {
       console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
  mongoose.Promise = global.Promise;
  // perform actions on the collection object
}, { useNewUrlParser: true })

module.exports = mongoose