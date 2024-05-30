import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("moqgyknn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-50  p-8 rounded-lg shadow-md flex flex-col"
    >
      <label htmlFor="email" className="text-blue-500 font-bold">
        Email Address
      </label>
      <input
        id="email"
        placeholder="ngxxx@gmail.com"
        type="email"
        name="email"
        className="border rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-blue-500"
      />

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message" className="text-blue-500 font-bold">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        className="border rounded-md py-2 px-4 mb-4 focus:outline-none focus:border-blue-500"
      ></textarea>

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
}
export default ContactForm;
