const app = require("./app");
require("env2")(".env");

app.set("port", process.env.PORT || 3030);

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});
