const jwt = require("jsonwebtoken");

const { PRIVATE_KEY, PUBLIC_KEY } = require("../config/screct");
class LoginController {
  sigin(ctx, next) {
    const { id, name } = ctx.user;
    // 颁发token
    const token = jwt.sign({ id, name }, PRIVATE_KEY.toString(), {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    });
    ctx.body = {
      code: 0,
      data: {
        id,
        name,
        token,
      },
    };
  }
}
module.exports = new LoginController();
