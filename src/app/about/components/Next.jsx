const Next = () => {
  return (
    <>
      <p className="text-xl font-bold mt-4 mb-4">User manual 📙</p>
      <p>
        I created a playbook on{" "}
        <a
          href="/manual"
          className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
        >
          {" "}
          how to work with me
        </a>
        . It includes some of my strengths, weaknesses, principles and other
        neat stuff!.
      </p>
      <a
        href="/manual"
        className="text-blue-500 hover:text-blue-400 hover:cursor-pointer mt-8"
      >
        {" "}
        More about me →
      </a>
    </>
  );
};

export default Next;
