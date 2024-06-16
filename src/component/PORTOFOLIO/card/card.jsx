const Card = () => {
  return (
    <div className="w-full mt-[100px]">
      <div className="container mx-auto">
        <div className="w-[300px] h-fit p-4 box-border bg-primary border-2 shadow-md rounded-lg relative">
          <img src="./profil.png" />
          <h1>ANFLIX</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ipsam
            maxime! Consectetur eaque maxime et nemo accusamus, sapiente,
            asperiores, cupiditate earum officia saepe eum inventore.
          </p>
          <details>
            <summary>stack</summary>
            <p>React Router</p>
            <p>Axios</p>
            <p>React Hook Form</p>
            <p>zustand</p>
            <p>yup</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Card;
