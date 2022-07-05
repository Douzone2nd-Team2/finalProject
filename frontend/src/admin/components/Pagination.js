import React, { useState } from 'react';
import styled from 'styled-components';

// import { PaginationBox } from '../styles/Pagination';
import Pagination from 'react-js-pagination';

const Paginations = (props) => {
  //   const pageNumbers = [];
  //   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = props.postsPerPage;
  const totalRecords = props.totalPosts;

  const pageRange = 3;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    props.onChangepage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="page-pagination">
        <Pagination
          prevPageText="Prev"
          nextPageText="Next"
          firstPAgeText="First"
          lastPageText="Last"
          activePage={currentPage}
          itemsCountPerPage={recordPerPage}
          totalItemsCount={totalRecords}
          pageRangeDisplayed={pageRange}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Paginations;
