const Video = () => {
  return (
    <section className="w-full py-10">
        <div className="w-full">
          <div className="text-center mb-6 px-4">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug">
              আমাদের কাজের প্রক্রিয়া <br /> এক নজরে দেখে নিন
            </h1>

            <h5 className="text-sm md:text-base mt-4 text-gray-700">
              আমরা সরাসরি মাঠ থেকে বিষমুক্ত ও তাজা পণ্য সংগ্রহ করে অত্যন্ত সতর্কতার সাথে <br />
              বাছাই এবং প্যাকেজিং করি, যাতে একদম সঠিক সময়ে তা আপনার দোরগোড়ায় পৌঁছে যায়।
            </h5>
          </div>

          <div className="w-full flex justify-center">
            <iframe
              className="w-full md:w-[100%] h-[250px] md:h-[500px]"
              src="https://www.youtube.com/embed/wcGxK7C2ca0?si=D5UpCdc3RmXHhN3n"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
  )
}

export default Video