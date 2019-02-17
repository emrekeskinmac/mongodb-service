const MESG = require('mesg-js').service()
var MongoClient = require('mongodb').MongoClient;
const DATABASE_NAME = process.env.DATABASE_NAME

const main = async () => {
  let mongodb;
  mongodb = await MongoClient.connect("mongodb://mongodb:27017/", { useNewUrlParser: true });
  db = mongodb.db(DATABASE_NAME);
  try {
    MESG.listenTask({
      write: require('./tasks/write')(db),
      read: require('./tasks/read')(db),
      update: require('./tasks/update')(db),
      delete: require('./tasks/delete')(db)
    })
  } catch (error) {
    console.error(error)
  }
}

main()