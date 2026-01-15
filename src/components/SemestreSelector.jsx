import React from 'react'

export default function SemestreSelector({ semestre, setSemestre }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">
        Semestre
      </label>
      <select 
        value={semestre} 
        onChange={e => setSemestre(e.target.value)}
        className="w-full px-4 py-3 text-gray-900 border-2 border-gray-300 rounded-lg bg-white cursor-pointer transition-all duration-300 hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="" disabled>-- Choisir un semestre --</option>
        <option value="Semestre_1">Semestre 1</option>
        <option value="Semestre_2">Semestre 2</option>
        <option value="Semestre_1_et_2">Semestre 1 et 2</option>
      </select>
    </div>
  );
}
