export default function Features() {
  return (
    <>
      <div className="mx-5 md:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-2 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              সারভিস প্রাভাইডার হায়ার <span className="text-5xl">🔖</span>
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              facere quod explicabo quidem. Aliquam, unde voluptas
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-2 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              আপনার skill প্রদর্শন করুন <span className="text-5xl">🤝</span>
            </h3>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
              esse at hic accusamus magnam maiores reprehenderit
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-2 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              সমগ্র বাংলাদেশে সাপোর্ট <span className="text-5xl">🔄️</span>
            </h3>
            <p className="text-gray-600">
              বাংলাদেশে কোন কোন জাইগায় থেকে আমাদের সাথে যোগাযোগ করতে পারেন। আমরা
              আছি আপনার অপেক্ষায়।
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
