const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline boder-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-4">
            // Submit the form below or shoot me an email - kopadze@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="mb-4 p-2 bg-[#ccd6f6]"
          name="name"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
          name="email"
          autoComplete="off"
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          rows={10}
          cols={30}
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
