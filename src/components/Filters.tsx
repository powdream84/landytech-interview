import React, { useCallback, useState } from "react";
import { Dict, FilterProps } from "../types";

const Filters = ({ onFilter }: FilterProps) => {
  const [filters, setFilters] = useState<Dict>({});

  const getValue = useCallback(
    (name: string): any => {
      return filters[name] || "";
    },
    [filters]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setFilters({
        ...filters,
        [event.target.name]: event.target.value,
      });
    },
    [filters, setFilters]
  );

  const handleFilter = useCallback(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  const handleClear = useCallback(() => {
    setFilters({});
    onFilter({});
  }, [setFilters, onFilter]);

  // name and price fields are broken, to fix : done

  return (
    <div className="filters">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="number" name="price" placeholder="Price" value={getValue("price")} onChange={handleChange} />
      <input type="number" name="quantity" placeholder="Quantity" value={getValue("quantity")} onChange={handleChange} />

      <button onClick={handleFilter}>Filter</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Filters;
