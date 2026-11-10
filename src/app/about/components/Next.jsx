const Next = () => {
  return (
    <>
      <p className="lg:text-3xl text-xl font-bold ">User manual 📙</p>
      <p className="lg:text-lg text-sm ">
        I created a playbook on{" "}
        <a
          href="/manual"
          className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
        >
          {" "}
          how to work with me
        </a>
        . It includes some of my strengths, weaknesses, principles and other
        neat stuff!
      </p>
      <a
        href="/manual"
        className="text-blue-500 hover:text-blue-400 hover:cursor-pointer"
      >
        {" "}
        More about me →
      </a>
    </>
  );
};

export default Next;
