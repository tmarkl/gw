import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "智能制造解决方案",
      description:
        "为制造业提供智能化、数字化的生产线解决方案，提高生产效率和产品质量。",
      features: [
        "智能生产线管理",
        "实时数据监控",
        "预测性维护",
        "质量控制系统",
      ],
      image: "/window.svg",
    },
    {
      id: 2,
      name: "物联网平台",
      description:
        "全方位的物联网平台解决方案，实现设备互联、数据采集和智能分析。",
      features: ["设备连接管理", "数据采集分析", "远程监控", "智能决策支持"],
      image: "/window.svg",
    },
    {
      id: 3,
      name: "云计算服务",
      description: "安全可靠的云计算基础设施和服务，助力企业数字化转型。",
      features: ["弹性计算资源", "数据存储服务", "容器化部署", "安全防护"],
      image: "/window.svg",
    },
    {
      id: 4,
      name: "大数据分析平台",
      description: "强大的数据分析能力，帮助企业挖掘数据价值，实现精准决策。",
      features: ["数据采集整合", "实时分析处理", "可视化展示", "智能预测"],
      image: "/window.svg",
    },
    {
      id: 5,
      name: "人工智能应用",
      description: "先进的人工智能技术应用，为企业提供智能化升级方案。",
      features: ["机器学习算法", "计算机视觉", "自然语言处理", "智能决策系统"],
      image: "/window.svg",
    },
    {
      id: 6,
      name: "区块链解决方案",
      description: "安全可信的区块链技术应用，实现业务流程的透明化和可追溯。",
      features: ["智能合约", "供应链追溯", "数据安全", "去中心化应用"],
      image: "/window.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-[64px]">
      {/* 产品展示页面标题 */}
      <section className="bg-[#2B3499] text-white py-12 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            产品展示
          </h1>
          <p className="text-lg md:text-xl text-center mt-4 opacity-90">
            为您提供全方位的技术解决方案
          </p>
        </div>
      </section>

      {/* 产品列表 */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 md:mb-6">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#2B3499]">主要特点：</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-4 md:mt-6 w-full bg-[#2B3499] text-white py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    了解详情
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
