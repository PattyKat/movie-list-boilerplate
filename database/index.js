var mysql = require('mysql');
var db = mysql.createConnection({
  user: 'student',
  password: 'Student12!!',
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