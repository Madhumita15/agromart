

const Contact = () => {
  return (
    <main className="contact bg-gradient-to-r from-yellow-200 to-orange-300 pt-10 pb-10">
      <div className="p-5 flex justify-center">
        <div>
          <form>
            <h1 className="mt-5 mb-5 text-4xl font-bold text-purple-900">Contact Us</h1>
            
            <div className="mb-3">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Name :
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email :
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
              />
              <div id="emailHelp" className="text-xs text-gray-500 mt-1">
                We&apos;ll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject :
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                id="subject"
                placeholder="Enter Your Subject"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message :
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                id="message"
                placeholder="Enter Your Message"
              ></textarea>
            </div>

            <div className="mb-3 flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
                id="exampleCheck1"
              />
              <label htmlFor="exampleCheck1" className="ml-2 text-sm text-gray-700">
                I have read and accept the terms and conditions and privacy policy
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 mb-5 mt-5"
            >
              Send
            </button>
          </form>
        </div>

        <div className="mt-5 ms-5">
          <div className="mt-5">
            <h4 className="text-lg font-semibold text-gray-800">Do you like dealing with the client?</h4>
            <button className="px-4 py-2 bg-black text-blue-100 rounded-lg mt-3 ms-5 mb-3 hover:bg-gray-900 transition-colors duration-200">
              Work With Us <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>

            <h4 className="text-lg font-semibold text-gray-800 mt-5">Do you value the local product?</h4>
            <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-black rounded-lg mt-3 ms-5 mb-3 transition-colors duration-200">
              Work With Us <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>

            <div className="pt-5 ps-5 mt-5 h-52 w-96 bg-red-900/40 rounded-lg">
              <h4 className="text-base font-semibold text-gray-800">
                <li className="inline-block mr-2">
                  <a href="#" className="text-gray-800 hover:text-gray-900">
                    <i className="fa-solid fa-phone"></i>
                  </a>
                </li>
                Customer service phone
              </h4>
              <h5 className="pt-3 text-gray-700">9876543213</h5>
            </div>
          </div>

          <div className="mt-5">
            <div className="pt-5 ps-5 h-52 w-96 bg-green-900/40 rounded-lg">
              <h4 className="text-base font-semibold text-gray-800">
                <li className="inline-block mr-2">
                  <a href="#" className="text-gray-800 hover:text-gray-900">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </li>
                Email address
              </h4>
              <h5 className="p-0 pt-2 text-gray-700">web@agromart.es</h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact