import React,{useState} from 'react';
import axios from 'axios';

export const Fileupload = (props) => {

    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
        props.setfilenname(fileName);
      };
      const uploadFile = async (e) => {



        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res = await axios.post(
            "http://localhost:3003/upload",
            formData
          );
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
      };
  return (
    <div>
    <input type="file" onChange={saveFile} />
    <button onClick={uploadFile}>Upload</button>


    
    </div>
  )
}
