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
          <th>Código</th>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </table>
    </>
  );
};

export default Table;
