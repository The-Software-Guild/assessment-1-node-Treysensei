import express from 'express';
import bodyParser from 'body-parser';
import router from './items.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/items', router);

app.get('/' , (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

  









































//----------------------------------------------------------------------------------------------------------------------------------------------->
// // const app = express();
// // const path = require('path');
// const PORT = process.env.PORT || 3500;
// const {format} = require('date-fns')
// const {v4: uuid} = require('uuid')

// // app.get('/' , (req, res) => {
// //     res.send('Hello World');
// // }); 
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const fs = require('fs');
// const fsPromises = require('fs').promises;
// const path = require('path');
// const { message } = require('statuses');

// const logEvents = async (message) => {
//   const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
//   const logItem = `${dateTime}\t${uuid}\t${message}`;
//   console.log(logItem);
//   try{
//       await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'),logItem)
//   } catch(err){
//       console.error(err);
//   }
// }

// console.log(format(new Date(), 'yyyMMdd\tHH:mm:ss'));

// console.log(uuid());

