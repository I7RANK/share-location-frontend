import './modal.css';
import imgLink from './link.png';
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function BSModal({ linkToShare, showModal = true }) {
  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function copyToClipboard() {
    const copyText = document.getElementById("link-to-share");
    const btn = document.getElementById("btn-copy-to-clipboard");

    navigator.clipboard.writeText(copyText.textContent);
    btn.textContent = 'Copied!';
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
          <Button id="btn-copy-to-clipboard" variant="primary" onClick={copyToClipboard}>
            copy
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BSModal;
