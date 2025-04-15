import { useState } from "react";
import profile from "../Assert/Profile/pastorProfile.png"
import prayerhand from "../Assert/prayerhand.png"
import axios from "axios";
export function PrayerRequest() {

  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);

  const [popup, setPopup] = useState({ show: false, message: "" });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);

      if (response.status === 200) {
        setPopup({ show: true, message: response.data.message });
        setFormData(initialFormData); // Clear form data after successful submission
      }
    } catch (error) {
      console.error("Error:", error);
      setPopup({ show: true, message: "Failed to send email." });
    }
  };

  const closePopup = () => {
    setPopup({ show: false, message: "" });
  };

  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="container mx-auto px-4  sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Contact</h2>

      <div className="grid lg:grid-cols-2 gap-8 items-start justify-center mb-10">
        <div>
          <form
            className="bg-gray-200 p-6 sm:p-8 rounded-lg shadow-lg animate__animated animate__fadeIn"
            onSubmit={handleSubmit}
          >
            <div className="flex">
              <img src={prayerhand} className="w-40 h-20" alt="prayerhand" />
              <div>
                <h3 className="text-2xl font-mono text-gray-900 text-center">Send Your Prayer Request</h3>
                <p className="text-sm text-gray-600 text-center font-mono pt-2">
                  Fill in the form below, and we’ll get back to you shortly.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg font-mono mt-3">
              <label className="block text-gray-700 text-sm font-mono mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-blue-300 hover:shadow-lg bg-gray-100"
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label className="block text-gray-700 text-sm font-mono mt-4 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-blue-300 hover:shadow-lg bg-gray-100"
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label className="block text-gray-700 text-sm font-mono mt-4 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Write your message here..."
                className="text-sm w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out focus:outline-blue-300 hover:shadow-lg bg-gray-100"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="px-6 py-2 font-medium bg-indigo-500 text-white rounded-lg transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
          {popup.show && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
                <p className="text-gray-800">{popup.message}</p>
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center font-mono">
            <p className="text-xl font-bold mb-4">1 John 5:14</p>
            <p className="text-gray-700">
              "This is the confidence we have in approaching God: that if we ask anything according to His will, He hears us."
            </p>
          </div>


          <div className="flex justify-center mt-14 mb-10">
            <div
              className={`relative w-72 h-72 bg-white p-1 rounded-xl shadow-[rgba(96,75,74,0.1882352941)_0px_70px_30px_-50px] transition-all ease-in-out duration-500 ${isHovered ? "border-4 border-[#fbb9b6] hover:rounded-tl-[55px]" : "border-transparent"
                }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >

              <div
                className={`absolute w-full h-full top-0 left-0 rounded-3xl overflow-hidden transition-all ease-in-out duration-500 ${isHovered
                  ? "w-24 h-24 top-2 left-2 border-4 border-[#fbb9b6] shadow-[rgba(96,75,74,0.1882352941)_0px_5px_5px_0px]"
                  : ""
                  }`}
              >
                <img
                  className={`w-full h-full object-cover object-top transition-all duration-500 ease-in-out ${isHovered ? "scale-[1.2] object-left" : ""}`}
                  src={profile}
                  alt="Profile"
                />
              </div>

              <div
                className={`absolute bottom-3 left-3 right-3 bg-[#121212] rounded-b-3xl z-20 shadow-[rgba(96,75,74,0.1882352941)_0px_5px_5px_0px_inset] overflow-hidden ${isHovered ? "top-[20%] rounded-[80px_29px_29px_29px]" : "top-[80%]"
                  } transition-all ease-in-out duration-500`}
              >
                <div className="absolute bottom-0 left-6 right-6 h-[160px]">
                  <span className="block text-white font-bold text-xl">Pt.John Davidson</span>
                  <span className="block text-white text-m mt-4">
                    Pastor at Ashwas Church of God
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <button className="bg-white text-[#fbb9b6] border-none rounded-[20px] text-xs px-3 py-1 shadow-[rgba(165,132,130,0.1333333333)_0px_5px_5px_0px] hover:bg-[#f55d56] hover:text-white transition-all duration-500">
                    hover here
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
