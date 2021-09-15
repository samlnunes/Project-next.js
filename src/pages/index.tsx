import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";
import Button from "../components/Button";
import Form from "../components/Form";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.empty());
  const [visible, setVisible] = useState<"table" | "form">("table");

  const clientes = [
    new Cliente("Ana", 31, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 23, "3"),
    new Cliente("Samuel", 19, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisible("form");
  }

  function clienteExcluido(cliente: Cliente) {}

  function clienteSave(cliente: Cliente) {
    setVisible("table");
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
    `}
    >
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
