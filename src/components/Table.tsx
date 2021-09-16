import React from "react";
import Cliente from "../core/Cliente";
import { IconEdition, IconTrash } from "./Icons";

interface TableProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

const Table: React.FC<TableProps> = ({
  clientes,
  clienteSelecionado,
  clienteExcluido,
}) => {
  const displayActions = clienteExcluido || clienteSelecionado;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {displayActions ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderData() {
    return clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? `bg-purple-200` : `bg-purple-100`}`}>
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.name}</td>
          <td className="text-left p-4">{cliente.age}</td>
          {displayActions ? renderActions(cliente) : false}
        </tr>
      );
    });
  }

  function renderActions(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {clienteSelecionado ? (
          <button
            onClick={() => clienteSelecionado?.(cliente)}
            className={`flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50`}>
            {IconEdition}
          </button>
        ) : (
          false
        )}

        {clienteExcluido ? (
          <button
            onClick={() => clienteExcluido?.(cliente)}
            className={`flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50`}>
            {IconTrash}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800`}>
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};

export default Table;
