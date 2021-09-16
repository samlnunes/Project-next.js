import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";
import Button from "../components/Button";
import Form from "../components/Form";
import ClienteRepositorio from "../core/ClienteRepositorio";
import CollectionCliente from "../data/db/CollectionCliente";
import { useState, useEffect } from "react";

export default function Home() {
  const repo: ClienteRepositorio = new CollectionCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.empty());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visible, setVisible] = useState<"table" | "form">("table");

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then(clientes => {
      setClientes(clientes);
      setVisible("table");
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisible("form");
  }

  function clienteExcluido(cliente: Cliente) {}

  async function clienteSave(cliente: Cliente) {
    await repo.save(cliente);
    getAll();
  }

  function clienteNew() {
    setCliente(Cliente.empty());
    setVisible("form");
  }

  return (
    <div
      className={`flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visible === "table" ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={clienteNew}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Form
            cliente={cliente}
            clienteChanged={clienteSave}
            canceled={() => setVisible("table")}
          />
        )}
      </Layout>
    </div>
  );
}
