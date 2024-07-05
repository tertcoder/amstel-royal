declare module 'react-qr-scanner' {
  import { Component } from 'react';

  interface QrScannerProps {
    delay?: number;
    onError?: (error: any) => void;
    onScan?: (data: { text: string } | null) => void;
    style?: React.CSSProperties;
  }

  class QrScanner extends Component<QrScannerProps> {}

  export default QrScanner;
}
