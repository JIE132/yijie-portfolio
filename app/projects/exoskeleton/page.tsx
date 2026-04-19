"use client";
import { useRouter } from "next/navigation";

export default function ExoskeletonDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans pb-24">
      {/* 顶部导航 */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <button onClick={() => router.push("/")} className="text-sm font-bold hover:text-[#0055A4] transition-colors">
          ← 返回主页 / BACK
        </button>
        <div className="text-[10px] font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded-full border tracking-widest">
          UCI SAMUELI SCHOOL OF ENGINEERING
        </div>
      </nav>

      <article className="max-w-5xl mx-auto px-6 mt-16">
        {/* --- 第一部分：背景介绍 --- */}
        <section className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">踝关节外骨骼快速连接设计</h1>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-700">
              <div className="border-l-4 border-[#0055A4] pl-6 py-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">背景与目标 / Background & Objective</h2>
                <p className="leading-relaxed">
                  针对医用踝关节外骨骼模型，设计并改进一种快速连接/释放机制。旨在解决中风患者康复过程中的穿戴便捷性问题。
                </p>
              </div>
              <div className="border-l-4 border-[#0055A4] pl-6 py-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-2">个人贡献 / My Contribution</h2>
                <p className="leading-relaxed text-sm">
                  作为四人小组的一员，负责快拆机构的方案设计、CAD 建模、FEA 分析验证及实物原型制作。
                </p>
              </div>
            </div>
            {/* 这里的图片使用 w-full h-auto 确保无缝隙 */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <img src="/images/exo_main.png" alt="整体CAD图" className="w-full h-auto block" />
              <p className="text-[10px] text-center py-2 text-gray-400 bg-gray-50 font-mono border-t">FIG 1. 整体 CAD 模型渲染图</p>
            </div>
          </div>
        </section>

        {/* --- 第二部分：具体设计 (Keyhole) --- */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#0055A4]"></span> 具体设计 / MECHANICAL DESIGN
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl">
            核心方案采用 <strong>Keyhole（键孔）锁紧机制</strong>。通过在鞋底安装定制钥匙盒，与外骨骼底版突起结构精准咬合，确保 ≥100N 锁紧强度并实现秒级拆装。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FIG 2.1 - 2.3 使用无固定高度比例的容器，消除白边 */}
            {[
              { id: "1", title: "装置截面分析图" },
              { id: "2", title: "关键几何参数 A" },
              { id: "3", title: "关键几何参数 B" }
            ].map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <img 
                    src={`/images/exo_detail_${item.id}.png`} 
                    alt={item.title} 
                    className="w-full h-auto block" 
                  />
                </div>
                <p className="text-[10px] text-gray-400 font-mono text-center uppercase tracking-tighter">FIG 2.{item.id} {item.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 第三部分：FEA 与 实物原型 --- */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#0055A4]"></span> 仿真验证与实物原型 / FEA & PROTOTYPING
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Von Mises 分析 */}
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <img src="/images/exo_fea_1.png" alt="Von Mises Stress" className="w-full h-auto block" />
              </div>
              <h3 className="text-sm font-bold text-gray-800">1. 应力分布分析 (Von Mises Stress)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">验证在 150N 静态载荷下结构强度，最大应力远低于材料屈服极限。</p>
            </div>
            {/* URES 分析 */}
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <img src="/images/exo_fea_2.png" alt="Resultant Displacement" className="w-full h-auto block" />
              </div>
              <h3 className="text-sm font-bold text-gray-800">2. 位移形变分析 (URES)</h3>
              <p className="text-xs text-gray-500 leading-relaxed">量化连接座在受力时的微米级位移，确保机构在高频行走中的稳定性。</p>
            </div>
          </div>

          {/* 实物原型：对于照片，我们使用 object-cover 保持整齐 */}
          <div className="grid grid-cols-3 gap-4">
            {["1", "2", "3"].map((num) => (
              <div key={num} className="border border-gray-200 rounded-lg overflow-hidden aspect-square">
                <img 
                  src={`/images/exo_proto_${num}.png`} 
                  className="w-full h-full object-cover" 
                  alt={`Prototype ${num}`} 
                />
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-4 font-mono uppercase tracking-widest">Physical Prototype & Testing</p>
        </section>

        {/* --- 第四部分：团队海报与合影 --- */}
        <section className="border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold mb-10 text-center">团队展示 / TEAM COLLABORATION</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <img src="/images/exo_exhibit_1.png" className="w-full h-auto block" alt="Technical Poster" />
              </div>
              <p className="text-xs text-gray-400 text-center font-mono uppercase">Technical Poster</p>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <img src="/images/exo_exhibit_2.png" className="w-full h-auto block" alt="Group Photo" />
              </div>
              <p className="text-xs text-gray-400 text-center font-mono uppercase">Project Team @ UCI</p>
            </div>
          </div>
        </section>

      </article>

      <footer className="max-w-5xl mx-auto mt-32 py-12 border-t text-center text-gray-300 text-[10px] font-mono uppercase tracking-[0.2em]">
        Engineering Portfolio · Yijie Xu · 2026
      </footer>
    </div>
  );
}