import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({

  imagePath: String,
});

export default mongoose.models.Photos || mongoose.model("Photos", photoSchema);
