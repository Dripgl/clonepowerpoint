import React, { useState } from 'react';
import "../style/PreviewPdf.css";

function PreviewPdf() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    if (!isDesktop()) {
      alert("Il caricamento dei file è supportato solo da desktop.");
      return;
    }
    // Prende il primo file selezionato
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const isDesktop = () => {
    // Utilizziamo una semplice verifica basata sulla larghezza della finestra
    return window.innerWidth > 800;
  };

  return (
    <div>
      <input type="file" className="button_addpdf" onChange={handleFileChange} />
      {file && <p className='text_file'>File selezionato: {file.name}</p>}
    </div>
  );
}

export default PreviewPdf;
