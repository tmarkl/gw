'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#2B3499] text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Image
            src="/next.svg"
            alt="Logo"
            width={32}
            height={32}
            className="invert"
          />
          <span className="text-lg md:text-2xl font-bold">企业名称</span>
        </div>

        {/* 桌面端导航链接 */}
        <div className="hidden md:flex space-x-12">
          <Link
            href="/"
            className="text-lg hover:text-gray-300 transition-colors relative group"
          >
            首页
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            {pathname === "/" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
            )}
          </Link>
          <Link
            href="/products"
            className="text-lg hover:text-gray-300 transition-colors relative group"
          >
            产品展示
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            {pathname === "/products" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
            )}
          </Link>
          <Link
            href="/about"
            className="text-lg hover:text-gray-300 transition-colors relative group"
          >
            关于我们
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            {pathname === "/about" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
            )}
          </Link>
          <Link
            href="/news"
            className="text-lg hover:text-gray-300 transition-colors relative group"
          >
            新闻资讯
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            {pathname === "/news" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white" />
            )}
          </Link>
        </div>

        {/* 移动端菜单按钮 */}
        <div className="md:hidden relative">
          <button
            className="text-white focus:outline-none p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* 移动端下拉菜单 */}
          {isMenuOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
              <Link
                href="/"
                className={`block px-4 py-2 text-sm ${pathname === "/" ? 'text-[#2B3499] font-semibold bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                首页
              </Link>
              <Link
                href="/products"
                className={`block px-4 py-2 text-sm ${pathname === "/products" ? 'text-[#2B3499] font-semibold bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                产品展示
              </Link>
              <Link
                href="/about"
                className={`block px-4 py-2 text-sm ${pathname === "/about" ? 'text-[#2B3499] font-semibold bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                关于我们
              </Link>
              <Link
                href="/news"
                className={`block px-4 py-2 text-sm ${pathname === "/news" ? 'text-[#2B3499] font-semibold bg-gray-100' : 'text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                新闻资讯
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}