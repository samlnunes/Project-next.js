import { Button, Form, Layout, Table } from "../components";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,
    tableVisible,
    displayTable,
    selectCliente,
    deleteCliente,
    saveCliente,
    newCliente,
  } = useClientes();

  return (
    <div
      className={`flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newCliente}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clientes={clientes}
              clienteSelecionado={selectCliente}
              clienteExcluido={deleteCliente}
            />
          </>
        ) : (
          <Form
            cliente={cliente}
            clienteChanged={saveCliente}
            canceled={displayTable}
          />
        )}
      </Layout>
    </div>
  );
}
