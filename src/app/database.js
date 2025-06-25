const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "xinhub",
  user: "root",
  password: "990217",
  connectionLimit: 10,
});
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.log("数据库连接失败！", err);
    return;
  } 
  console.log("数据库连接成功！");

});
const connection = connectionPool.promise();
module.exports = connection;
