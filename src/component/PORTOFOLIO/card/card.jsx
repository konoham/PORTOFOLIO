import { ArrowRight, DotsThreeVertical } from "@phosphor-icons/react";

const Card = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="container mx-auto">
        <div className="w-[300px] h-fit  box-border border border-primary shadow-md rounded-lg text-treed relative">
          <div className="relative shadow-sm">
            <img src="./profil.png" className="h-[150px] w-full object-cover" />
            <p className="bg-primary p-2 rounded-e-lg absolute left-0 bottom-0">
              #1
            </p>
          </div>
          <div className="px-4 py-2">
            <h1 className="text-treed font-bold">ANFLIX</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              excepturi voluptates illum, minus esse perferendis saepe
              temporibus assumenda harum adipisci sunt itaque repellendus neque
              eum.
            </p>
            <div className="flex justify-between items-center mt-2">
              <a
                href="#"
                className="flex justify-center items-center gap-1 border-b border-treed"
              >
                visit{" "}
                <span>
                  <ArrowRight size={16} />
                </span>
              </a>
              <details className="relative text-sm">
                <summary className="list-none cursor-pointer">
                  <DotsThreeVertical size={20} />
                </summary>
                <ul className="absolute top-[95%] left-[95%] border-primary border-2 py-2 px-8 box-border w-fit shadow-sm bg-transparent backdrop-blur-sm rounded-md">
                  <li>React Router</li>
                  <li>Axios</li>
                  <li>React Hook Form</li>
                  <li>zustand</li>
                  <li>yup</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
