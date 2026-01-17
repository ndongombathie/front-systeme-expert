import React from "react";
import FiliereSelector from "../components/FiliereSelector";
import NiveauSelector from "../components/NiveauSelector";
import UeEcForm from "../components/UeEcForm";
import ResultatGuidance from "../components/ResultatGuidance";
import SemestreSelector from "../components/SemestreSelector";
import logoSetGuide from "../assets/set-guide-logo.svg";
import logoUniv from "../assets/logo-univ.png";
import pdfFile from "../assets/La formation de cadres moyens et supérieurs dans le domaine des sciences et technologies.pdf";

export default function GuidancePage() {
  const [filiere, setFiliere] = React.useState("");
  const [niveau, setNiveau] = React.useState("");
  /* const [semestre, setSemestre] = React.useState(""); */
  const [resultat, setResultat] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState("accueil");

  // Pour la section changement de filière
  const [filiereActuelle, setFiliereActuelle] = React.useState("");
  const [filiereCible, setFiliereCible] = React.useState("");
  const [niveauChangement, setNiveauChangement] = React.useState("");
  const [resultatChangement, setResultatChangement] = React.useState(null);
  const [chargement, setChargement] = React.useState(false);

  const handleChangementFiliere = async (e) => {
    e.preventDefault();
    setChargement(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/change_filere", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filiere_actuelle: filiereActuelle,
          filiere_cible: filiereCible,
          niveau: niveauChangement,
        }),
      });
      const data = await response.json();
      setResultatChangement(data);
    } catch (error) {
      console.error("Erreur:", error);
      setResultatChangement({ error: "Erreur lors de la requête" });
    } finally {
      setChargement(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[220px] min-h-screen bg-gradient-to-b from-blue-500 to-blue-600 shadow-lg">
          <div className="p-6">
            {/* Logo */}
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              {/* <img src={logoSetGuide} alt="SET-Guide Logo" className="w-full" /> */}
              <img src={logoSetGuide} alt="SET-Guide" className="h-16 object-contain" />

            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => setActiveSection("accueil")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  activeSection === "accueil"
                    ? "bg-white text-blue-900"
                    : "text-white hover:bg-blue-700"
                }`}
              >
                Accueil
              </button>
              <button
                onClick={() => setActiveSection("guidance")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  activeSection === "guidance"
                    ? "bg-white text-blue-900"
                    : "text-white hover:bg-blue-700"
                }`}
              >
                 SET-GUIDE IA
              </button>
              <button
                onClick={() => setActiveSection("changement")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  activeSection === "changement"
                    ? "bg-white text-blue-900"
                    : "text-white hover:bg-blue-700"
                }`}
              >
                 Changement de Filière
              </button>
              <button
                onClick={() => setActiveSection("infos")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                  activeSection === "infos"
                    ? "bg-white text-blue-900"
                    : "text-white hover:bg-blue-700"
                }`}
              >
                  Informations Générales
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 h-screen flex flex-col overflow-hidden">
          {/* Header - Fixed */}
          <div className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg py-4 px-8">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="flex items-center gap-4">
                <img src={logoUniv} alt="Logo UIDT" className="h-16 w-16 object-contain" />
                <div className="text-white">
                  <h1 className="text-xl font-bold">Université Iba Der Thiam de Thiès</h1>
                  <p className="text-sm text-blue-200 italic">L'humilité mon choix, L'Excellence ma Voie</p>
                </div>
              </div>
              <img src={logoSetGuide} alt="SET-Guide" className="h-16 object-contain" />
            </div>
          </div>

          {/* Page Content */}
          <div className="flex-1 min-h-0 overflow-y-auto p-6">
            <div className="max-w-5xl mx-auto w-full flex flex-col flex-1 min-h-full">
            {activeSection === "accueil" ? (
              <div className="flex flex-1 items-center justify-center min-h-full">
                <div className="bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-4 sm:p-16 lg:p-20 text-center max-w-5xl w-full min-h-[420px] flex flex-col items-center justify-center gap-6">
                  <div className="mt-4">
                    <h2 className="text-4xl font-bold text-white mb-3">
                      Bienvenue dans SET-Guide
                    </h2>
                    <p className="text-xl text-blue-100 mb-3">
                      Votre Système de guidance pédagogique
                    </p>
                    <p className="text-xl text-blue-100">
                      En quoi puis-je vous aider aujourd'hui ?
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setActiveSection("guidance")}
                    className="mt-6 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Commencer →
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col flex-1 overflow-hidden">
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {activeSection === "guidance" ? "Guidance Pédagogique" : activeSection === "changement" ? "Changement de Filière" : "Infos Pratiques"}
                  </h1>
                  <p className="text-gray-600 font-medium">UFR SET</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 flex-1 overflow-hidden flex flex-col">
                  {activeSection === "guidance" ? (
                    <>
                      <FiliereSelector filiere={filiere} setFiliere={setFiliere} />
                      <NiveauSelector niveau={niveau} setNiveau={setNiveau} />
                      {/*  <SemestreSelector semestre={semestre} setSemestre={setSemestre} /> */}

                      <UeEcForm
                        filiere={filiere}
                        niveau={niveau}
                        setResultat={setResultat}
                      />

                      <ResultatGuidance resultat={resultat} />
                    </>
                  ) : activeSection === "infos" ? (
                    <div className="w-full h-full min-h-[700px]">
                      <iframe
                        src={pdfFile}
                        className="w-full h-full min-h-[800px] rounded-lg border-0"
                        title="Infos Pratiques PDF"
                      />
                    </div>
                  ) : activeSection === "changement" ? (
                    <div className="flex flex-col gap-8">
                      <form onSubmit={handleChangementFiliere} className="space-y-6">
                        <FiliereSelector filiere={filiereActuelle} setFiliere={setFiliereActuelle} label="Filière Actuelle" />
                        
                        {/* <div>
                          <label className="block text-gray-700 font-semibold mb-2">
                            Filière Cible
                          </label>
                          <input
                            type="text"
                            value={filiereCible}
                            onChange={(e) => setFiliereCible(e.target.value)}
                            placeholder="Ex: Génie Civil"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div> */}
                        
                        <NiveauSelector niveau={niveauChangement} setNiveau={setNiveauChangement} />
                        
                        <button
                          type="submit"
                          disabled={chargement}
                          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                        >
                          {chargement ? "Vérification en cours..." : "Vérifier la Possibilité de Changement"}
                        </button>
                      </form>

                      {resultatChangement && (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg">
                          <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Résultat du Changement de Filière
                          </h3>
                          
                          {Array.isArray(resultatChangement) && resultatChangement.length > 0 ? (
                            <div className="space-y-4">
                              {resultatChangement.map((critere, index) => (
                                <div key={index} className="bg-white rounded-xl p-5 border-l-4 border-blue-500 shadow-md hover:shadow-lg transition-shadow">
                                  <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed pt-1">
                                      {critere}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : resultatChangement.error ? (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                              <p className="text-red-700 font-semibold">
                                Erreur: {resultatChangement.error}
                              </p>
                            </div>
                          ) : (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                              <p className="text-green-700 font-semibold">
                                Pas de critères supplémentaires - Changement possible!
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
