import QrScanner from "react-qr-scanner"

interface QRCodeScannerProps {
  onScan: (data: string | null) => void;
}

function QRCodeScanner({ onScan }: QRCodeScannerProps) {
  const handleScan = (data: { text: string } | null) => {
    if (data) onScan(data.text)
  }
  const handleError = (err: any) => {
    console.error(err)
  }
  const previewStye = {
    width: '100%',
    height: 240,
    borderRadius: '10px',
    marginTop: '20px',
  }
  const constraints = {
    video: {
      facingMode: { ideal: 'environment' }
    }
  };
  return (
    <QrScanner delay={300} className="max-w-80 w-full overflow-hidden h-60 mt-4 rounded-xl" onError={handleError} onScan={handleScan} constraints={constraints} />
  )
}

export default QRCodeScanner
