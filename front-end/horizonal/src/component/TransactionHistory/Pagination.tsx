import React from "react";

interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => {
  return (
    <nav aria-label="Transaction history pagination">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="visually-hidden">Previous</span>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <span className="page-link">...</span>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            8
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            9
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            10
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="visually-hidden">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
