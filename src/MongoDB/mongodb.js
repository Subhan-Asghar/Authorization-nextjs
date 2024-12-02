import mongoose from "mongoose";

const connect=async()=>{
    if(mongoose.connections[0].readyState){
        return;
    }
    try{
        mongoose.connect('mongodb://127.0.0.1:27017/auth')
        .then(() => console.log('Connected!'));
      }
    
    catch(err){
        console.log('Error',err)
    }
}

  

export default connect;