const Modal = ({ selectedSkill, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full relative m-4">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="lg:text-xl text-lg text-white font-bold mb-2">
          {selectedSkill.name}
        </h2>
        <p className="lg:text-xl text-sm mb-4">{selectedSkill.desc}</p>
      </div>
    </div>
  );
};

export default Modal;
