import React, { useState } from "react";
import "../style/PreviewPdf.css";


function FilePreview() {
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  return (
    <div className="container">
    {/* L'input è nascosto */}
    <input type="file" id="file-input" className="file-input" onChange={handleFileChange} style={{display: 'none'}} />
    {/* Label agisce come un bottone */}
    <label htmlFor="file-input" className="custom-file-input">Carica il tuo file</label>
    {fileUrl && (
        <div className="preview">
            <p>Anteprima del file:</p>
            {fileUrl.match(/\.(jpeg|jpg|gif|png)$/) != null ? (
                <img src={fileUrl} alt="Preview" />
            ) : (
                <iframe src={fileUrl} title="File preview"></iframe>
            )}
        </div>
    )}
</div>
  );
}

export default FilePreview;
