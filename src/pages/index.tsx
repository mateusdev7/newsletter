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
    <div className="w-scren h-screen bg-[#FAFAFA] flex flex-row gap-7">
      <img src="./bg_left.png" className="box-border h-screen" />
      <div className="pt-[80px] flex flex-col">
        <div>
          <img src="./global_logo.svg" className="mb-20 col-span-full" />
        </div>
        <form className="flex flex-col gap-8">
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            setValue={setName}
            placeholder="NAME"
            required
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            setValue={setEmail}
            placeholder="EMAIL"
            required
          />
          <button
            style={{ fontFamily: "Josefin Sans", fontWeight: "bold" }}
            className="button self-end text-white py-4 px-6 text-[20px]"
          >
            SIGN UP ME
          </button>
        </form>
        <div className="flex flex-row self-end gap-4 mt-auto mb-5">
          <img className="cursor-pointer" src="./facebook_icon.svg" alt="" />
          <img className="cursor-pointer" src="./insta_icon.svg" alt="" />
          <img className="cursor-pointer" src="./linkedin_icon.svg" alt="" />
          <img className="cursor-pointer" src="./youtube_icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
