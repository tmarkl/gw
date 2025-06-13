import Image from "next/image";

export default function About() {
  const milestones = [
    {
      year: "2010",
      title: "公司成立",
      description: "在科技创新的浪潮中，我们开始了追求卓越的征程。",
    },
    {
      year: "2015",
      title: "技术突破",
      description: "成功研发多项核心技术，获得国家级高新技术企业认证。",
    },
    {
      year: "2018",
      title: "市场扩张",
      description: "业务版图扩展至全国，服务客户超过1000家。",
    },
    {
      year: "2020",
      title: "国际化发展",
      description: "成功开拓国际市场，建立全球研发中心。",
    },
    {
      year: "2024",
      title: "创新升级",
      description: "推出新一代人工智能解决方案，引领发展。",
    },
  ];

  const teams = [
    {
      name: "研发团队",
      description: "由博士、硕士等高学历人才组成，拥有丰富的研发经验和创新。",
      image: "/file.svg",
    },
    {
      name: "技术支持团队",
      description: "专业的技术支持团队，为客户提供7*24小时的技术服务。",
      image: "/file.svg",
    },
    {
      name: "市场团队",
      description: "经验丰富的市场团队，深入了解客户需求，提供个性化解决方案。",
      image: "/file.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-[64px]">
      {/* 关于我们页面标题 */}
      <section className="bg-[#2B3499] text-white py-12 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            关于我们
          </h1>
          <p className="text-lg md:text-xl text-center mt-4 opacity-90">
            创新科技，引领未来
          </p>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <Image
                src="/file.svg"
                alt="Company"
                width={500}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                公司简介
              </h2>
              <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                我们是一家致力于提供创新科技解决方案的高新技术企业，专注于人工智能、物联网、云计算等领域的技术研发和应用。
                自成立以来，我们始终坚持"创新驱动发展"的理念，不断突破技术边界，为客户创造价值。
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                公司拥有一支高素质的研发团队，多年以来积累了丰富的行业经验和技术积淀。
                我们的产品和解决方案已成功服务于众多行业领域，赢得了客户的广泛认可和信赖。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            发展历程
          </h2>
          <div className="relative">
            {/* 时间线 */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2B3499]"></div>
            <div className="space-y-6 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-8"
                        : "md:text-left md:pl-8"
                    }`}
                  >
                    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl md:text-2xl font-bold text-[#2B3499] mb-2">
                        {milestone.year}
                      </h3>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#2B3499] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            专业团队
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {teams.map((team, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={team.image}
                    alt={team.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    {team.name}
                  </h3>
                  <p className="text-gray-600">{team.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            企业文化
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold text-[#2B3499] mb-3 md:mb-4">
                愿景
              </h3>
              <p className="text-gray-600">成为全球领先的科技创新企业</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold text-[#2B3499] mb-3 md:mb-4">
                使命
              </h3>
              <p className="text-gray-600">用科技创新改变世界</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold text-[#2B3499] mb-3 md:mb-4">
                价值观
              </h3>
              <p className="text-gray-600">诚信、创新、协作、卓越</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg md:text-xl font-bold text-[#2B3499] mb-3 md:mb-4">
                精神
              </h3>
              <p className="text-gray-600">追求卓越，永不止步</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
