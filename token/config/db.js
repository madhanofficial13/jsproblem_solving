import mongoose, { connection } from "mongoose";

const connectDB =async () => {
    const connect = await mongoose.connect("bvdclygg.KJBasuig.skjg;ehp877r3ykfkbb");
    console.log(`${connect.connection.host}`);
    
} 

export default connectDB;