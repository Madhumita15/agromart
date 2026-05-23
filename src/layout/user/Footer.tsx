import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <>
    <footer className="bg-yellow-400 pt-5 pb-2">
  <div className="max-w-7xl mx-auto px-4">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    
      <div>
        <a href="#" className="ml-4">
          <img src={logo} alt="footer-img" className="h-12 w-auto" />
        </a>

        <ul className="flex  pt-5 space-x-3">
          <li><a href="#"><i className="fa-solid fa-truck"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
        </ul>
      </div>

    
      <div className='flex flex-col '>
        <div className=" text-lg font-semibold">মূল পাতা</div>
        <ul>
          <li className="mt-4"><a href="#" className="hover:text-gray-700">তথ্য</a></li>
          <li className="mt-2"><a href="#" className="hover:text-gray-700">গোপনীয়তা</a></li>
          <li className="mt-2"><a href="#" className="hover:text-gray-700">কুকিজ</a></li>
        </ul>
      </div>

    
      <div>
        <div className=" text-lg font-semibold">আমাদের সম্পর্কে</div>
        <ul>
          <li className="mt-4"><a href="#">প্লট ৪৬এ, সেক্টর ৫, ভোসারি</a></li>
          <li className="mt-2"><a href="#">পরিচালকবৃন্দ</a></li>
          <li className="mt-2"><a href="#">পেজ তৈরি করুন</a></li>
          <li className="mt-2"><a href="#">আমাদের লক্ষ্য</a></li>
        </ul>
      </div>

     
      <div>
        <div className=" text-lg font-semibold ">সহায়তা কেন্দ্র</div>
        <ul>
          <li className="mt-4"><a href="#">8234567890</a></li>
          <li className="mt-2"><a href="#">agromart2025@gmail.com</a></li>
          <li className="mt-2"><a href="#">instagram.com/agromart</a></li>
          <li className="mt-2"><a href="#">facebook.com/agromart</a></li>
        </ul>
      </div>

    </div>

    
    <div className="flex justify-center mt-10 pb-4 text-sm text-black text-center">
      © ২০২৬ 
      <a href="index.html" className="mx-2">অ্যাগ্রোমার্ট</a> |
      <span className="mx-2">গোপনীয়তা নীতি</span>
    </div>

  </div>
</footer>
    </>
  )
}

export default Footer