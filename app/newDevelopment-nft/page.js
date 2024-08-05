"use client";
import React from "react";
import { useState } from "react";

const Nft = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/uploadNFT", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      alert("File uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("File upload failed");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload Contract</button>
      </form>
    </div>
  );
};

export default Nft;
