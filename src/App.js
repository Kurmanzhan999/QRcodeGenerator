import React from 'react';
import { useState } from 'react';
import QRCode from 'qrcode';

function App() {
  const [url, setUrl] = useState();
  const [qrCode, setrqrCode] = useState();

  const generateqrCode = () => {
    QRCode.toDataURL(
      url,
      {
        color: {
          dark: '#335383ff',
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setrqrCode(url);
      }
    );
  };
  return (
    <div className="app">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="e.g http://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateqrCode}>Generate</button>
      {qrCode && (
        <>
          <img src={qrCode} alt="qrcode" />
          <a href={qrCode} download="qrcode.png">
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
