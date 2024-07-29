import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    //console.log(process.env.MONGO_URI);  
    await mongoose.connect(process.env.MONGO_URI!, {
      //tlsAllowInvalidCertificates: true 
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  }
};

export default connectDB;
