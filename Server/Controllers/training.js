const { PythonShell } = require('python-shell');
const { execSync } = require('child_process');
async function runPythonScript() {
    const options2 = {
        args: [],
    };
    try {
        const output = await PythonShell.run('net_pro.py', options2);
        return output;
        //console.log('Response: ', data_to_send);
    } catch (err) {
        console.error('Error:', err);
    }
}
 async function training(req,res)
    {
        try {
            const trainedData = await runPythonScript();
        //console.log(imageData)
        console.log(trainedData);
            res.send(trainedData);
         // Send the image data as the response
        } catch (error) {
            res.status(500).send('An error occurred');
        }
    }
    module.exports={training,};
