"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HaitianDetail() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white p-10">
      <button onClick={() => router.push("/")} className="text-xs font-bold font-mono mb-8 hover:text-blue-600 underline">
        ← BACK TO INDEX
      </button>

      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">海天塑机集团实习</h1>
        <p className="text-gray-500 italic mb-10 border-l-4 border-gray-600 pl-4">工业级测量系统研究：Renishaw SPRINT 系统对比分析。</p>
        
        <div className="space-y-8 text-gray-700 leading-loose">
          <p>在海天实习期间，我主导了针对 CNC 机床环境的测量方案调研，重点对比了 <strong>Renishaw SPRINT</strong> 模拟扫描系统与传统的非接触式光学扫描。 </p>
          <p className="bg-gray-50 p-6 border-t-2 border-gray-300">
            核心产出：撰写了详尽的选型报告，从采样率、重复定位精度以及恶劣工况下的耐用性三个维度进行了量化评估，为生产线的非接触式改造提供了决策依据。
          </p>
        </div>
      </article>
    </div>
  );
}