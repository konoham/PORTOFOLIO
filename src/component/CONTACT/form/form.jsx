const Form = () => {
  return (
    <form className="w-[60%] mx-auto text-sm text-black" action="">
      <div
        className="flex justify-center items-center gap-4 text-xl"
        id="name-email"
      >
        <div className="w-1/2">
          <label>name</label>
          <input type="text" name="text" id="" />
        </div>
        <div className="w-1/2">
          <label>email</label>
          <input type="email" name="email" id="" />
        </div>
      </div>

      <div id="pesan" className="w-full ">
        <label>massage</label>
        <textarea type="text" name="text" className="w-full" id="" />
      </div>
    </form>
  );
};

export default Form;
