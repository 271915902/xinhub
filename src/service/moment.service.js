const connection = require("../app/database");
class MoentService {
  async create(content, userId) {
    // 拼接statement
    const statement = `INSERT INTO moment (content,user_id) VALUES (?,?);`;
    // 执行sql
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }
  async queryList(size, offset) {
    // 和user联合查询 左连接
    const statement = `SELECT moment.*,JSON_OBJECT('id',user.id,'name',user.name) user FROM moment LEFT JOIN user ON moment.user_id = user.id LIMIT ? OFFSET ?;`;
    const [result] = await connection.execute(statement, [
      String(size),
      String(offset),
    ]);

    return result;
  }
  async queryById(momentId) {
    // 拼接statement
    const statement = `SELECT moment.*,JSON_OBJECT('id',user.id,'name',user.name) user FROM moment LEFT JOIN user ON moment.user_id = user.id WHERE moment.id = ?;`;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
}
module.exports = new MoentService();
