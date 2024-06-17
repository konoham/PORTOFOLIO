const Title = ({ title, id }) => {
  console.log(id);
  return (
    <h1 className="text-3xl text-treed font-bold text-center uppercase" id={id}>
      🎈 {title} 🎈
    </h1>
  );
};

export default Title;
