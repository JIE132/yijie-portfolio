"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projectList = [
  { id: "exoskeleton", title: "踝关节外骨骼快速连接设计", sub: "UCI 实验室 · 机械设计与有限元分析" },
  { id: "octopod", title: "八足机器人开发 (Octopod)", sub: "机器人学 · Arduino 控制 · C++" },
  { id: "haitian", title: "海天塑机集团实习", sub: "工业测量 · CNC 加工环境研究" }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121212] font-sans pb-20">
      {/* 顶部标题区 */}
      <header className="max-w-5xl mx-auto pt-24 px-6 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-8">
          <div>
            <h1 className="text-5xl font-bold tracking-tighter mb-2">徐翊杰 / YIJIE XU</h1>
            <p className="text-xl text-[#0055A4] font-medium">机械工程与智能制造 | 美国南加州大学(USC)硕士</p>
          </div>
          <div className="mt-6 md:mt-0 text-right font-mono text-xs space-y-1 text-gray-500">
            <p>📞 +86 18067233117</p>
            <p>📧 yijiexu2003@outlook.com</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* 左侧栏：教育与技能 */}
        <div className="md:col-span-1 space-y-12">
          <section>
            <h2 className="text-sm font-bold tracking-widest text-gray-400 mb-6 border-b border-gray-200 pb-2">
              教育背景 / EDUCATION
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-base">南加州大学 (USC)</h3>
                <p className="text-xs text-gray-500 mt-1">硕士 · 智能制造 | 2025 - 2026</p>
                <p className="text-xs text-blue-600 mt-2 leading-relaxed">机电一体化系统、3D打印工艺优化、工业机械臂控制</p>
              </div>
              <div>
                <h3 className="font-bold text-base">加州大学欧文分校 (UCI)</h3>
                <p className="text-xs text-gray-500 mt-1">学士 · 机械工程 | 2021 - 2025</p>
                <p className="text-xs text-blue-600 mt-2 leading-relaxed">机械设计原理、动力学与振动、流体力学</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-bold tracking-widest text-gray-400 mb-6 border-b border-gray-200 pb-2">
              专业技能 / SKILLS
            </h2>
            <div className="space-y-5 text-sm">
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 mb-1 uppercase">设计与仿真</h4>
                <p className="font-medium">SolidWorks, FEA (有限元分析), MATLAB</p>
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 mb-1 uppercase">控制与制造</h4>
                <p className="font-medium">Arduino (C++), 激光切割, 3D 打印</p>
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 mb-1 uppercase">语言能力</h4>
                <p className="font-medium">中文 (母语), 英语 (熟练)</p>
              </div>
            </div>
          </section>
        </div>

        {/* 右侧栏：项目展示 */}
        <div className="md:col-span-2">
          <h2 className="text-sm font-bold tracking-widest text-gray-400 mb-6 border-b border-gray-200 pb-2">
            精选项目 / PROJECTS
          </h2>
          <div className="space-y-6">
            {projectList.map((p) => (
              <Link href={`/projects/${p.id}`} key={p.id}>
                <motion.div 
                  whileHover={{ x: 8, borderColor: "#0055A4" }}
                  className="group bg-white border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all cursor-pointer relative"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-[#0055A4] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium">{p.sub}</p>
                    </div>
                    <span className="text-2xl text-gray-200 group-hover:text-[#0055A4] transition-colors">→</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="max-w-5xl mx-auto px-6 mt-32 py-12 border-t border-gray-100 text-[10px] font-mono text-gray-300 flex justify-between uppercase">
        <span>© 2026 YIJIE XU</span>
        <span>USC Master of Smart Manufacturing</span>
      </footer>
    </div>
  );
}