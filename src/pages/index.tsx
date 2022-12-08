import Input from "../components/Input";
import React, { useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [email, setEmail] = React.useState("");
  const [english, setEnglish] = React.useState("");
  const [portuguese, setPortuguese] = React.useState("");
  const [name, setName] = React.useState("");

  const getSentence = async () => {
    try {
      const data = await axios
        .get("http://10.10.3.40:3000/conselho/get-conselho-aleatorio")
        .then((response) => {
          setEnglish(response.data.texto);
          setPortuguese(response.data.traducao)
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header
        style={{ boxShadow: "0px 2px 4px rgba(55, 55, 55, 0.2)" }}
        className="flex justify-center w-full py-4"
      >
        <img src="./global_logo.svg" alt="" />
      </header>
      <div className="flex flex-col items-center justify-center mt-16">
        <h1
          style={{ fontFamily: "Josefin Sans" }}
          className="text-[#373737] text-[48px] leading-none text-center"
        >
          Click on the button and receive
          <br />a translated sentence
        </h1>
        <div
          style={{ boxShadow: "0px 0px 10px rgba(55, 55, 55, 0.2);" }}
          className="bg-white w-4/5 rounded-[20px] p-10 mt-14 relative"
        >
          <Input
            url="./usa_flag.svg"
            htmlFor="english"
            labelName="English"
            name="english"
            id="english"
            disabled
            value={english}
            placeholder={english}
            setValue={setEnglish}
            type="text"
            className="input-usa py-5 px-7 text-[20px] font-normal text-[#373737] w-full rounded-md outline-none"
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: "600",
            }}
          />
          <Input
            url="./brazil_flag.svg"
            htmlFor="portuguese"
            labelName="Portuguese"
            name="portuguese"
            id="portuguese"
            disabled
            value={portuguese}
            placeholder={portuguese}
            setValue={setEnglish}
            type="text"
            className="input-brazil py-5 px-7 text-[20px] font-normal text-[#373737] w-full rounded-md outline-none"
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: "600",
            }}
          />
          <button type="submit" onClick={getSentence}>
            <img
              src="./translate_icon.svg"
              className="bg-[#373737] p-7 rounded-full absolute left-2/4 scale-100 hover:scale-110 transition-all"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
