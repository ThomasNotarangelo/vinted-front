const Signup = ({ handleToken }) => {
  return (
    <form className="form-container">
      <h1>S'inscrire</h1>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <input type="checkbox" />
      <button type="submit"> S'inscrire </button>
    </form>
  );
};
export default Signup;
