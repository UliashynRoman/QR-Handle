import React, {useState, useRef} from 'react';
import QRCode from 'qrcode.react';

import styles from "./qrReader.module.css"

function Generator() {
    const myRef = useRef(null);

    const [qr, setQr] = useState('electroperedachi');
    const [value, setValue] = useState(`{
        "name": "Roman Uliashyn",
        "event": "2021 - Ship Trip",
        "payment_status": "paid",
        "payment_details": "400 uah"
    }`);
    
    const handleChange = (event) => {
        setQr(event.target.value);
    };

    const downloadQR = () => {
        const canvas = document.getElementById("canvas");
        const url = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        link.download = `Client QR - ${date}.png`;
        link.href = url;
        link.click();
    };

    return (
           <div className={styles.qrReader}>
            <div className={styles.qrBox}>
                <QRCode
                    id="canvas"
                    type="image"
                    size={180}
                    className={styles.previewStyle}
                    includeMargin={true}
                    value={value}
                    ref={myRef}
                />
                <input type="button" value="Download QR" onClick={downloadQR} />
            </div>
            
            {/* Create inside of div element, the form */}
            {/* <div className={styles.qrOutput}>
            </div> */}
        </div>           
    );
  }
  
  export default Generator;