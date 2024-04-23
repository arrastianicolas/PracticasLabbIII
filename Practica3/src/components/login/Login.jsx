import { useState } from "react";

const Login = () => {
  const [userName, setUsername] = useState("");
  const userChangeHandler = (event) => {
    if (event.target.value.includes("o") || event.target.value.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setUsername(event.target.value);
  };
  const clickHandler = () => {
    if (!userName || userName.includes("o") || userName.includes("O")) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
    setUsername("");
  };
  return (
    <>
      <input
        type="text"
        value={userName}
        onChange={userChangeHandler}
        placeholder="Username"
      />
      <button onClick={clickHandler}>Registrarse</button>
      <p>{userName}</p>
    </>
  );
};

export default Login;
