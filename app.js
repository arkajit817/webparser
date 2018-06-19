const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const Promise = require("bluebird");
const axios = require("axios");
const base64Img = require('base64-img');
var fs = require('fs');

//const html = require('html');

  var parserApi = 'https://d0ppbtisxc.execute-api.ap-south-1.amazonaws.com/prod/adhr/v1';

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});


function base64Encode(file) {
    var body = fs.readFileSync(file);
    return body.toString('base64');
}
 function getSingleString(stringArray) {
        try {
            var singleString = "";
            stringArray.forEach(function (data, index) {
                if (index == 0) {
                    singleString = data;
                } else {
                    singleString = singleString + " " + data;
                }
            })
            return singleString.replace(/[^A-Za-z0-9]/g, " ");
        } catch (err) {
            return ""; //return empty string if stringArray is not a instanceof Array
        }
    }

    function getDOBString(dobObject) {
        if (typeof dobObject == 'object') {
            if (dobObject.date) {
                return dobObject.date + "/" + dobObject.month + "/" + dobObject.year;
            } else {
                return "";
            }
        }
        return ""; //return empty string if dobObject is not type of object
    }

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
    //console.log(req.file,"req");
    console.log(cb,"cb");
    //var base64String = base64Encode(file);


    //parseDocument(null,file);
  }
}).single('myImage');
//const upload = multer({ dest: 'uploads/' })




 function parseDocument(parserApiUrl, file) {
        console.log("parserApi",parserApi);
        console.log(file,"name");
        console.log(typeof(file));

        console.log("------------------------------------------------");
        console.log(file);
        console.log("------------------------------------------------");
        console.log(file.path);

        
           //var body = fs.readFileSync(file);
           var base64String = base64Encode(file.path);


        return new Promise(function(resolve, reject) {
            axios({
                "method": "post",
                "url": parserApi,
                "data": {
                    "file": base64String // base64 encoded image
                },
                "headers": {
                    "x-api-key": "HEz7ThNf7doNDsM4x71D3Knp1bfYJlu5jp1UunEc"
                }   
            }).then(function (response) {
                 console.log(response,"res");
                console.log("status",response.status);
                console.log("data",response.data);
                var d = response.data;
                resolve(d);
                // if (d && d.data) {
                //     resolve(d);
                // } else {
                //     console.log("emptyResponse");
                //     reject("emptyResponse");
                // }
            }).catch(function (error) {
              console.log(error,"err");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                reject(error)   ;
            });
        });
    }

function checkFileType(file, cb){
  console.log(file,"fi");
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

const app = express();


app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index1'));

app.post('/upload', (req, res) => {
  // console.log(req,"req");
  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index1', {
          msg: 'Error: No File Selected!'
        });
      } else {
        console.log(req.file,"ooo");
        parseDocument(null,req.file).then (function(response){
         // console.log("res",response,"res");

          if(response.data){
            var name,dob,aadharid,gender;
            console.log(response.data,"data");
            if(response.data.name){
            name = getSingleString(response.data.name);
          }
          if(response.data.date_of_birth){
            dob = getDOBString(response.data.date_of_birth);
          }
            console.log(name,"name");
            if(response.data.aadhaar_id){
            console.log(dob,"dob");
            aadharid = response.data.aadhaar_id;
          }
          if(response.data.gender){
            gender = response.data.gender;
          }
            res.render('index2', {
          msg: 'File Uploaded!',
          name : name,
          dob : dob,
          aadharid : aadharid,
          gender : gender,
          file: `uploads/${req.file.filename}`

        });
          } else {
            res.render('index1', {
          msg: 'We are not able to process the uploaded image. Please upload an image that is of a better quality'
        });
          }
          
        })


        .catch(function (err) {
                res.render('index1', {
          msg: 'Failed to parse the document'
        });
            });

        
      }
    }
  });
  //console.log(req.file,"yo");
});


/*app.post('/upload',upload.single('example'),(req,res,next)=>{
   const encoded = req.file.toString('base64')
  console.log(encoded);
});*/
//const port = 3000;
var server_port = process.env.NODEJS_PORT || 3000
var server_ip_address = process.env.NODEJS_IP || '127.0.0.1'

//app.listen(port, () => console.log(`Server started on port ${port}`));
app.listen(server_port,server_ip_address, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port +"env"+process.env.NODE_ENV + "or"+ app.get('env'))
});
