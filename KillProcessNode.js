//function run_cmd(cmd, args, callBack ) {
    var exec = require('child_process').exec;
function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};
// send SIGHUP to process

execute("dir", function(output){console.log(output);
exec.kill(2);
});
		 
//;