import React from "react";
import { useEffect, useState } from "react";
import useTable from "../hooks/useTable";
import Table from "../components/Table";
import Filters from "../components/Filters";
import filterProduct from "../utils/filterProduct";

const Products = () => {
  let [itemsPerPage, setItemsPerPage] = useState<number>(10);
  let [paginationRangeIndex, setPaginationRangeIndex] = useState<number>(0);
  const { loading, items, filter, pages, setCurrentPage, sort } = useTable("./data/products.json", itemsPerPage);

  //};

  useEffect(() => {
    setPaginationRangeIndex(0);
  }, [itemsPerPage]);

  const displayPage = (e: any): void => {
    setCurrentPage(Number(e.target.value));
  };

  const displayPreviousRange = () => {
    if (paginationRangeIndex >= 5) setPaginationRangeIndex(paginationRangeIndex - 5);
  };

  const displayNextRange = () => {
    if (paginationRangeIndex < pages - 5) setPaginationRangeIndex(paginationRangeIndex + 5);
  };

  const onSort = (column: string) => {};

  return (
    <div>
      {loading && <p>loading...</p>}
      <Filters
        onFilter={(filters) => {
          filter(filterProduct(filters));
          setPaginationRangeIndex(0);
        }}
      />

      {/* `useTable` hook provides `pages`, `currentPage` and `setCurrentPage` handler */}
      {/* todo: use above elements to create a functional pagination system */}

      {/* todo: implement sort feature for each column */}

      <Table
        data={items}
        // add `quantity` column at the end of the table : done
        columns={[
          {
            name: "id",
            description: "#",
            width: 64,
          },
          {
            name: "name",
            description: "Product",
          },
          {
            name: "price",
            description: "Price",
            width: 64,
          },
          {
            name: "quantity",
            description: "Qty",
            width: 64,
          },
        ]}
        onSort={onSort}
      />
      <div className="pagination">
        <div className="pagination-buttons">
          <button className="pagination-button" onClick={displayPreviousRange}>
            &laquo;
          </button>
          {[0, 1, 2, 3, 4].map(
            (value) =>
              pages > value && (
                <button key={`pagination-button-${value}`} className="pagination-button" value={paginationRangeIndex + value} onClick={displayPage}>
                  {paginationRangeIndex + value + 1}
                </button>
              )
          )}
          <button className="pagination-button" onClick={displayNextRange}>
            &raquo;
          </button>
        </div>
        <div className="items-per-page">
          <span>Items per page</span>
          <select id="select-items-per-page" onChange={(e) => setItemsPerPage(Number(e.target.value))}>
            {[10, 20, 30, 40, 50].map((value) => (
              <option key={`items-per-page-select-option-${value}`} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Products);
