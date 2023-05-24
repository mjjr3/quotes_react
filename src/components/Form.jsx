import { useState, useEffect } from "react";
import Error from "./Error";
const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [recoveryDate, setRecoveryDate] = useState("");
  const [symptom, setSymptom] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    console.log("form paciente" + JSON.stringify(paciente));
    if (Object.keys(paciente).length > 0) {
      console.log("entra en las keys" + JSON.stringify(paciente));
      console.log(Object.keys(paciente));
      setName(paciente.name);
      setEmail(paciente.email);
      setRecoveryDate(paciente.recoveryDate);
      setOwner(paciente.owner);
      setSymptom(paciente.symptom);
    }
  }, [paciente]);

  const generateID = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, recoveryDate, owner, symptom, email].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const pacienteNuevo = {
      name,
      recoveryDate,
      owner,
      symptom,
      email,
      id: generateID(),
    };

    if (paciente.id) {
      pacienteNuevo.id = paciente.id;

      const updatedPatient = pacientes.map((pacienteState) => {
        return pacienteState.id === pacienteNuevo.id
          ? pacienteNuevo
          : pacienteState;
      });

      setPacientes(updatedPatient);
      setPaciente({});
    } else {
      pacienteNuevo.id = generateID();
      setPacientes([...pacientes, pacienteNuevo]);
    }

    setName("");
    setEmail("");
    setRecoveryDate("");
    setSymptom("");
    setOwner("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border 2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Propietario
          </label>
          <input
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border 2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Email del propietario"
            className="border 2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            value={recoveryDate}
            onChange={(e) => setRecoveryDate(e.target.value)}
            id="alta"
            type="date"
            className="border 2 w-full p-2 mt-2 placeholder-gray-400 rounded-sm"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
          ></textarea>
        </div>
        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
          hover:bg-indigo-700 cursor-pointer transition-colors"
          type="submit"
          value={paciente.id ? "editar paciente" : "agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Form;
