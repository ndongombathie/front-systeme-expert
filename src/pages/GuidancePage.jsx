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
                  Infos Pratiques
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
                        className="w-full h-full min-h-[700px] rounded-lg border-0"
                        title="Infos Pratiques PDF"
                      />
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Bienvenue sur la page Changement de Filière
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Cette fonctionnalité sera bientôt disponible.
                      </p>
                    </div>
                  )}
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
