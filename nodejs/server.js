const config = require("./config/config.json");
const App = require("./libs/App");
var Ip = require("ip");
App.listen(config.server_port, () => {
    console.log("Node server started at "+ Ip.address() + ":" + config.server_port);
})
