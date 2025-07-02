const labelService = require("../service/label.service");
const verifyLabelExist = async (ctx, next) => {
  const { labels } = ctx.request.body;
  const newLabels = [];
  for (const name of labels) {
    const label = await labelService.queryLabelByName(name);
    const labelObj = { name };
    if (label.length) {
      labelObj.id = label[0].id;
    } else {
      const result = await labelService.create(name);
      labelObj.id = result.insertId;
    }
    newLabels.push(labelObj);
  }
  ctx.labels = newLabels;
  await next();
};

module.exports = {
  verifyLabelExist,
};
