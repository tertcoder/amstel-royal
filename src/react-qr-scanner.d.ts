declare module 'react-qr-scanner' {
  import { Component } from 'react';

  interface QrScannerProps {
    delay?: number;
    onError?: (error: any) => void;
    onScan?: (data: { text: string } | null) => void;
    className?:string;
    constraints?: MediaStreamConstraints; 
  }

  class QrScanner extends Component<QrScannerProps> {}

  export default QrScanner;
}
