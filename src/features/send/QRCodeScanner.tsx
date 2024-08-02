import QrScanner from "react-qr-scanner";
import './Scanner.scss';

interface QRCodeScannerProps {
  onScan: (data: string) => void;
  onError?: (error: unknown) => void; // Optional error handler
}

function QRCodeScanner({ onScan, onError }: QRCodeScannerProps) {
  const handleScan = (data: { text: string } | null) => {
    if (data) {
      onScan(data.text);
    }
  };

  const constraints = {
    video: {
      facingMode: { ideal: 'environment' },
    },
  };

  return (
    <div className="videoWrapper">
    <QrScanner
      delay={300}
      className="qrVideo"
      onError={onError || console.error} // Default error handler if not provided
      onScan={handleScan}
      constraints={constraints}
    />
    </div>
  );
}

export default QRCodeScanner;