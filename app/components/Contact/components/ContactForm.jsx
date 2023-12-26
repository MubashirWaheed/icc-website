"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [model, setModel] = useState("");
  const [comment, setComment] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isModelValid, setIsModelValid] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);

  const handleEmaileSend = async (e) => {
    e.preventDefault();

    setIsNameValid(!!name.trim());

    setIsPhoneValid(/^\d+$/.test(phone));

    setIsModelValid(!!model.trim());

    setIsCommentValid(!!comment.trim());
    const data = {
      name,
      phone,
      model,
      comment,
    };

    console.log("data on the frontend: ", data);

    if (
      isNameValid &&
      isPhoneValid &&
      isModelValid &&
      isCommentValid &&
      Object.values(data).every((value) => value !== undefined && value !== "")
    ) {
      try {
        // Assuming your API endpoint is /api/contact
        const res = await axios.post("/api/contact", { data });

        // Reset state after successful form submission
        setName("");
        setPhone("");
        setModel("");
        setComment("");

        console.log("Form submitted successfully:", res.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      console.log("Form validation failed. Please check your input.");
    }
  };
  return (
    <form
      onSubmit={handleEmaileSend}
      className="px-[15px] sm:px-[10px] flex flex-col w-full"
    >
      <input
        className={` text-white my-[5px] py-[5px] sm:px-[10px] sm:py-[5px] lg:py-[10px] lg:text-[20px] placeholder:text-[16px] focus:outline-black focus:border-none  placeholder-white sm:rounded-md  border-b-[1px] border-white bg-[#606727] ${
          isNameValid ? "" : "border-red-500" // Highlight red if invalid
        }`}
        name="name"
        type="text"
        value={name}
        placeholder="Your name"
        onChange={(e) => {
          setName(e.target.value);
          setIsNameValid(true); // Reset validation when typing
        }}
      />
      <input
        className={`py-[5px] lg:py-[10px] lg:text-[20px] my-[5px] sm:px-[10px] sm:py-[5px] placeholder:text-[16px] text-white focus:outline-black focus:border-none  placeholder-white sm:rounded-md  border-b-[1px] border-white bg-[#606727] ${
          isPhoneValid ? "" : "border-red-500" // Highlight red if invalid
        }`}
        name="phone"
        type="number"
        value={phone}
        placeholder="Phone number"
        onChange={(e) => {
          setPhone(e.target.value);
          setIsPhoneValid(true); // Reset validation when typing
        }}
      />
      <input
        className={` py-[5px] lg:py-[10px] lg:text-[20px] my-[5px] sm:px-[10px] sm:py-[5px] placeholder:text-[16px] text-white focus:outline-black focus:border-none  placeholder-white sm:rounded-md  border-b-[1px] border-white bg-[#606727] ${
          isModelValid ? "" : "border-red-500" // Highlight red if invalid
        }`}
        name="model"
        type="text"
        value={model}
        placeholder="Make model"
        onChange={(e) => {
          setModel(e.target.value);
          setIsModelValid(true); // Reset validation when typing
        }}
      />
      <input
        className={`py-[5px] lg:py-[10px] lg:text-[20px] focus:outline-black text-white  placeholder:text-[16px] focus:border-none my-[5px] sm:px-[10px] sm:py-[5px] placeholder-white sm:rounded-md  border-b-[1px] border-white bg-[#606727] ${
          isCommentValid ? "" : "border-red-500" // Highlight red if invalid
        }`}
        name="comment"
        type="text"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
          setIsCommentValid(true); // Reset validation when typing
        }}
        placeholder="Your comment"
      />
      {!isNameValid || !isPhoneValid || !isModelValid || !isCommentValid ? (
        <div className="text-[18px] text-red-500">Please enter all details</div>
      ) : null}
      <div className="w-full flex items-center justify-center">
        <button
          className="w-full py-[10px] rounded-lg mt-[10px] bg-accentGreen font-medium  text-[20px] lg:text-[23px]"
          type="submit"
        >
          Send email
        </button>
        {/* w-full items-end justify-end */}
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=%2B971523383358&text&type=phone_number&app_absent=0"
          className="flex    px-[10px]"
        >
          <div className=" relative w-[45px] h-[45px] sm:w-[35px] sm:h-[35px] lg:w-[45px] lg:h-[45px] cursor-pointer bg-accentGreen rounded-full p-[10px]">
            <Image
              src="/images/whatsapp-transparent.svg"
              fill
              alt="whatsapp logo"
            />
          </div>
        </Link>
      </div>
    </form>
  );
};

export default ContactForm;
