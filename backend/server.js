import app from "./app.js";
import cloudinary from "cloudinary";
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});

//tiMs7TzBVmO3KGiy             tiMs7TzBVmO3KGiy
//tanyasingh302003 :username
//mongodb+srv://tanyasingh302003:tiMs7TzBVmO3KGiy@cluster0.9fx7vuv.mongodb.net/?retryWrites=true&w=majority
//HOSPITALMANAGEMENTSYSTEM : Cloudinaryy
//627836538122772 :- API KEY
//KGl8RFHTlhHKg3D7f0w4mp0qP7Y :-API SECRET
