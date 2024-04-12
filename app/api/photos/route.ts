import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Photos from "@/db/photos";

export async function GET() {
  await mongoose.connect(
    process.env.DB_URL || "mongodb://localhost:27017/PhotoGallery"
  );
  const photos = await Photos.find();

  return NextResponse.json(photos);
}


export async function POST(request: Request) {
  console.log("Post request aangevraagd");
  try {
    await mongoose.connect(
      process.env.DB_URL || "mongodb://localhost:27017/PhotoGallery"
    );

    const data = await request.json();
    const { imagePath } = data;

    await Photos.create({ imagePath });
    return NextResponse.json({ message: "Foto succesvol toegevoegd" });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  try {
    await mongoose.connect(
      process.env.DB_URL || "mongodb://localhost:27017/PhotoGallery"
    );

    const id = searchParams.get("id");
    await Photos.findByIdAndDelete(id);
    return NextResponse.json({ message: "Foto succesvol verwijderd" });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
