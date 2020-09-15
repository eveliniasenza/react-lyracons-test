import React from 'react';
import './Pagination.css';

export const Pagination = ({page, setPage, totalPages}) => {
  return (
    <div className='pagination'>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item" onClick={() => {
            if (page > 1 || page < totalPages) {
              setPage(page - 1)
            }
          }}>
            <a className="page-link">Previous</a>
          </li>
          { [...Array(totalPages)].map((item, index) => (
            <li
              className="page-item"
              key={index + 1}
              onClick={() => {
                setPage(index + 1)
              }}
            ><a className="page-link" href="#">{ index + 1 }</a></li>
          )) }
          <li className="page-item"  onClick={() => {
            if (page > 1 || page < totalPages) {
              setPage(page + 1)
            }
          }}>
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
