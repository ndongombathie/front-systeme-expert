export default function FiliereSelector({ filiere, setFiliere }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">
        Filière
      </label>
      <select 
        value={filiere} 
        onChange={e => setFiliere(e.target.value)}
        className="w-full px-4 py-3 text-gray-900 border-2 border-gray-300 rounded-lg bg-white cursor-pointer transition-all duration-300 hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="" disabled>-- Choisir une filière --</option>
        <option value="informatique">Informatique</option>
        <option value="physique_chimie">Physique Chimie</option>
        <option value="sciences_eaux_env">Sciences des Eaux et Environnement</option>
        <option value="math_info">Mathématique Informatique</option>
      </select>
    </div>
  );
}
