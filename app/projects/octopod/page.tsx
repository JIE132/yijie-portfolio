"use client";
import { useRouter } from "next/navigation";

export default function RobotDetail() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-[#121212] font-sans pb-24">
      {/* 顶部导航 */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <button onClick={() => router.push("/")} className="text-sm font-bold hover:text-[#0055A4] transition-colors">
          ← 返回主页 / BACK
        </button>
        <div className="text-[10px] font-mono text-gray-400 bg-gray-50 px-3 py-1 rounded-full border tracking-widest uppercase">
          UCI Mechatronics Engineering
        </div>
      </nav>

      <article className="max-w-6xl mx-auto px-6 mt-16">
        {/* --- 第一部分：项目概览与等比例 CAD 三视图 --- */}
        <section className="mb-24">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">四杆结构八足机器人设计</h1>
            <div className="flex flex-col md:flex-row gap-6 md:items-center border-l-4 border-blue-600 pl-6 py-2 bg-gray-50 rounded-r-xl">
              <p className="text-gray-600 italic flex-grow text-sm leading-relaxed">
                基于 Arduino Mega 2560 开发的全向移动平台，采用创新的四杆联动机构与丝杆驱动系统。
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] text-blue-700 font-mono font-bold uppercase">
                <span className="bg-blue-50 px-2 py-1 rounded">#Arduino Mega</span>
                <span className="bg-blue-50 px-2 py-1 rounded">#HC-05 BT</span>
                <span className="bg-blue-50 px-2 py-1 rounded">#Laser Cutting</span>
                <span className="bg-blue-50 px-2 py-1 rounded">#SolidWorks</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "1", title: "等轴测视图 / ISO VIEW" },
              { id: "2", title: "俯视图 / TOP VIEW" },
              { id: "3", title: "侧视图 / SIDE VIEW" }
            ].map((img) => (
              <div key={img.id} className="space-y-3">
                <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white aspect-[4/3] flex items-center justify-center p-4">
                  <img 
                    src={`/images/robot_main_${img.id}.png`} 
                    className="max-w-full max-h-full object-contain" 
                    alt={img.title} 
                  />
                </div>
                <p className="text-[10px] text-gray-400 font-mono text-center uppercase tracking-wider">FIG 1.{img.id} {img.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 第二部分：核心机制 - 丝杆前腿设计与模拟视频 --- */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-blue-600"></span> 前腿丝杆机制 / LEAD SCREW MECHANISM
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <p className="text-gray-700 leading-relaxed text-sm">
                  我主要负责<strong>前腿部的精密设计与运动学仿真</strong>。
                </p>
              </div>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">01.</span>
                  <span><strong>腿部结构：</strong> 机器人腿部采用经典的四连杆机构设计，通过优化各杆件的长度比例，实现了特定的足端运动轨迹（Foot Trajectory）。这种结构不仅能有效放大舵机/电机的扭矩，还能在保持轻量化的同时，确保步态在复杂地形下的稳定性。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">02.</span>
                  <span><strong>运动学优化：</strong> 通过 SolidWorks Motion 模拟四杆联动轨迹，确保足端步幅与整体重心移动协调。</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-white">
                 <img src="/images/robot_leg_cad.png" className="w-full h-auto block" alt="前腿特写" />
              </div>
              
              {/* 模拟视频：MP4 格式 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md bg-black aspect-video">
                <video 
                  controls 
                  playsInline
                  className="w-full h-full object-contain"
                  poster="/images/robot_leg_cad.png"
                >
                  <source src="/videos/robot_sim.mp4" type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* --- 第三部分：实物装配照片 --- */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-blue-600"></span> 实物原型展示 / PHYSICAL PROTOTYPE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
                <img src="/images/robot_real_1.png" className="w-full h-auto block" alt="实物侧视图" />
              </div>
              <p className="text-[10px] text-gray-400 text-center font-mono uppercase">Side Profile - Structure Assembly</p>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
                <img src="/images/robot_real_2.png" className="w-full h-auto block" alt="实物顶视图" />
              </div>
              <p className="text-[10px] text-gray-400 text-center font-mono uppercase">Top Profile - Electronics & Control</p>
            </div>
          </div>
        </section>

        {/* --- 第四部分：运动视频展示 (已更新为 MP4) --- */}
        <section className="bg-[#121212] text-white p-12 rounded-3xl overflow-hidden relative shadow-2xl">
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-blue-400">实际运动测试 / FINAL MOTION DEMO</h2>
            
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black max-w-3xl mx-auto">
              <video 
                controls 
                playsInline
                className="w-full h-auto"
                preload="metadata"
              >
                {/* 优先读取 MP4 格式 */}
                <source src="/videos/robot_walk.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="text-xs text-gray-500 mt-10 leading-relaxed max-w-lg mx-auto font-mono">
              [ STATUS: TEST SUCCESSFUL ] <br/>
              通过自主编写的 Arduino Mega 2560 固件，实现了基于蓝牙指令的平稳全向移动。
            </p>
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-900/10 blur-[100px]"></div>
        </section>

      </article>

      <footer className="max-w-6xl mx-auto mt-32 py-12 border-t text-center text-gray-300 text-[10px] font-mono uppercase tracking-[0.2em]">
        Engineering Portfolio · Yijie Xu · 2026
      </footer>
    </div>
  );
}