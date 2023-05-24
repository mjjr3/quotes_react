import { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPacientes(patientsLS);
    };
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(pacientes));
  }, [pacientes]);

  const deletePatient = (id) => {
    const updatedPatients = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(updatedPatients);
    setPaciente({});
  };
  return (
    <div className="container mx-auto mt-20">
      <Header></Header>
      <div className="md:flex mt-12">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        ></Form>
        <PatientList
          pacientes={pacientes}
          setPaciente={setPaciente}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
