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
    const statement = `SELECT m.id,m.content,JSON_OBJECT('id',u.id,'name',u.name) user,
    (SELECT COUNT(*) FROM comment WHERE comment.moment_id = m.id) commentCount
    FROM moment m LEFT JOIN user u ON u.id=m.user_id
    LIMIT ? OFFSET ?;`;
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
  async updateById(content, momentId) {
    const statement = `UPDATE moment SET content = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [content, momentId]);
    return result;
  }
  async removeById(momentId) {
    const statement = `DELETE FROM moment WHERE id = ?;`;
    const [result] = await connection.execute(statement, [momentId]);
    return result;
  }
  async hasLabel(momentId, labelId) {
    const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return !!result.length;
  }
  async addLabel(momentId, labelId) {
    const statement = `INSERT INTO moment_label (moment_id,label_id) VALUES (?,?);`;
    const [result] = await connection.execute(statement, [momentId, labelId]);
    return result;
  }
}
module.exports = new MoentService();
