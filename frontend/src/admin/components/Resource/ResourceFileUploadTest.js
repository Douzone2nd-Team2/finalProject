import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../../../user/utils/cookie';

const ResourceFileUploadTest = () => {
  const [imgFile, setImgFile] = useState([]); //파일
  const [formData, setFormData] = useState(new FormData());
  useEffect(() => {
    console.log('hello!!');
  }, []);

  useEffect(() => {
    if (imgFile.length > 0) {
      const d = new FormData();
      for (let i = 0; i < imgFile.length; i++) {
        d.append('file', imgFile[i]);
      }

      setFormData(d);
    }
  }, [imgFile]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleChangeFile = (event) => {
    setImgFile(event.target.files);
    console.log('핸들체인지');
  };
  const postTest = () => {
    console.log('postTest시작해');
    console.log(formData);
    const result = axios
      .post(
        `${process.env.REACT_APP_SERVER_PORT}/resource/fileupload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  };

  const handleSubmit = () => {
    postTest();
  };

  return (
    <div>
      <input
        type="file"
        id="file"
        multiple
        name="image"
        onChange={handleChangeFile}
      />
      <button onClick={handleSubmit}>upload</button>
    </div>
  );
};

export default ResourceFileUploadTest;
