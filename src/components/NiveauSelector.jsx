export default function NiveauSelector({ niveau, setNiveau }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-3">
        Niveau
      </label>
      <select 
        value={niveau} 
        onChange={e => setNiveau(e.target.value)}
        className="w-full px-4 py-3 text-gray-900 border-2 border-gray-300 rounded-lg bg-white cursor-pointer transition-all duration-300 hover:border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="" disabled>-- Choisir un niveau --</option>
        <option value="l1">Licence 1</option>
        <option value="l2">Licence 2</option>
        <option value="l3">Licence 3</option>
        <option value="m1">Master 1</option>
        <option value="m2">Master 2</option>
      </select>
    </div>
  );
}
