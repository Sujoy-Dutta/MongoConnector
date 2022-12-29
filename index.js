
const mongoose= require("mongoose");



const DATABASE="mongodb://mymongo:27017";

mongoose
.connect(DATABASE)
	.then(()=>{
	console.log("DB Connected!");
	})
	.catch(()=>{
		console.log("Error in DB connection!!");
	});
