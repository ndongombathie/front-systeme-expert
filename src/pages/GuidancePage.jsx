import React from "react";
import FiliereSelector from "../components/FiliereSelector";
import NiveauSelector from "../components/NiveauSelector";
import UeEcForm from "../components/UeEcForm";
import ResultatGuidance from "../components/ResultatGuidance";
import SemestreSelector from "../components/SemestreSelector";

export default function GuidancePage() {
  const [filiere, setFiliere] = React.useState("");
  const [niveau, setNiveau] = React.useState("");
  /* const [semestre, setSemestre] = React.useState(""); */
  const [resultat, setResultat] = React.useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Guidance Pédagogique
          </h1>
          <p className="text-gray-600 font-medium">UFR SET</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          <FiliereSelector filiere={filiere} setFiliere={setFiliere} />
          <NiveauSelector niveau={niveau} setNiveau={setNiveau} />
         {/*  <SemestreSelector semestre={semestre} setSemestre={setSemestre} /> */}

          <UeEcForm
            filiere={filiere}
            niveau={niveau}
            setResultat={setResultat}
          />

          <ResultatGuidance resultat={resultat} />
        </div>
      </div>
    </div>
  );
}
