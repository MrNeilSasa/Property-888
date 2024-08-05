"use client";
import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import "../globals.css";

import Image from "next/image";

const SubmitHotelView = () => {
  const [hotelImage, setHotelImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    url: "",
  });
  const [errorMessage, setErrorMessage] = useState([]);
  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const onImageDrop = (acceptedFiles) => {
    setHotelImage(acceptedFiles[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();
      const formDataMain = new FormData();
      let errors = [];

      const title = formData.title;
      const price = formData.price;
      const url = formData.url;

      const regexPrice = /^(0|[1-9]\d*)(?:\.\d{1,2})?$/;

      if (!title || title.trim() === "") {
        errors.push("Error in Title Field - this field is required");
      }

      if (!price || price.trim() === "") {
        errors.push("Error in Price field - this field is required");
      } else if (!regexPrice.test(price)) {
        errors.push(
          "Error in Price - must be a number with at most 2 decimal places"
        );
      }

      if (!url || url.trim() === "") {
        errors.push("Error in External URL Field - this field is required");
      }

      if (errors.length > 0) {
        setErrorMessage(errors);
        return;
      }

      formDataMain.append("title", title);
      formDataMain.append("price", price);
      formDataMain.append("url", url);

      if (hotelImage) {
        formDataMain.append("images", hotelImage);
        console.log("Hotel Image ", [...formDataMain.entries()]);
      }
      console.log("FORM DATA: ", formDataMain.images);
      const response = axios.post(
        "http://localhost:3000/api/uploadHotel",
        formDataMain
      );

      if (response.status === 200) {
        window.location.href = "/";
      } else {
        console.error("Error uploading Hotel:", response);
      }
    } catch (error) {
      console.error("Error uploading hotel:", error);
    }
  };

  const { getRootProps: getImageRootProps, getInputProps: getImageInputProps } =
    useDropzone({
      accept: "image/jpg image/png image/jpeg",
      onDrop: onImageDrop,
    });

  return (
    <div>
      <form encType="multipart/form-data" method="post">
        <h1>Submit Hotel</h1>
        {errorMessage.length > 0 && (
          <div className="alert alert-danger">
            {errorMessage.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            className="field"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Price:
          </label>
          <input
            className="field"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            External URL to hotel:
          </label>
          <input
            className="field"
            type="text"
            id="url"
            name="url"
            value={formData.url}
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <div
            {...getImageRootProps()}
            style={{
              border: "2px dashed #eee",
              padding: "20px",
              margin: "20px 0",
            }}
          >
            <label htmlFor="images" className="form-label">
              Image:
            </label>
            <input
              type="file"
              required
              {...getImageInputProps({ name: "images" })}
            />
            <p>Drag & drop or click to select a main image</p>
          </div>
          {hotelImage && (
            <div>
              <img
                src={URL.createObjectURL(hotelImage)}
                alt="Hotel Img"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
            </div>
          )}
        </div>

        <button className="submitBtn" type="button" onClick={handleUpload}>
          Submit Property
        </button>
      </form>
    </div>
  );
};

export default SubmitHotelView;
