const Header = ({setDarkMode,darkMode}) => {
    return (
      <div className="mb-4 flex items-center justify-between pt-6">
        <h1 className={`${darkMode && 'text-white'} text-3xl font-bold `}>My Notes</h1>
        <button 
        onClick={()=>setDarkMode(current=>!current)}
        
        className="bg-[#e1e1e1] rounded-full py-2 px-6">
          {darkMode ? 'Light': 'Dark'} Theme
        </button>
      </div>
    );
};

export default Header;