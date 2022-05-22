import React from "react";

import { Dict, TableProps } from "../types";

const Table = ({ columns, data, onSort }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.name}>
              {column.description}
              {/* <span onClick={onSort}> ↓↑</span> */}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: Dict) => {
          // fix warnings : done
          return (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={`prod--${item["id"]}--${column.name}`} width={column.width}>
                  {item[column.name]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(Table);
