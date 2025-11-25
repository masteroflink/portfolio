import React, { useState } from "react";
import "./DownloadModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileDownload,
  faCloudArrowDown,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const DownloadModal = () => {
  const [downloadModal, setDownloadModal] = useState(false);

  const toggleDownloadModal = () => {
    setDownloadModal(!downloadModal);
  };

  const fileName = "bruce_bruno_f_resume.pdf";
  const pdfUrl = `${process.env.PUBLIC_URL}/${fileName}`;

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const previewFile = () => {
    window.open(pdfUrl, "_blank");
  };

  if (downloadModal) {
    document.body.classList.add("active-download-modal");
  } else {
    document.body.classList.remove("active-download-modal");
  }

  return (
    <>
      <FontAwesomeIcon
        icon={faFileDownload}
        size="xl"
        onClick={toggleDownloadModal}
        className="btn-download-modal"
      />
      {downloadModal && (
        <div className="download-modal">
          <div onClick={toggleDownloadModal} className="overlay"></div>
          <div className="download-modal-content">
            <h2>File Download</h2>
            <ul className="file-list">
              <li className="file-item">
                <span className="file-name">Resume</span>
                <div className="file-actions">
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={previewFile}
                    className="file-preview"
                    title="Preview"
                  />
                  <FontAwesomeIcon
                    icon={faCloudArrowDown}
                    onClick={downloadFile}
                    className="file-download"
                    title="Download"
                  />
                </div>
              </li>
            </ul>

            <button
              className="close-download-modal"
              onClick={toggleDownloadModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DownloadModal;
