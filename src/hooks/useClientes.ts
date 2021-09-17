import React, { useState, useEffect } from "react";
import Cliente from "../core/Cliente";
import CollectionCliente from "../data/db/CollectionCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTableOrForm from "./useTableOrForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new CollectionCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.empty());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const { displayForm, displayTable, tableVisible } = useTableOrForm();

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clientes) => {
      setClientes(clientes);
      displayTable();
    });
  }

  function selectCliente(cliente: Cliente) {
    setCliente(cliente);
    displayForm();
  }

  async function deleteCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    getAll();
  }

  async function saveCliente(cliente: Cliente) {
    await repo.save(cliente);
    getAll();
  }

  function newCliente() {
    setCliente(Cliente.empty());
    displayForm();
  }

  return {
    cliente,
    clientes,
    tableVisible,
    displayTable,
    deleteCliente,
    saveCliente,
    newCliente,
    selectCliente,
    getAll,
  };
}
