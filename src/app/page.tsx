import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pt-[64px]">
      {/* Main Banner */}
      <section className="py-16 bg-gradient-to-br from-[#2B3499] to-[#FF6C22]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 text-white text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                创新科技
                <br />
                引领未来
              </h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                我们致力于为客户提供最前沿的技术解决方案，
                助力企业数字化转型，开创智能化未来。
              </p>
              <Link
                href="/products"
                className="inline-flex items-center px-6 md:px-8 py-3 bg-white text-[#2B3499] rounded-full font-semibold hover:bg-opacity-90 transition-all group"
              >
                了解更多
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <Image
                src="/banner-image.jpg"
                alt="Banner"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500 w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Display */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              产品展示
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              探索我们的创新产品系列
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={`/product-${item}.jpg`}
                    alt={`Product ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    产品名称 {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    创新科技产品，为您提供优质解决方案
                  </p>
                  <Link
                    href={`/products/${item}`}
                    className="inline-flex items-center text-[#2B3499] font-semibold group"
                  >
                    查看详情
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 relative w-full md:w-auto">
              <div className="absolute -inset-4 bg-[#2B3499] rounded-lg opacity-10 transform -rotate-6" />
              <Image
                src="/about-image.jpg"
                alt="About Us"
                width={500}
                height={400}
                className="rounded-lg relative z-10 w-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                关于我们
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                二十年专注科技创新，打造行业领先解决方案。
                我们始终坚持以客户为中心，追求卓越品质。
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#2B3499] mb-2">
                    20+
                  </div>
                  <div className="text-gray-600">年行业经验</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#2B3499] mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">服务客户</div>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-[#2B3499] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all group"
              >
                了解更多
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News and Information */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              新闻资讯
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              了解最新行业动态与公司新闻
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={`/news-${item}.jpg`}
                    alt={`News ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#2B3499] text-white text-sm px-3 py-1 rounded-full">
                      行业动态
                    </span>
                    <span className="text-gray-500 text-sm">
                      2024-01-{item}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    新闻标题 {item}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    最新行业资讯，助您把握市场动向，洞察发展趋势。
                  </p>
                  <Link
                    href={`/news/${item}`}
                    className="inline-flex items-center text-[#2B3499] font-semibold group"
                  >
                    阅读更多
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
