import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Aye_Myint_Htet_CV_FORM1.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { FaHandPointRight } from "react-icons/fa";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [page,setPage] = useState(1)
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row style={{ justifyContent: "space-between", position: "relative" }}>
          <Button
          disabled={page===1 ? true : false}
          style={{ maxWidth: "250px", transform:'rotate(180deg)'}}
          onClick={()=> setPage((prev)=>prev - 1)}
          >
            <FaHandPointRight/>
          </Button>
          
          <Button
          disabled={page === 4 ? true: false}
            style={{ maxWidth: "250px" }}
          onClick={()=> setPage((prev)=>prev + 1)}
          >
            <FaHandPointRight />
          </Button>
        </Row>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={3} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={4} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}
         <Row style={{ justifyContent: "space-between", position: "relative" }}>
          <Button
          disabled={page===1 ? true : false}
          style={{ maxWidth: "250px", transform:'rotate(180deg)'}}
          onClick={()=> [window.scrollTo(0,0),setPage((prev)=>prev - 1)]}
          >
            <FaHandPointRight/>
          </Button>
          <Button
          disabled={page === 4 ? true: false}
            style={{ maxWidth: "250px" }}
          onClick={()=> [window.scrollTo(0,0),setPage((prev)=>prev + 1)]}
          >
            <FaHandPointRight />
          </Button>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
