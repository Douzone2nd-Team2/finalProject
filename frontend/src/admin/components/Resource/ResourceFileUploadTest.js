import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ResourceFileUploadTest = () => {
  const [imgFile, setImgFile] = useState([]); //파일
  const [formData, setFormData] = useState(new FormData());

  useEffect(() => {
    if (imgFile.length > 0) {
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('image', imgFile[i]);
      }

      setFormData(d);
    }
  }, [imgFile]);

  const postTest = async () => {
    console.log('postTest시작해');
    console.log(formData);
    const result = await axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/fileupload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .catch((err) => {
        return err;
      });
    return result;
  };

  const handleSubmit = () => {
    postTest();
    console.log('postTest시작');
  };

  const handleChangeFile = useCallback((e) => {
    setImgFile(e.target.files);
    console.log('핸들체인지');
  });

  return (
    <div>
      <input
        type="file"
        id="file"
        multiple
        name="image"
        onChange={handleChangeFile}
      />
      <button
        onClick={(e) => {
          handleSubmit();
          e.preventDefault();
        }}
      >
        upload
      </button>
    </div>
  );
};

export default ResourceFileUploadTest;
