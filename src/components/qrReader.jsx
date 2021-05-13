import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import styles from "./qrReader.module.css"


class qrReader extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: '',
      source: {},
    }
   

    this.handleScan = this.handleScan.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
    
  }

  componentDidMount(){
      console.log(this.props);
  }

  handleScan(result){
      console.log(result);
    if(result){
        const data =  JSON.parse(result);
      this.setState({ result: data })
    }
  }

  handleError(err){
    console.error(err)
  }


  openImageDialog() {
    //   console.log(this.qrReader);
    //   console.log(this.openImageDialog);
    this.refs.qrReader1.openImageDialog()
  }

  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
        <>
        <div className={styles.qrReader}>
            <div className={styles.qrBox}>
                <QrReader
                ref="qrReader1"
                delay={this.state.delay}
                className={styles.previewStyle}
                onError={this.handleError}
                onScan={this.handleScan}
                legacyMode
                />

                <input type="button" value="Submit QR Code" onClick={this.openImageDialog} />
            </div>
            {this.state.result && (
                <div className={styles.qrOutput}>
                        
                        <>
                            <p><b>Имя:</b>  {this.state.result.name}</p>
                            <p><b>Ивент:</b> {this.state.result.event}</p>
                            <p><b>Статус:</b> {this.state.result.payment_status}</p>
                            <p><b>Оплата:</b> {this.state.result.payment_details}</p>
                        </>
                
                </div>
            )}
        </div>


        
      </>
    )
  }
}

export default qrReader;