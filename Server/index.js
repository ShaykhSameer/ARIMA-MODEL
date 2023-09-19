const express=require("express");
const app=express();
const cors=require("cors");
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const dotenv=require("dotenv");
const { PythonShell } = require('python-shell');
const { execSync } = require('child_process');
app.use(express.json());
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["GET","POST","DELETE","PUT"],
        credentials:true
    }
));
//accessing the environment variables
dotenv.config();
const userRoute=require('./routes/User')
const loginRoute=require('./routes/login')
const trainingDataRoute=require('./routes/trainingData');
const dashboardRoute=require('./routes/dashboardRouter')
const deleteRoute=require('./routes/deleteRoute')
const getUserRoute=require('./routes/getUserRoute')
const updateUserRoute=require('./routes/updateUserRoute')
const newUserRoute=require('./routes/newUserRoute')
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser:true,useUnifiedTopology:true
}).then(()=>{
    console.log("DB connected")}
).catch((err)=>
{
    console.log(err)
});


///
///
///
function isPackageInstalled(packageName) {
    try {
        execSync(`pip show ${packageName}`);
        return true;
    } catch (err) {
        return false;
    }
}
async function installPackages() {
    const packages = ['pandas', 'matplotlib', 'numpy', 'statsmodels'];
    const missingPackages = packages.filter(pkg => !isPackageInstalled(pkg));

    if (missingPackages.length === 0) {
        console.log('All required packages are already installed.');
        return;
    }

    console.log(`Missing packages: ${missingPackages.join(', ')}`);

    const options = {
        pythonPath: 'C:\Users\Shaykh Sameer\AppData\Local\Programs\Python\Python311\python.exe',
        pythonOptions: ['-m', 'pip', 'install', ...missingPackages],
    };

    console.log('Installing missing packages...');

    try {
        const output = await PythonShell.run('net_pro.py', options);
        console.log('Packages installed successfully!');
    } catch (err) {
        console.error('Error installing packages:', err);
        return;
    }
}
//routes
app.use('/get-trained-data', trainingDataRoute);
app.use(express.json());
app.use('/login',loginRoute);
app.use('/user',userRoute);
app.use('/admin-dashboard',dashboardRoute);
app.use('/deleteUser',deleteRoute)
app.use('/getUser',getUserRoute)
app.use('/updateUser',updateUserRoute)
app.use('/newUser',newUserRoute)
app.listen(3001,()=>
{
console.log("server is running")
});
/////
/////
/////
//////
////
//////
//app.use(cors());
// Check if package is installed

