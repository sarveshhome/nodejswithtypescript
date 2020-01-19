import express from 'express';
import {Employee} from './employee';
//Create a new express application instance
const app: express.Application = express();
//define port number
const port = 3001;

//
function getEmployee(){
    let emp = new Employee();
    emp.Id = "001";
    emp.Name = "sarvesh";
    emp.JobTitle ='Software developer'
    return emp;
  }





//routing 
app.get('/', function (req, res) {
    res.send('Application run');
  });
  
app.get('/employee',function(req,res){
    res.send(getEmployee());
})  





//configuration server
app.listen(port,err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`app listening on port http://localhost:`+port);
})