import styled from 'styled-components';

// const PageUl = styled.ul`
//   /* float: left; */
//   /* display: grid; */
//   place-content: center;
//   list-style: none;
//   text-align: center;
//   border-radius: 3px;
//   color: white;
//   padding: 1px;
//   /* border-top: 3px solid #186ead;
//   border-bottom: 3px solid #186ead; */
//   /* background-color: rgba(0, 0, 0, 0.4); */
// `;

// const PageLi = styled.li`
//   display: inline-block;
//   font-size: 17px;
//   font-weight: 600;
//   padding: 10px;
//   border-radius: 5px;
//   width: 25px;
//   &:hover {
//     cursor: pointer;
//     color: white;
//     /* background-color: #263a6c; */
//   }
//   &:focus::after {
//     color: white;
//     background-color: #263a6c;
//   }
// `;

// const PageSpan = styled.span`
//   padding: auto;
//   &:hover::after,
//   &:focus::after {
//     border-radius: 100%;
//     color: white;
//     background-color: #263a6c;
//   }
// `;

// export { PageUl, PageLi, PageSpan };

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
`;

export { PaginationBox };
