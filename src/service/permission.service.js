const connection = require("../app/database");
class PermissionService {
  async checkResource(tableName, resourceId, userId) {
    const statement = `select * from ${tableName} where id=? and user_id=?`;
    const [result] = await connection.execute(statement, [resourceId, userId]);
    return !!result.length;
  }
}
module.exports = new PermissionService();
