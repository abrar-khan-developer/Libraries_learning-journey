"use client";

export default function ContactForm() {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
      >
        <h2 className="mb-6 text-center text-2xl font-bold">
          Contact Form
        </h2>

        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="mb-2 block font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message..."
            className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 py-2 text-white transition hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}