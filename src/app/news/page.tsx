import Image from "next/image";
import Link from "next/link";

export default function News() {
  const news = [
    {
      id: 1,
      title: "公司荣获2024年度科技创新奖",
      summary:
        "我们的技术创新和研发成果获得行业认可，荣获2024年度科技创新奖项。",
      date: "2024-03-19",
      category: "公司新闻",
      image: "/file.svg",
    },
    {
      id: 2,
      title: "成功举办2024技术创新峰会",
      summary: "汇聚行业专家，共同探讨技术发展趋势，分享创新实践经验。",
      date: "2024-03-15",
      category: "公司新闻",
      image: "/file.svg",
    },
    {
      id: 3,
      title: "新一代人工智能平台正式发布",
      summary: "基于最新技术架构的人工智能平台正式发布，助力企业智能化转型。",
      date: "2024-03-10",
      category: "产品动态",
      image: "/window.svg",
    },
    {
      id: 4,
      title: "2024年物联网技术发展趋势分析",
      summary: "深度解析物联网技术的最新发展趋势，探讨未来发展方向。",
      date: "2024-03-05",
      category: "行业资讯",
      image: "/globe.svg",
    },
    {
      id: 5,
      title: "公司与某知名企业达成战略合作",
      summary: "双方将在人工智能、物联网等领域展开深度合作，共同推动创新技术。",
      date: "2024-02-28",
      category: "公司新闻",
      image: "/file.svg",
    },
    {
      id: 6,
      title: "数字化转型解决方案升级",
      summary: "全新升级的数字化转型解决方案，为企业提供更全面的技术支持。",
      date: "2024-02-20",
      category: "产品动态",
      image: "/window.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-[64px]">
      {/* 新闻资讯页面标题 */}
      <section className="bg-[#2B3499] text-white py-12 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            新闻资讯
          </h1>
          <p className="text-lg md:text-xl text-center mt-4 opacity-90">
            了解最新公司动态和行业资讯
          </p>
        </div>
      </section>

      {/* 新闻分类标签 */}
      <section className="py-6 md:py-8 border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button className="px-4 md:px-6 py-2 rounded-full bg-[#2B3499] text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition-colors">
              全部
            </button>
            <button className="px-4 md:px-6 py-2 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base font-semibold hover:bg-gray-200 transition-colors">
              公司新闻
            </button>
            <button className="px-4 md:px-6 py-2 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base font-semibold hover:bg-gray-200 transition-colors">
              产品动态
            </button>
            <button className="px-4 md:px-6 py-2 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base font-semibold hover:bg-gray-200 transition-colors">
              行业资讯
            </button>
          </div>
        </div>
      </section>

      {/* 新闻列表 */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-3 md:mb-4">
                    <span className="text-sm text-[#2B3499] font-semibold">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6">{item.summary}</p>
                  <button className="text-[#2B3499] font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
                    阅读更多
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 分页 */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2B3499] text-white text-sm md:text-base flex items-center justify-center hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base flex items-center justify-center hover:bg-gray-200 transition-colors">
                2
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base flex items-center justify-center hover:bg-gray-200 transition-colors">
                3
              </button>
              <button className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base flex items-center justify-center hover:bg-gray-200 transition-colors">
                ...
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
