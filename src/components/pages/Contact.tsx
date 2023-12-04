const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-gray-100 flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/8eacaacc-14d9-4dd3-a680-5648d5473a8b"
        method="POST"
        className="flex flex-col max-w-[600px] w-full mt-10"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline boder-b-4 border-pink-600 text-black">
            Contact
          </p>
          <p className="text-black pt-4">
            // Submit the form below or shoot me an email - kopadze@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="mb-4 p-2 placeholder-black border-2"
          name="name"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          className="my-4 p-2 placeholder-black border-2"
          name="email"
          autoComplete="off"
        />
        <textarea
          className="my-4 p-2 placeholder-black border-2"
          rows={10}
          cols={30}
          name="message"
          placeholder="Message"
        ></textarea>
        <button className="text-black border-2 bg-white hover:text-white hover:bg-pink-600 hover:border-pink-600 duration-300 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
