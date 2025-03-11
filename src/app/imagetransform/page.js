"use client";

import React, { useEffect, useState } from "react";
import fileDownload from "js-file-download";
import axios from "axios";
import { firestore } from "../../../firbase/clientApp";

function ImageDownloadPage({
  imageData,
  title,
  company,
  category,
  field,
  marco,
  rem,
  email,
}) {
  const [transformedImageUrl, setTransformedImageUrl] = useState(null);
  const [displayed, setDisplayed] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // useEffect(() => {

  // }, [transformedImageUrl]);

  useEffect(() => {
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("upload_preset", "iecna_upload_qatar");
      formData.append("file", imageData);

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dmedpnbvc/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        applyTransformations(data.public_id);
      } catch (error) {
        console.error("Error uploading image:", error);
        setErrorMessage(
          "Error uploading image. Please try again. After reloading the page."
        );
      }
    };

    uploadImage();
  }, [imageData]);

  const handleDownload = () => {
    fileDownload(imageData, `${title}.jpg`);
  };

  useEffect(() => {
    if (!displayed) {
      handleDownloadTransformed();
    }
  }, [displayed]);

  const handleDownloadTransformed = () => {
    if (transformedImageUrl) {
      axios
        .get(transformedImageUrl, {
          responseType: "blob",
        })
        .then((res) => {
          fileDownload(res.data, `${title.replace(/\s/g, "")}_transformed.jpg`);
        })
        .catch((error) => {
          console.error("Error downloading transformed image:", error);
        });
    }
  };

  const applyTransformations = (publicId) => {
    const transformationParams = publicId.split("/");
    const overlayParam = transformationParams[1];
    // Construct the URL with the required transformations
    let transformedImageUrl = "";
    let overlaycode = "l_iecna_upload_qatar";

    if (category === "speaker") {
      if (field === "marketer") {
        transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `${overlaycode}:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_352,h_352,x_1,y_15,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_1,y_240/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_1,y_290/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_1,y_330/kchw48lotodk4kqazgnk.jpg`;
      } else {
        transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `${overlaycode}:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_352,h_352,x_1,y_15,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_1,y_240/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_1,y_290/kchw48lotodk4kqazgnk.jpg`;
      }
    }

    if (category === "delegate") {
      if (field === "marketer") {
        transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `${overlaycode}:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_355,h_355,x_326,y_-42,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_326,y_200/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_326,y_245/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_326,y_280/iydzh119vxfkwm10usqo.jpg`;
      } else {
        transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `${overlaycode}:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_355,h_355,x_326,y_-42,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_326,y_200/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_326,y_245/iydzh119vxfkwm10usqo.jpg`;
      }
    }

    if (category === "nomination") {
      if (field === "marketer") {
        transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `${overlaycode}:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_352,h_352,x_-1,y_-45,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_-1,y_330/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_-1,y_380/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_-1,y_420/iy5yygckqnpgyuoes4t5.jpg`;
      } else {
        transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `${overlaycode}:${overlayParam}/fl_layer_apply,ar_1.0,c_thumb,w_352,h_352,x_-1,y_-45,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_42_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_-1,y_330/co_rgb:FFFFFF,l_text:arial_28_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_-1,y_380/iy5yygckqnpgyuoes4t5.jpg`;
      }
    }

    setTransformedImageUrl(transformedImageUrl);
  };

  const handleImageLoad = () => {
    // Call your function here after the image has loaded
    console.log("Transformed image loaded!");
    setDisplayed(false);
    if (transformedImageUrl !== null) {
      const trfRef = firestore.collection("qatar-transformed-images2025");
      trfRef
        .where("trf", "==", rem)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            // Check if no documents with the same trf value exist
            const newTrfRef = trfRef.doc(); // Generate a new document reference
            const trfId = newTrfRef.id;
            console.log(trfId);
            newTrfRef
              .set({
                id: trfId,
                name: title,
                url: transformedImageUrl,
                trf: rem,
                email: email,
              })
              .catch((error) => {
                console.error("Error setting document:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error checking documents:", error);
        });
    } else {
      setErrorMessage(
        "Error loading transformed image. Please try again. After reloading the page."
      );
    }
  };

  return (
    <div className=" relative w-[100%] h-fit  max-h-[30vh] sm:max-h-[70vh] pb-[10vh]  justify-center items-center gap-4">
      {transformedImageUrl && (
        <img
          src={transformedImageUrl}
          alt={title}
          style={displayed ? { display: "none" } : { display: "block" }} // Hide the image
          className={`object-contain w-[100%] max-h-[25vh] h-[60vh] sm:max-h-[60vh]`}
          onLoad={handleImageLoad} // Call handleImageLoad function when the image is loaded
        />
      )}
      {transformedImageUrl && (
        <button
          style={displayed ? { display: "none" } : { display: "block" }} // Hide the button
          onClick={handleDownloadTransformed}
          className="newsletterbtn w-full absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/30 text-white p-2 rounded-md"
        >
          Download Poster
        </button>
      )}

      {displayed && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-2xl">Generating Banner...</p>
        </div>
      )}

      {errorMessage && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-2xl text-red-500">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ImageDownloadPage;
