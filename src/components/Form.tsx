import React, { useState } from "react";
import Button from "./Button";
import Cliente from "../core/Cliente";
import Input from "./Input";

interface FormProps {
  cliente: Cliente;
  clienteChanged?: (cliente: Cliente) => void;
  canceled?: () => void;
}

const Form: React.FC<FormProps> = ({ cliente, canceled, clienteChanged }) => {
  const id = cliente?.id;
  const [name, setName] = useState(cliente?.name ?? "");
  const [age, setAge] = useState(cliente?.age ?? 0);
  return (
    <div>
      {id ? (
        <Input onlyReading text="Código" value={id} className="mb-5" />
      ) : (
        false
      )}
      <Input text="Nome" value={name} valueChanged={setName} className="mb-5" />
      <Input text="Idade" type="number" value={age} valueChanged={setAge} />
      <div className="flex justify-end mt-7">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => clienteChanged?.(new Cliente(name, age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={canceled} color="gray">
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default Form;
