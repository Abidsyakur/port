

const EarthImages = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <img 
        src="./planet/idcard.png" // Ganti dengan path gambar atas Anda
        alt="Earth Top"
        style={{ width: '80%', height: 'auto', marginBottom: '20px' }} // Atur gaya sesuai kebutuhan
      />
        <p style={{ fontSize: '18px', marginTop: '50px' }}>
        Scan the QR code below if you want to see the AR of the ID card.
      </p>
      <img 
        src="./planet/qrcode.png" // Ganti dengan path gambar bawah Anda
        alt="Earth Bottom"
        style={{ width: '50%', height: 'auto', marginTop: '50px'  }} // Atur gaya sesuai kebutuhan
      />
    </div>
  );
};

export default EarthImages;
