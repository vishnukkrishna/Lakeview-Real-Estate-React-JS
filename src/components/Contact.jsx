import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f72fcc92-e63e-4c95-a743-392afbd65cfe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data, message);
      setResult("");
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-2 font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
        Ready to Make a Move? Let's Build Future Together
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto text-gray-600 pt-4"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left text-sm font-medium">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-300"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 text-sm font-medium">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-300"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left text-sm font-medium">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-800 transition duration-300"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-12 mb-10 rounded from-blue-800 to-indigo-800 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
