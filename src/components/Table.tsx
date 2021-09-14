import React from "react";
import Cliente from "../core/Cliente";

interface TableProps {
  clientes: Cliente[];
}

const Table: React.FC<TableProps> = ({ clientes }) => {
  return (
    <>
      <table>
        <tr>
          <th></th>
        </tr>
      </table>
    </>
  );
};

export default Table;
