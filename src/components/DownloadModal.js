import React, { useState } from 'react';
import './DownloadModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons"

console.log(`public url: ${process.env.PUBLIC_URL}`)

const DownloadModal = () => {
    const [downloadModal, setDownloadModal] = useState(false);

    const toggleDownloadModal = () => {
        setDownloadModal(!downloadModal);
    }

    const downloadFile = () => {
        const fileName = 'bruce_bruno_f_resume.pdf'
        console.log('start download file.');

        const pdfUrl = `${process.env.PUBLIC_URL}/${fileName}`;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = fileName; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log(`file: ${fileName} successfully downloaded.`)
    }

    if (downloadModal) {
        document.body.classList.add('active-download-modal')
    } else {
        document.body.classList.remove('active-download-modal')
    }

    return (
        <>
            <FontAwesomeIcon icon={faFileDownload} size='xl' onClick={toggleDownloadModal} className='btn-download-modal' />
            {downloadModal && (
                <div className="download-modal">
                    <div onClick={toggleDownloadModal} className="overlay"></div>
                    <div className="download-modal-content">
                        <h2>File Download</h2>
                        <ul className='file-list'>
                            <div className='file-item'>
                                <div>Resume</div>
                                <FontAwesomeIcon icon={faCloudArrowDown} onClick={downloadFile} className='file-download'></FontAwesomeIcon>
                            </div>
                        </ul>

                        <button className="close-download-modal" onClick={toggleDownloadModal}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default DownloadModal;
