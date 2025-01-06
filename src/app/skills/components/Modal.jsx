const Modal = ({ selectedSkill, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className=" bg-black p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{selectedSkill.name}</h2>
        <p className="mb-4">{selectedSkill.desc}</p>
        {selectedSkill.projects && (
          <>
            <p className="font-bold mb-2">Projects:</p>
            <ul className="list-disc list-inside">
              {selectedSkill.projects.map((project) => (
                <li key={project.name}>
                  <span className="font-bold">{project.name}</span>:{" "}
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Code
                  </a>{" "}
                  ({project.roles.join(", ")})
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
