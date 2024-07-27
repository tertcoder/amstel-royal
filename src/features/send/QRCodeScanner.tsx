import QrScanner from "react-qr-scanner";

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
    <QrScanner
      delay={300}
      className="qr-scanner-preview max-[480px]:h-48 max-w-80 w-full h-60 mt-4 rounded-xl"
      onError={onError || console.error} // Default error handler if not provided
      onScan={handleScan}
      constraints={constraints}
    />
  );
}

export default QRCodeScanner;