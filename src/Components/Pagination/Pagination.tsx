import React, { useMemo, useState } from 'react';
import { currentPageNumber, totalPagesAvailable } from '../../Variables/GlobalState';
import { useAtom } from 'jotai';
import './Pagination.css';
import { totalPaginationButton } from '../../constant';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useAtom(currentPageNumber); 
  const [totalPages] = useAtom(totalPagesAvailable);
  const [startButton, setStartButton] = useState(1);

  const endButton = useMemo(() => {
    return startButton + totalPaginationButton <= totalPages ? startButton + totalPaginationButton : totalPages;
  }, [startButton, totalPages]);

  const handlePageChange = (newPage: number) => {
    let newStartButton = startButton;

    if (newPage < startButton) {
      newStartButton = Math.max(1, newPage - 5);
    } else if (newPage > endButton) {
      newStartButton = endButton;
    }

    setStartButton(newStartButton);
    setCurrentPage(newPage);
  };

  const pageNumbers = useMemo(() => {
    const numbers = [];
    for (let i = startButton; i <= endButton; i++) {
      numbers.push(
        <li key={i} className={i === currentPage ? 'active' : ''}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return numbers;
  }, [startButton, endButton, currentPage]);

  return (
    <div className="pagination">
      <ul>
        <li>
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
        </li>
        {pageNumbers}
        <li>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
