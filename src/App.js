import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const bpmLinkRef = useRef(null);

  const bpmLogin = (e) => {
    e.preventDefault();

    const bpmWindow = window.open(
      "https://bpm.lacty.com.vn/UOF/Login.aspx",
      "_blank"
    );

    bpmWindow.onload = () => {
      const txtAccount = "LYV31759";

      const txtFieldName = bpmWindow.document.getElementById("txtAccount");

      if (txtFieldName) {
        txtFieldName.value = txtAccount;
      } else {
        console.error("Khong tim thay truong txtAccount");
      }
    };
  };

  return (
    <div
      style={{
        background: "#000",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <a href="#" style={{ color: "#fff" }} ref={bpmLinkRef} onClick={bpmLogin}>
        Hãy click vào đường link này đi!
      </a>
    </div>
  );
}

export default App;
