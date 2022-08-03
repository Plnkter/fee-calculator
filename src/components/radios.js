const LoanTermInput = ({ value, handleChange }) => {
    return (
        <div className='px-8'>
            <h2 className="text-xl mt-2 mb-6">Terms</h2>
            <div className="flex items-center mb-4">
                <input 
                    checked={value === 12} 
                    type="radio" 
                    value={12} 
                    onChange={e => handleChange(Number(e.target.value))} 
                    name="default-radio" 
                    className="w-4 h-4 accent-indigo-500 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:ring-2" />
                <label for="12" className="ml-2 text-sm font-medium text-gray-900">12 months</label>
            </div>
            <div className="flex items-center">
                <input 
                    checked={value === 24} 
                    type="radio" 
                    value={24} 
                    onChange={e => handleChange(Number(e.target.value))} 
                    name="default-radio" 
                    className="w-4 h-4 accent-indigo-500 bg-gray-100 border-gray-300 focus:ring-indigo-500 focus:ring-2" />
                <label for="24" className="ml-2 text-sm font-medium text-gray-900">24 months</label>
            </div>
        </div>
    );
  };

export default LoanTermInput;