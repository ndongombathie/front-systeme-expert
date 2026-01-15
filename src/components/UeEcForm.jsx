import { useEffect, useState } from "react";
import api from "../api/api";

export default function UeEcForm({ filiere, niveau, setResultat, semestre }) {
  const [ues, setUes] = useState([]);

  useEffect(() => {
    if (filiere && niveau) {
      api.get(`/ues/${filiere}/${niveau}`).then(res => {
        console.log(res.data);
        // Wrap single object in array if needed
        const uesArray = Array.isArray(res.data) ? res.data : [res.data];
        const data = uesArray.map(ue => ({
          ...ue,
          ecs: ue.ecs.map(ec => ({
            nom: ec,
            note: ""
          }))
        }));
        console.log(data);
        setUes(data);
      }).catch(err => {
        console.error("Failed to fetch UEs:", err);
        setUes([]);
      });
    }
  }, [filiere, niveau, semestre]);

  const handleChange = (i, j, value) => {
    const copy = [...ues];
    copy[i].ecs[j].note = value;
    setUes(copy);
  };

  const submit = () => {
    api.post("/guidance/analyse", { ues })
      .then(res => setResultat(res.data));
  };

  if (!filiere || !niveau) return null;

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Saisissez vos notes</h3>

      <div className="space-y-5 mb-8">
        {ues.map((ue, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4">
              <span className="text-lg font-semibold">{ue.nom.replace(/_/g, ' ').toUpperCase()}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
              {ue.ecs.map((ec, j) => (
                <div key={j} className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">{ec.nom.replace(/_/g, ' ').toUpperCase()}</label>
                  <input
                    type="number"
                    min="0"
                    max="20"
                    value={ec.note}
                    onChange={e => handleChange(i, j, e.target.value)}
                    placeholder="0-20"
                    className="px-4 py-2.5 text-gray-900 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 hover:border-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={submit} 
        className="w-full py-3 px-6 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        Analyser
      </button>
    </div>
  );
}
