const express =require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require("axios");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
    // res.send('saludando desde el backend')  
    let config = {
        method: "GET",
        maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/6654d656acd3cb34a84e8a93',
        headers: {
          'Content-Type': 'application/json',
          "X-Master-Key": "$2a$10$lfiiYDzk1vjg2IcaxfOffedFhacBbINdoTfd3/IjH1nk8t2UDshZG"
        }
      }
        axios(config)
        .then(result => {
            res.send(result.data.record);
        }
);


})


const user = require('./controller/userController');
app.use("/registro-usuario", user.register);
// app.use('/login', user.login);


const PORT = 3001;
app.listen(PORT,()=>{

    console.log('servidor corriendo en el puerto', PORT);
});