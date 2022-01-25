import './modal.css';
import imgLink from './link.png';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function BSModal({ linkToShare, showModal = false }) {
  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function shareModal(url = linkToShare) {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: "Share this link so they can follow you",
        url: url
      })
      .then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
    }
  }

  return (
    <>
      <button className="btn-open-modal" onClick={handleShow}>
        <img src={imgLink} alt='link to share'></img>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-secondary">Share this link so they can follow you</Modal.Title>
        </Modal.Header>
        <Modal.Body><code id="link-to-share">{linkToShare}</code></Modal.Body>
        <Modal.Footer>
          <Button id="btn-copy-to-clipboard" variant="primary" onClick={() => {shareModal(); handleClose();}}>
            Share link
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BSModal;
