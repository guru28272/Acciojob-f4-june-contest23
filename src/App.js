import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [userVal, setUserVal] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const values = [...form.values()];
    // console.log(values);

    user.name.trim();

    if (user.name === "" || user.email === "") {
      setErr("all fields are mandatory");
      return;
    } else if (!user.name.includes(" ")) {
      setErr("fullName is mandatory");
      return;
    } else if (values[2] !== values[3]) {
      setErr("password mismatching");
      return;
    }

    // just to store the value
    setUserVal([{ ...user }]);
    // console.log(userVal);

    setErr("");
    setUser({ name: "", email: "", password: "", confirmPassword: "" });
    setSuccess("successfully signedUp");
  };
  // console.log(user.name);
  // console.log(user.email);
  // console.log(err);
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>sign up</h1>
        <input
          type="text"
          name="name"
          id="name"
          // required
          placeholder="full Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <input
          type="email"
          name="email"
          id="email"
          // required
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          name="password"
          id="password"
          // required
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          // required
          placeholder="confirmPassword"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />

        <button type="submit">sign up</button>

        {err ? (
          <h1 className="red">{err}</h1>
        ) : (
          <h4 className="green">{success}</h4>
        )}
      </form>
    </div>
  );
}

export default App;
