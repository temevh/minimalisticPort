const Modal = ({ selectedSkill, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{selectedSkill.name}</h2>
        <p className="mb-4">{selectedSkill.desc}</p>
        {/* 
        {selectedSkill.projects && (
            <div key={selectedSkill}>
            <p className="font-bold mb-2">Projects:</p>
            {selectedSkill.projects.map((project) => (
              <div key={project.name} className="mb-4">
                {project.code ? (
                  <a
                  className="font-bold text-xl underline text-blue-500"
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  {project.name}
                  </a>
                ) : (
                  <span className="font-bold text-xl text-white cursor-default">
                  {project.name}
                  </span>
                )}
                {project.roles && (
                  <p className="text-gray-300 text-sm mt-1" key={project.roles}>
                  {project.roles.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
                */}
      </div>
    </div>
  );
};

export default Modal;
