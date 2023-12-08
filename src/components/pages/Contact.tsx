import React, { useState, ChangeEvent, FormEvent } from "react";
import Modal from "../ui/Modal";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: false,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // If already submitting, do nothing
    if (isSubmitting) {
      return;
    }

    // Start form submission
    setIsSubmitting(true);

    // Validate form fields
    let formValid = true;

    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
      formValid = false;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
      formValid = false;
    }

    if (!formData.message.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, message: true }));
      formValid = false;
    }

    // If form is valid, submit the form
    if (formValid) {
      try {
        const response = await fetch(
          "https://getform.io/f/8eacaacc-14d9-4dd3-a680-5648d5473a8b",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          // Form submitted successfully
          setSuccessModalVisible(true);
          setFormData(initialFormData); // Clear form fields
        } else {
          // Handle form submission error
          console.error("Error submitting form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        // Stop form submission
        setIsSubmitting(false);
      }
    } else {
      // Stop form submission if validation fails
      setIsSubmitting(false);
    }
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
  };

  return (
    <div
      id="contact"
      className="w-full h-screen bg-gray-100 flex justify-center items-center p-4"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full mt-10"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
            Contact
          </p>
          <p className="text-black pt-4">
            // Submit the form below or shoot me an email - kopadze@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className={`mb-4 p-2 placeholder-black border-2 ${
            errors.name ? "border-red-500" : ""
          }`}
          name="name"
          autoComplete="off"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          className={`my-4 p-2 placeholder-black border-2 ${
            errors.email ? "border-red-500" : ""
          }`}
          name="email"
          autoComplete="off"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className={`my-4 p-2 placeholder-black border-2 ${
            errors.message ? "border-red-500" : ""
          }`}
          rows={10}
          cols={30}
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="text-black border-2 bg-white hover:text-white hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Let's Collaborate"}
        </button>
      </form>
      {/* Success Modal */}
      {successModalVisible && (
        <Modal open={successModalVisible} onClose={closeSuccessModal}>
          <p className="text-2xl font-bold mb-4">Success!</p>
          <p>Your form was submitted successfully.</p>
          <button
            onClick={closeSuccessModal}
            className="mt-4 p-2 bg-pink-600 text-white"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Contact;
