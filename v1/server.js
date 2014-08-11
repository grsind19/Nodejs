/*var http=require('http');
http.createServer(function(req,res){
	res.writeHead(200);
	req.on('data',function(data){
		res.write(data)
	});
	req.on('end',function(data){
		res.end(data)
	});
}).listen(3000);
console.log("server started successfully");*/
/*File server*/

/*var fs=require('fs');
fs.mkdir('./hello',0777,function(err){
if(err) throw err
	fs.writeFile('./hello/message.txt','Hi seetha',function(err){
		if(err) throw err;
		fs.readFile('./hello/message.txt','UTF-8',function(err,contents){
			if(err) throw err;
			console.log(contents);
		});
	});
});*/
/*File information*/

/*var fs=require('fs');
fs.readdir('/seetha/',function(err,files){
	if(err) throw err;
	files.forEach(function(file){
		fs.stat('/seetha/'+file,function(err,stats)
		{
			if(err) throw err;
			if(stats.isFile()){
				console.log("%s is file",file);
			}else if(stats.isDirectory()){
				console.log("%s is directory",file);
			}
			console.log('stats :',JSON.stringify(stats));
		});
	});
});*/

/*File Watching*/
/*var fs=require('fs');
fs.watchFile('./hello/checkdata.txt',function(curr,prev){
	console.log("Current mtime is : "+curr.mtime);
	console.log("Previous mtime is : "+prev.mtime);
});*/

/*File writing*/
/*var fs=require('fs');
fs.writeFile('./hello/checkdata.txt','changed',function(err){
	if(err) throw err;
	console.log("file write complted")
})*/