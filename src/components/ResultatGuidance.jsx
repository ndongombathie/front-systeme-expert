export default function ResultatGuidance({ resultat }) {
  if (!resultat) return null;

  const isAccepted = resultat.decision.toLowerCase().includes("accepté");
  const isRejected = resultat.decision.toLowerCase().includes("rejeté");
  
  const borderColor = isAccepted ? "border-green-500" : isRejected ? "border-red-500" : "border-yellow-500";
  const textColor = isAccepted ? "text-green-600" : isRejected ? "text-red-600" : "text-yellow-600";
  const bgColor = isAccepted ? "bg-green-50" : isRejected ? "bg-red-50" : "bg-yellow-50";

  return (
    <div className="mt-10 mb-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Résultat de la Guidance</h3>
      
      <div className={`${bgColor} ${borderColor} border-l-4 border rounded-lg p-6 mb-6 shadow-md`}>
        <div className="mb-6">
          <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Décision</p>
          <p className={`${textColor} text-2xl font-bold`}>{resultat.decision}</p>
        </div>

        <div>
          <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">Justification</p>
          <p className="text-gray-700 leading-relaxed text-base">{resultat.justification}</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 shadow-md">
        <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-blue-600 mr-2"></span> Conseils Pédagogiques
        </h4>
        <ul className="space-y-3">
          {resultat.conseils.map((c, i) => (
            <li key={i} className="flex items-start text-gray-700">
              <span className="text-green-500 font-bold mr-3 text-lg">{i+1}</span>
              <span className="pt-0.5">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
