const config = require("./config");
const App = require("./libs/App");
var Ip = require("ip");

App.listen(config.SERVER_PORT, () => {
    console.log("Node server started at "+ Ip.address() + ":" + config.SERVER_PORT);
})
