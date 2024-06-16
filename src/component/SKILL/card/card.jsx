import Data from "../../../data/library";

const Library = () => {
  const data = Data;
  return (
    <div id="library" className="mt-[150px]">
      <div className="container mx-auto flex justify-center items-center gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[300px] h-[400px] box-border border-primary border-2 shadow-md rounded-lg"
          >
            <img
              src="./profil.png"
              className="rounded-t-md w-40 block mx-auto"
            />
            <h1 className="h-fit w-full pt-4 text-treed text-xl font-semibold uppercase">
              {item.title}
            </h1>
            <div className="p-8 w-full ">
              <ul className="text-start">
                {item.library.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
