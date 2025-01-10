const Next = () => {
  return (
    <>
      <p className="lg:text-3xl text-xl font-bold mt-2 lg:mt-4 mb-2 lg:mb-4">
        User manual 📙
      </p>
      <p className="lg:text-lg text-sm lg:mb-6 lg:mt-4">
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
