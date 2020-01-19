"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_1 = require("./employee");
//Create a new express application instance
const app = express_1.default();
//define port number
const port = 3001;
//
function getEmployee() {
    let emp = new employee_1.Employee();
    emp.Id = "001";
    emp.Name = "sarvesh";
    emp.JobTitle = 'Software developer';
    return emp;
}
//routing 
app.get('/', function (req, res) {
    res.send('Application run');
});
app.get('/employee', function (req, res) {
    res.send(getEmployee());
});
//configuration server
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`app listening on port http://localhost:` + port);
});
//# sourceMappingURL=app.js.map