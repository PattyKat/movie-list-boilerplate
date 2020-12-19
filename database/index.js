var sql = require('sql');
var db = mysql.createConnection({
  user: 'student',
  password: 'Student2!!',
  database: 'movies'
});

db.connect(err => {
  if(err) {
    console.log(err);
  }else {
    console.log('your\'re connected')
  }
});

module.exports=db;