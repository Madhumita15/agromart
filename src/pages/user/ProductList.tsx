import ProductSlider from '../../components/ProductSlider'
import productimg1 from "../../assets/cardimg1.jpg";
import productimg2 from "../../assets/cardimg7.jpg";
import productimg3 from "../../assets/cardimg6.jpg";
import productimg4 from "../../assets/cardimg5.jpg";
import productimg5 from "../../assets/cardimg4.jpg";
import productimg6 from "../../assets/cardimg12.jpg";
import productimg7 from "../../assets/cardimg8.jpg";
import productimg8 from "../../assets/cardimg2.jpg";
import { Button } from '@mui/material';
import { Eye, ShoppingCart } from 'lucide-react';

const ProductList = () => {

  interface Product {
  id: number;
  name: string;
  originalPrice: number;
  currentPrice: number;
  discount?: number;
  description: string;
  image: string;
}


// ক্যাটাগরি ডেটা বাংলায় রূপান্তর করা হলো
const productCategory = [
  {
    id: 1,
    name: "শাকসবজি",
  },
  {
    id: 2,
    name: "চাল",
  },
  {
    id: 3,
    name: "ফসল ও দানাশস্য",
  },
  {
    id: 4,
    name: "বাদাম ও বীজ",
  },
];




  const products: Product[] = [
  {
    id: 1,
    name: "তাজা আলু",
    originalPrice: 30,
    currentPrice: 20,
    discount: 10,
    description:
      "সেরা স্বাদ এবং স্বাস্থ্যকর জীবনের জন্য প্রাকৃতিকভাবে উৎপাদিত, পুষ্টিসমৃদ্ধ আলু।",
    image: productimg1,
  },
  {
    id: 2,
    name: "উন্নত মানের বেগুন উৎপাদন",
    originalPrice: 20,
    currentPrice: 50,
    discount: 20,
    description:
      "খামার থেকে বাজারে ধারাবাহিক গুণগত মান এবং সতেজতাসহ খামারের তাজা বেগুন সরবরাহ করা হচ্ছে।",
    image: productimg2,
  },
  {
    id: 3,
    name: "তাজা টমেটো",
    originalPrice: 100,
    currentPrice: 80,
    discount: 20,
    description:
      "প্রাকৃতিকভাবে উৎপাদিত, পুষ্টিগুণে ভরপুর রসালো টমেটো যা প্রতিদিনের রান্নার জন্য একদম নিখুঁত।",
    image: productimg3,
  },
  {
    id: 4,
    name: "তাজা পটল",
    originalPrice: 30,
    currentPrice: 20,
    discount: 10,
    description:
      "স্বাস্থ্যকর ও সুস্বাদু খাবারের জন্য প্রাকৃতিকভাবে উৎপাদিত, পুষ্টিসমৃদ্ধ পটল।",
    image: productimg4,
  },
  {
    id: 5,
    name: "ঢ্যাঁড়শ চাষ",
    originalPrice: 30,
    currentPrice: 20,
    description:
      "উন্নত ফলন এবং চমৎকার স্বাদ নিশ্চিত করতে আধুনিক কৃষি পদ্ধতিতে উৎপাদিত তাজা ও উচ্চ মানের ঢ্যাঁড়শ।",
    image: productimg5,
  },
  {
    id: 6,
    name: "তাজা করলা",
    originalPrice: 30,
    currentPrice: 60,
    description:
      "প্রাকৃতিকভাবে উৎপাদিত, পুষ্টিসমৃদ্ধ করলা যা এর স্বাস্থ্যগত উপকারিতা এবং অনন্য স্বাদের জন্য পরিচিত।",
    image: productimg6,
  },
  {
    id: 7,
    name: 'তাজা গাজর',
    originalPrice: 30,
    currentPrice: 20,
    description: 'স্বাস্থ্যকর জীবনধারার জন্য ভিটামিনে ভরপুর প্রাকৃতিকভাবে উৎপাদিত, পুষ্টিসমৃদ্ধ গাজর।',
    image: productimg6,
  },
  {
    id: 8,
    name: 'কাঁচা মরিচ',
    originalPrice: 30,
    currentPrice: 20,
    discount: 10,
    description: 'প্রাকৃতিকভাবে উৎপাদিত ঝাল কাঁচা মরিচ, যা প্রতিটি খাবারে চমৎকার স্বাদ ও সুগন্ধ যোগ করে।',
    image: productimg7,
  },
  {
    id: 9,
    name: 'উন্নত মানের পেঁয়াজ উৎপাদন',
    originalPrice: 50,
    currentPrice: 30,
    description: 'ধারাবাহিক গুণগত মানসম্পন্ন খামারের তাজা পেঁয়াজ। আমাদের আধুনিক পদ্ধতি খামার থেকে বাজার পর্যন্ত এর সতেজতা নিশ্চিত করে।',
    image: productimg8,
  },
];
  return (
    <>
     <ProductSlider />
    <section className="w-full py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-2 text-balance">
              খামারের তাজা পণ্য <br className="hidden sm:block" />
              সরাসরি আপনার{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                ঘরে
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              আপনার স্থানীয় অ্যাগ্রোমার্ট গ্রুপ সেন্টারে পুরো মৌসুম জুড়ে সেরা
              ফসল ফলানোর জন্য খামারের প্রয়োজনীয় সবকিছু রয়েছে। আমাদের অনেক
              সেন্টারে প্লাস্টিক, দড়ি, পশুখাদ্য এবং অন্যান্য সাধারণ পণ্যসহ
              জনপ্রিয় খামার সামগ্রীও পাওয়া যায়।
            </p>
          </div>


          
          {/* ক্যাটাগরি সেকশনের বাটন স্টাইলিং কাস্টমাইজড */}
          <div className="mb-12 flex flex-wrap gap-4 justify-center">
            {productCategory?.map((category) => (
              <button
                className="bg-yellow-400 hover:bg-green-600 text-black hover:text-white px-6 py-2.5 rounded-full text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                key={category.id}
              >
                {category.name}
              </button>
            ))}
          </div>


          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.discount && (
                    <button className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                      {product.discount}% ছাড়
                    </button>
                  )}
                </div>

                {/* Content Container */}
                <div className="p-6">
                  {/* Product Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Price Section */}
                  <div className="flex items-center gap-3 mb-4">
                    {product.originalPrice !== product.currentPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-green-600">
                      ₹{product.currentPrice}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outlined"
                      className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-xl font-semibold transition-all duration-300 group/btn"
                    >
                      <Eye className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      আরও দেখুন
                    </Button>

                    <Button
                      sx={{ color: "white" }}
                      className="flex-1 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      কার্টে যোগ করুন
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductList;