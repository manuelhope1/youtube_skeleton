import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import UniCard from "./UniCard";
const UniList = () => {
  const [universities, setAllUni] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  const slicedUni = universities.slice(startIndex, endIndex);
  const totalPages = Math.ceil(universities.length / 5);
  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const pageNumbers = [];
  if (totalPages <= 3) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else if (currentPage <= 2) {
    pageNumbers.push(1, 2, 3);
  } else if (currentPage >= totalPages - 1) {
    pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
  } else {
    pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
  }

  useEffect(() => {
    const savedUni = localStorage.getItem("alluni");
    if (savedUni) {
      const saved = JSON.parse(savedUni);
      setAllUni(saved);
    } else {
      fetch("http://universities.hipolabs.com/search?country=ghana")
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("alluni", JSON.stringify(data));
          console.log(data);
          setAllUni(data);
        })
        .catch((error) => {
          console.error("Error when fetching data", error);
        });
    }
  }, []);

  return (
    <div
      style={{
        padding: "0 5px",
      }}>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
        GHANAIAN UNIVERSITIES
      </h3>
      <Row>
        {" "}
        {slicedUni.map((uni, index) => {
          return <UniCard key={index} uni={uni} />;
        })}
      </Row>
      <div className="pag-box">
        <button
          onClick={() => changePage(1)}
          disabled={currentPage === 1}
          className="page-icons">
          <FaAngleDoubleLeft />
        </button>
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-icons">
          <FaAngleLeft />
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => changePage(pageNumber)}
            className={pageNumber === currentPage ? "active" : ""}>
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-icons">
          <FaAngleRight />
        </button>
        <button
          onClick={() => changePage(totalPages)}
          disabled={currentPage === totalPages}
          className="page-icons">
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default UniList;
