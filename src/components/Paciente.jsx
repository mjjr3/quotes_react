const Paciente = ({ paciente, setPaciente, deletePatient }) => {
  const { name, recoveryDate, email, symptom, owner, id } = paciente;
  const handleDelete = () => {
    const response = confirm("¿Desea eliminar esta mascota?");
    if (response) deletePatient(id);
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        NOMBRE: {""}
        <span className="font-normal normal-case">{name}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        PROPIETARIO: {""}
        <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        EMAIL: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        FECHA DE ALTA: {""}
        <span className="font-normal normal-case">{recoveryDate}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        SINTOMAS: {""}
        <span className="font-normal normal-case">{symptom}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
