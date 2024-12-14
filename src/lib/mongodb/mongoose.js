import mongoose from 'mongoose'

let intialized = false;

export const connect = async()=>{
    mongoose.set('strictQuery',true);

    if(intialized){
        console.log('MongoDB already connected');
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName:'estax',
            useNewURlParser:true,
            useUnifiedTopology:true,
        });
        intialized=true;
        console.log('MongoDB connected');
    }catch(error){
        console.log('MongoDB connection error',error);
    }
};