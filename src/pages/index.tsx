import Input from "../components/Input";
import React, { useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [text, setText] = React.useState("");

  // useEffect(() => {
  //   const api = async () => {
  //     try {
  //       const data = await axios
  //         .get("http://10.10.3.40:3000/conselho/get-conselho-aleatorio")
  //         .then((response) => {
  //           setText(response.data.texto);
  //           console.log(text);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   api();
  // }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen place-content-center bg-[#FAFAFA]">
      <div>
        <img src="./email-svgrepo-com.svg" className="w-[80px] h-[80px] mb-6" />
      </div>
      <div className="text-center">
        <h1
          style={{ fontFamily: "Josefin Sans" }}
          className="text-4xl font-bold"
        >
          Stay Positive
        </h1>
        <p style={{ fontFamily: "Josefin Sans" }} className="text-lg">
          Receive inspirational messages daily on your email
        </p>
      </div>
      <form className="flex flex-row gap-4 mt-6">
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          setValue={setName}
          placeholder="Name"
        />
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          setValue={setEmail}
          placeholder="Email"
        />
      </form>
      <button className="transition-all box-border w-[150px] mt-6 bg-[#00b4d8] text-white font-bold py-2 rounded-full hover:bg-[#0077b6]">
        Sign Up Me
      </button>
    </div>
  );
}
