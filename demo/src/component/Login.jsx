export default function Login() {
  return (
    <>
      <h2>Sign Up Form</h2>

      <form>
        <input type="text" placeholder="Username" />
        <br /><br />

        <input type="email" placeholder="Email" />
        <br /><br />

        <input type="password" placeholder="Password" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}