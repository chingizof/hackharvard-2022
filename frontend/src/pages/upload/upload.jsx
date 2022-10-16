import React from "react";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
export const Upload = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <div>
      <div className="text-holder">
        <span>Upload your image here!</span>
      </div>
      <div className="upload">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={["jpg"]}
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <button onClick={onImageUpload} {...dragProps}>
                Upload here
              </button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img className="image" src={image.data_url} alt="" width="300" height="300" style={{borderRadius:"50%", background:"red"}}/>
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </div>
  );
};
