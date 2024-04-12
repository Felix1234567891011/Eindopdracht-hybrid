"use client";
import { useState, useEffect } from "react";
import "./globals.css";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    const res = await fetch("/api/photos");
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    getImages();
  }, []);

  const handleImageClick = (imageSrc: string) => {
    console.log("handleImageClick");
    setSelectedImage(imageSrc);
  };

  const handleCloseClick = () => {
    console.log("handleCloseClick");
    setSelectedImage(null);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    const fileInput = document.getElementById("image") as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      console.log(file);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "jlhjp4lf");
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dyxdzygtq/image/upload", 
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();

        const uploadImage = await fetch("/api/photos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imagePath: data.secure_url,
          }),
        });

        const uploadImageData = await uploadImage.json();

        console.log(uploadImageData);
        getImages();
        fileInput.value = "";
        setLoading(false);
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/photos?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      getImages();
    } catch (err) {
      alert(err);
    }
  };

  const renderImage = (imageData: any, index: number) => {
    console.log(imageData);
    return (
      <div className="image-con" key={index}>
        <img
          src={imageData.imagePath}
          alt=""
          onClick={() => handleImageClick(imageData.imagePath)}
        />
        <button
          className="delete-button"
          onClick={() => handleDelete(imageData._id)}
        >
          Verwijder{" "}
        </button>
      </div>
    );
  };

  return (
    <div>
      <section className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input type="file" id="image" />
          <button type="submit">Upload</button>
        </form>
      </section>

      {loading && <div>Laden...</div>}
      {selectedImage && (
        <div className="view-image" onClick={handleCloseClick}>
          <img src={selectedImage} alt="Selected" />
          <span>X</span>
        </div>
      )}

      <div className="image-container">{images.map(renderImage)}</div>
    </div>
  );
};

export default Gallery;
