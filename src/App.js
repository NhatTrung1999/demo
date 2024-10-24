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

    // Sử dụng setTimeout để trì hoãn việc thiết lập giá trị
    setTimeout(() => {
      try {
        const txtAccount = "LYV31759";
        const txtFieldName = bpmWindow.document.getElementById("txtAccount");

        if (txtFieldName) {
          txtFieldName.value = txtAccount;
        } else {
          console.error("Không tìm thấy trường txtAccount");
        }
      } catch (error) {
        console.error("Lỗi truy cập vào document của cửa sổ:", error);
      }
    }, 3000); // Thay đổi thời gian trì hoãn nếu cần
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
