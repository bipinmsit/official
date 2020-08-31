import React, { useEffect, useState } from "react"
import axios from 'axios'
import FileDownload from 'js-file-download'

const Stock = () => {
    const inputEvent = () => {
        fetch('https://www1.nseindia.com/products/content/sec_bhavdata_full.csv')
        .then(response => {
            response.blob().then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = 'employees.json';
                a.click();
            });
            //window.location.href = response.url;
    });
    }
    return(
        <>
            <div className="stock">
                <button type="button" className="btn btn-primary bhavcopy" onClick={inputEvent}>Download Bhavcopy</button>
            </div>
        </>
    )
}
export default Stock