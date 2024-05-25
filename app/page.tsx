"use client"
import { useState } from "react";
import { TbBackspace } from "react-icons/tb";

export default function Home() {
  const [expression, setExpression] = useState<string>("")
  const [textToDisplay, setTextToDisplay] = useState<string>("")

  const onClickHandler = (text2: string) => {
    setExpression(expression + text2);
    setTextToDisplay(textToDisplay + text2);

  }
  const onClickClear = () => {
    setExpression("");
    setTextToDisplay("");
  }
  const onClickEqual = () => {
    try {
      const result: number = eval(expression);
      if (Math.floor(result) < result) {
        setTextToDisplay(result.toFixed(2).toString());
        setExpression(result.toFixed(2).toString());
      }
      else {
        setTextToDisplay(result.toString());
        setExpression(result.toString());
      }
      console.log(expression);
    } catch (error) {
      alert("Please Enter a Valid Expression!");
    }
  }
  const removeCharacter = () => {
    setTextToDisplay(textToDisplay.slice(0, -1))
    setExpression(expression.slice(0, -1))
  }
const onClickRoot = ()=>{
  try {
  const root:number = Math.sqrt(eval(expression))
  setExpression(root.toString())
  setTextToDisplay(root.toString())
    if (Math.floor(root) < root) {
      setTextToDisplay(root.toFixed(2).toString());
      setExpression(root.toFixed(2).toString());
    }
    else {
      setTextToDisplay(root.toString());
      setExpression(root.toString());
    }
    console.log(expression);
  } catch (error) {
    alert("Please Enter a Valid Expression!");
  }
}

  return (
    <main className="bg-zinc-300 h-[100vh] flex flex-col gap-y-3 py-2 mobile:gap-y-20 mobile:py-24">
      <h1 className="text-5xl font-extrabold flex justify-center items-center">Calculator</h1>
      <section className="flex justify-center items-center">
        <div className="w-[400px] bg-[#0E1726] p-5 h-auto mobile:w-[300px]">
          <div className="bg-blue-100 w-full h-28 flex justify-end items-end px-5"><h3 className="text-7xl font-extrabold">{textToDisplay}</h3></div>
          <div className="grid grid-cols-4 gap-2 w-full mt-5 text-white">
            <div onClick={onClickClear} className="bg-[#219594] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#2eacaa] active:bg-[#46d2d0]">C</div>
            <div onClick={removeCharacter} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]"><TbBackspace className="text-white" /></div>
            <div onClick={onClickRoot} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">√</div>
            <div onClick={() => onClickHandler("+")} className="bg-[#2A6AC7] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#3978d6] active:bg-[#5192f4]">+</div>
            <div onClick={() => onClickHandler("7")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">7</div>
            <div onClick={() => onClickHandler("8")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">8</div>
            <div onClick={() => onClickHandler("9")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">9</div>
            <div onClick={() => onClickHandler("-")} className="bg-[#2A6AC7] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#3978d6] active:bg-[#5192f4]">-</div>
            <div onClick={() => onClickHandler("4")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">4</div>
            <div onClick={() => onClickHandler("5")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">5</div>
            <div onClick={() => onClickHandler("6")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">6</div>
            <div onClick={() => onClickHandler("*")} className="bg-[#2A6AC7] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#3978d6] active:bg-[#5192f4]">x</div>
            <div onClick={() => onClickHandler("1")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">1</div>
            <div onClick={() => onClickHandler("2")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">2</div>
            <div onClick={() => onClickHandler("3")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">3</div>
            <div onClick={() => onClickHandler("/")} className="bg-[#2A6AC7] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#3978d6] active:bg-[#5192f4]">/</div>
            <div onClick={() => onClickHandler("0")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f] col-span-2">0</div>
            <div onClick={() => onClickHandler(".")} className="bg-[#1E2E47] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#273956] active:bg-[#4c5f7f]">.</div>
            <div onClick={onClickEqual} className="bg-[#219594] py-6 mobile:py-3 rounded-full text-3xl font-extrabold flex justify-center items-center cursor-pointer hover:bg-[#2eacaa] active:bg-[#46d2d0]">=</div>
          </div>
        </div>
      </section>
    </main>
  );
}
