import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Flower, 
  BookOpen, 
  Sprout, 
  Lightbulb, 
  Eye, 
  BrainCircuit, 
  HeartHandshake,
  Mail,
  Phone,
  Sparkles,
  Cpu,
  GraduationCap,
  Trophy,
  ExternalLink,
  X,
  Menu,
  FileText,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Project, Experience, PortfolioItem, ThoughtBubble } from './types';

// --- Decorative Components ---

const HandDrawnDivider = () => (
  <div className="w-full flex justify-center my-12 opacity-30 text-algernon-teal">
    <svg width="100" height="20" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M0 10 C 20 20, 30 0, 50 10 C 70 20, 80 0, 100 10" />
    </svg>
  </div>
);

const SectionHeading: React.FC<{ title: string; subtitle: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="text-center mb-16 relative z-10 reveal">
    <div className="flex justify-center mb-3 text-algernon-teal animate-float drop-shadow-sm">
      {icon || <Flower size={24} />}
    </div>
    <h2 className="font-serif text-3xl md:text-4xl text-algernon-ink font-bold mb-2 tracking-wide drop-shadow-sm">{title}</h2>
    <div className="w-12 h-1 bg-algernon-coral mx-auto rounded-full opacity-80 mb-4 shadow-sm"></div>
    <p className="font-sans text-algernon-ink/70 text-sm tracking-widest uppercase font-semibold">{subtitle}</p>
  </div>
);

// --- Content Components ---

// 0. Top Navigation
const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'internship', label: '实习经历' },
    { id: 'projects', label: '项目竞赛' },
    { id: 'portfolio', label: 'AIGC作品' },
    { id: 'thoughts', label: '碎片思考' }
  ];

  return (
    <nav className="w-full py-5 md:py-6 px-5 md:px-12 absolute top-0 left-0 z-50">
      <div className="flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl font-bold text-algernon-teal flex items-center gap-2">
          <Flower size={24} className="text-algernon-coral shrink-0" />
          <span>Fiona的个人主页</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-10 font-sans font-medium text-algernon-ink/80">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-algernon-coral transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-algernon-coral group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
        <a href="mailto:feiwanyan163@163.com" className="hidden md:inline-flex px-6 py-2.5 bg-algernon-teal text-white rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all items-center gap-2">
          <Mail size={16} /> 联系我
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={menuOpen}
          className="md:hidden p-2 -mr-2 text-algernon-ink/80 hover:text-algernon-coral transition-colors"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 bg-white/80 backdrop-blur-md border border-white/60 rounded-2xl shadow-glass p-4 flex flex-col gap-1 animate-fade-up">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="py-3 px-3 rounded-xl font-sans font-medium text-algernon-ink/80 hover:bg-algernon-teal/10 hover:text-algernon-coral transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:feiwanyan163@163.com"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-6 py-3 bg-algernon-teal text-white rounded-full text-sm font-bold shadow-md hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2"
          >
            <Mail size={16} /> 联系我
          </a>
        </div>
      )}
    </nav>
  );
};

// 1. Hero (Split Layout with Galaxy Animation)
const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative pt-28 pb-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative center glow - Subtle & Wide */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/40 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-8 lg:gap-16 w-full">
        
        {/* Left: Text Content - Strictly Left Aligned on Desktop */}
        <div className="flex-1 w-full text-center md:text-left space-y-6 z-10 animate-fade-up">
           <div className="font-serif text-xl md:text-2xl text-algernon-teal italic font-medium">Hello, I'm Fiona</div>
           <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-algernon-ink font-bold tracking-tight leading-[1.1]">
             费婉燕 <span className="text-algernon-coral">.</span>
           </h1>
           
           <h2 className="font-sans text-lg md:text-xl text-algernon-ink/80 font-bold leading-relaxed flex flex-wrap gap-2 justify-center md:justify-start items-center">
             <span>浙大研一</span>
             <span className="text-algernon-teal">•</span>
             <span>AI产品经理</span>
             <span className="text-algernon-teal">•</span>
             <span>AIGC创作者</span>
           </h2>

           {/* Awards */}
           <div className="glass-edge bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl p-4 inline-block text-left shadow-glass">
              <div className="flex items-start gap-2 text-algernon-coral font-bold text-sm mb-1">
                <Trophy size={16} className="mt-0.5" />
                <span>获奖经历</span>
              </div>
              <ul className="text-sm text-algernon-ink/80 space-y-1 pl-6 list-disc marker:text-algernon-coral/50">
                 <li>抖音黑客松26年长三角选拔赛 <span className="font-bold text-algernon-teal">冠军</span>（solo）</li>
                 <li>抖音黑客松25年全国 <span className="font-bold text-algernon-teal">三等奖</span>（队长）</li>
              </ul>
           </div>
           
           {/* Education List */}
           <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-algernon-ink/60 text-sm font-bold uppercase tracking-wider justify-center md:justify-start">
                 <GraduationCap size={16} /> 教育背景
              </div>
              <div className="space-y-2 text-sm md:text-base text-algernon-ink/80">
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 justify-center md:justify-start">
                    <span className="font-mono text-xs opacity-60 bg-white/60 px-2 py-0.5 rounded">2025.09-2027.06</span>
                    <span className="font-bold">浙江大学 (保研)</span>
                    <span className="hidden md:inline text-algernon-teal/40">|</span>
                    <span>社会工作 / 硕士</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 justify-center md:justify-start">
                    <span className="font-mono text-xs opacity-60 bg-white/60 px-2 py-0.5 rounded">2022.09-2024.06</span>
                    <span className="font-bold">复旦大学 (联培)</span>
                    <span className="hidden md:inline text-algernon-teal/40">|</span>
                    <span>社会工作 / 本科</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 justify-center md:justify-start">
                    <span className="font-mono text-xs opacity-60 bg-white/60 px-2 py-0.5 rounded">2021.09-2025.06</span>
                    <span className="font-bold">云南大学 (211)</span>
                    <span className="hidden md:inline text-algernon-teal/40">|</span>
                    <span>社会工作 / 本科</span>
                  </div>
              </div>
           </div>

           {/* Buttons & Contact */}
           <div className="flex flex-col gap-4 pt-4">
               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a href="#internship" className="px-8 py-3.5 bg-algernon-teal text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all font-bold tracking-wide transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                    了解更多的我 <ArrowUpRight size={18} />
                  </a>
                  <a href="#portfolio" className="px-8 py-3.5 bg-white/60 backdrop-blur-sm text-algernon-teal border-2 border-algernon-teal/20 rounded-full shadow-glass hover:bg-white/90 transition-all font-bold tracking-wide transform hover:-translate-y-0.5 text-center">
                    查看作品
                  </a>
               </div>
               <div className="text-sm text-algernon-ink/60 font-medium flex items-center justify-center md:justify-start gap-2">
                 <Mail size={14} />
                 <span>请联系我：feiwanyan163@163.com</span>
               </div>
           </div>
        </div>

        {/* Right: Avatar & Galaxy Animation */}
        <div className="flex-1 relative flex justify-center items-center py-8 md:py-0 w-full">
           
           {/* Galaxy Container - Mimicking the reference's soft background shape */}
           <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] flex items-center justify-center">
              
              {/* The "Blob" Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-algernon-pink/30 via-algernon-canvas to-algernon-teal/10 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] blur-2xl animate-spin-slow opacity-80" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-white/60 to-transparent rounded-full blur-xl scale-90"></div>
              
              {/* Orbits - Concentric Rings */}
              {/* Orbit 1 */}
              <div className="absolute w-[120%] h-[120%] border border-algernon-teal/10 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-soft animate-wiggle">
                  <BrainCircuit size={20} className="text-algernon-teal" />
                </div>
              </div>

              {/* Orbit 2 */}
              <div className="absolute w-[95%] h-[95%] border border-algernon-coral/20 rounded-full animate-spin-slow" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-[15%] right-[-5%] p-2 bg-white/90 backdrop-blur-md rounded-full shadow-soft">
                  <HeartHandshake size={18} className="text-algernon-coral" />
                </div>
              </div>

              {/* Orbit 3 */}
              <div className="absolute w-[75%] h-[75%] border border-dashed border-algernon-ink/10 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                 <div className="absolute top-[30%] left-[-5%] p-2 bg-white/90 backdrop-blur-md rounded-full shadow-soft">
                    <Lightbulb size={16} className="text-algernon-ink/70" />
                 </div>
              </div>
              
              {/* Main Avatar Circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-3 border-4 border-white/80 shadow-glass backdrop-blur-sm bg-white/30 z-10 overflow-hidden group">
                 <div className="w-full h-full rounded-full overflow-hidden bg-algernon-warm-gray relative">
                    {/* Fallback pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-algernon-teal to-transparent"></div>
                    <img 
                      src={`${import.meta.env.BASE_URL}photo.jpg`}
                      alt="Fei Wanyan" 
                      className="w-full h-full object-cover scale-110 translate-y-2 group-hover:scale-115 transition-transform duration-700" 
                    />
                 </div>
              </div>

              {/* Floating Tech Bits around */}
              <div className="absolute top-[10%] right-[10%] opacity-40 animate-float-delayed">
                <Cpu size={24} className="text-algernon-ink" />
              </div>
              <div className="absolute bottom-[10%] left-[10%] opacity-40 animate-float">
                <Sparkles size={24} className="text-algernon-coral" />
              </div>

           </div>
        </div>
      </div>
    </section>
  );
};

// 2. Internship Timeline
const InternshipSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences: Experience[] = [
    {
      company: "阿里（千问APP）",
      role: "AI 产品经理实习生",
      period: "2026.01 - 2026.05",
      achievement: "千问TTS播报体验优化 & 新增音色矩阵建设",
      highlight: "数据驱动 TTS 渗透率提升",
      details: {
        projects: [
          {
            title: "千问 TTS 播报体验优化",
            items: [
              { label: "完善数据指标建设", value: "以提升TTS渗透率为业务目标，针对当前数据看板无法分析用户语音使用偏好的问题，梳理缺失埋点并提需，健全数据看板建设，通过对用户的高/低播报率场景进行归因分析，为播报策略迭代提供数据支撑。" },
              { label: "TTS 巡检流程设计", value: "针对当前巡检标准与用户体感差距大的问题，从产品侧重新制定巡检标准，并实现\"巡检发现问题-修复问题-检验已修问题-发现新问题\"的闭环巡检流程设计。" },
              { label: "播报策略优化", value: "针对巡检发现和日常体验的TTS播报问题开展调研，从端侧策略、TN规则、TTS模型及工程链路侧提出优化需求并推进上线；推进声音克隆功能的上线与迭代，通过自定义语音的体验优化拉动TTS渗透。" }
            ]
          },
          {
            title: "千问新增音色矩阵建设",
            items: [
              { label: "竞品调研", value: "针对千问APP当前AI音色类型单一、质量差的问题，深度调研竞品豆包音色现状并跟踪新增音色动态，洞察出用户偏好的不同年龄、方言和语种、气质类型的音色分布。" },
              { label: "策略规划", value: "结合千问用户画像，规划26年千问音色矩阵，在满足通用音色基础上，差异化侧重中老年用户偏好音色。" },
              { label: "执行落地", value: "参与优质音色寻源与评测标准建立，推进音色评选、录制与模型训练，确保新增音色按规划上线。" }
            ]
          }
        ]
      }
    },
    {
      company: "百度 (Baidu)",
      role: "AI 策略产品经理实习生",
      period: "2025.03 - 2025.08",
      achievement: "知识库切片策略优化&评估标准建设&MCP工具引入",
      highlight: "知识库准召率优化51% → 79%",
      details: {
        projects: [
          {
            title: "文心智能体平台 | 知识库切片策略优化",
            background: "针对智能体知识库召回准确率低的问题，分析发现重要原因之一是知识库入库切片策略不当。",
            analysis: "通过对3千条知识库数据分析，从知识库用法场景、内容特征和切片效果维度，定位到两大主要问题根源：长文本类知识库按固定token数切片破坏语义，多模态类知识库多模态识别能力缺失。",
            strategy: "高优解决长文本的语义完整性问题，开发基于章节的结构化切片能力。次优开发多模态内容识别能力。",
            results: "该方案为算法团队提供了清晰的优化路径，在离线评测中将检索准确率从51%提升至79%。"
          },
          {
            title: "心响（通用Agent产品） | 评估标准建设&MCP工具引入",
            background: "针对通用Agent产品心响，需在0-1阶段搭建效果评估标准，同时引入MCP工具以满足用户多场景需求。",
            analysis: "针对web view等功能迭代，构建评估标准和评估集，通过管理外包评估与Bad Case数据透视，得出具体的策略优化需求，实现数据驱动决策。",
            strategy: "基于2000条用户query，量化各类MCP工具的需求占比，明确MCP工具引入优先级并推进上线。针对工具调用效果差的问题，采取\"Agent传参-工具返参-模型总结\"的全链路逐层检测的方法快速排查。",
            results: "建立了一套可复用的评估体系，实现了数据驱动决策，提升了端到端问题排查的效率。"
          }
        ]
      }
    },
    {
      company: "拜耳 (Bayer)",
      role: "项目经理实习生",
      period: "2024.09 - 2024.12",
      achievement: "AI 视频监控项目",
      highlight: "推动AI视频监控项目落地",
      details: {
        projects: [
          {
            title: "AI视频监控项目",
            background: "负责推动AI视频监控项目落地，通过实时监测人员行为、设备状态等，提升企业安全和生产效率。",
            analysis: "深入厂区，联合生产、工程和质量等多部门调研，精准识别安全与生产监控需求，撰写需求文档，为项目开发指引方向。",
            strategy: "协同技术团队，主导功能架构设计，规划多种监测功能与摄像头位置，明确技术指标与业务逻辑。",
            results: "规划数据分析体系搭建，明确分析维度与可视化展示需求，为后续数据驱动决策奠定基础。"
          }
        ]
      }
    },
    {
      company: "塔睿咨询",
      role: "咨询分析师",
      period: "2023.11 - 2024.3",
      achievement: "竞品调研与数据分析",
      highlight: "输出 20+ 份数据图表",
      details: {
        responsibilities: [
          "竞品调研：针对印刷机行业，通过案头研究和专家访谈，对亚洲市场竞品企业进行全面深入调研。",
          "数据分析：基于Excel对合作方提供的印刷机装机与销售数据进行清洗和型号匹配，估算竞品企业在目标市场的销售总额，并基于Excel数据可视化生成20+份图表。",
          "报告交付：负责绘制竞品分析部分PPT，涉及装机容量、销售额、支付模式、售后服务和社媒宣发等多维度数据，分析得出折叠纸盒和软包装两大细分领域竞争压力较小，发展潜力较大。"
        ]
      }
    }
  ];

  return (
    <section id="internship" className="py-16 md:py-24 px-5 sm:px-6 relative overflow-hidden">
      <SectionHeading title="实习经历" subtitle="Internship & Evolution" icon={<Sprout size={24}/>} />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Central Dashed Line */}
        <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-algernon-teal/30 transform md:-translate-x-1/2"></div>

        {experiences.map((exp, idx) => {
          const isExpanded = expandedIndex === idx;
          return (
            <div key={idx} style={{ ['--reveal-delay' as any]: `${idx * 90}ms` }} className={`reveal relative flex flex-col md:flex-row gap-8 mb-16 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
              
              {/* Timeline Node - Flower */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-9 h-9 bg-white/80 border-2 border-algernon-coral rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-md backdrop-blur-sm">
                 <div className="w-3 h-3 bg-algernon-coral rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-[45%] glass-edge bg-white/60 backdrop-blur-md rounded-2xl shadow-glass hover:shadow-xl transition-all duration-300 border border-white/50 relative hover:-translate-y-1 overflow-hidden">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-sans text-algernon-ink/70 mb-3 border border-white/20">
                    {exp.period}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-algernon-ink mb-1">{exp.company}</h3>
                  <p className="font-sans text-algernon-teal font-bold mb-3">{exp.role}</p>
                  <p className="text-sm text-algernon-ink/80 mb-2 leading-relaxed">{exp.achievement}</p>
                  <div className="text-sm font-bold text-algernon-coral bg-algernon-coral/10 px-3 py-2 rounded-lg inline-block border border-algernon-coral/10 mb-4">
                    ★ {exp.highlight}
                  </div>
                  
                  {/* Expand Button */}
                  {exp.details && (
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                      className="w-full mt-4 flex items-center justify-center gap-2 text-sm font-sans text-algernon-teal hover:text-algernon-coral transition-colors font-bold py-2 px-4 rounded-lg border border-algernon-teal/20 hover:border-algernon-coral/30 bg-white/50 hover:bg-white/70 transition-all"
                    >
                      {isExpanded ? (
                        <>
                          <span>收起详情</span>
                          <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          <span>查看更多</span>
                          <ChevronDown size={16} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Expanded Details */}
                {isExpanded && exp.details && (
                  <div className="px-6 pb-6 border-t border-algernon-teal/10 pt-4 space-y-6 animate-fade-up">
                    {exp.details.projects && exp.details.projects.map((project, pIdx) => (
                      <div key={pIdx} className="space-y-3">
                        <h4 className="font-serif text-lg font-bold text-algernon-ink border-l-4 border-algernon-teal pl-3">
                          {project.title}
                        </h4>
                        {project.background && (
                          <div>
                            <span className="text-xs font-bold text-algernon-teal uppercase tracking-wider block mb-1">项目背景</span>
                            <p className="text-sm text-algernon-ink/80 leading-relaxed">{project.background}</p>
                          </div>
                        )}
                        {project.analysis && (
                          <div>
                            <span className="text-xs font-bold text-algernon-teal uppercase tracking-wider block mb-1">归因分析</span>
                            <p className="text-sm text-algernon-ink/80 leading-relaxed">{project.analysis}</p>
                          </div>
                        )}
                        {project.strategy && (
                          <div>
                            <span className="text-xs font-bold text-algernon-teal uppercase tracking-wider block mb-1">优化策略</span>
                            <p className="text-sm text-algernon-ink/80 leading-relaxed">{project.strategy}</p>
                          </div>
                        )}
                        {project.results && (
                          <div>
                            <span className="text-xs font-bold text-algernon-coral uppercase tracking-wider block mb-1">项目收益</span>
                            <p className="text-sm text-algernon-ink/80 leading-relaxed">{project.results}</p>
                          </div>
                        )}
                        {project.items && project.items.map((item, iIdx) => (
                          <div key={iIdx}>
                            <span className="text-xs font-bold text-algernon-teal uppercase tracking-wider block mb-1">{item.label}</span>
                            <p className="text-sm text-algernon-ink/80 leading-relaxed">{item.value}</p>
                          </div>
                        ))}
                        {pIdx < exp.details.projects!.length - 1 && (
                          <div className="border-t border-algernon-teal/10 pt-4"></div>
                        )}
                      </div>
                    ))}
                    {exp.details.responsibilities && (
                      <div className="space-y-3">
                        <h4 className="font-serif text-lg font-bold text-algernon-ink border-l-4 border-algernon-teal pl-3 mb-3">
                          主要职责
                        </h4>
                        <ul className="space-y-3">
                          {exp.details.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="text-sm text-algernon-ink/80 leading-relaxed flex items-start gap-2">
                              <span className="text-algernon-coral mt-1.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Empty space for the other side */}
              <div className="hidden md:block md:w-[45%]"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// Image Carousel Component
const ImageCarousel: React.FC<{ images: string[]; alt: string }> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || startX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setIsDragging(false);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setIsDragging(false);
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setStartX(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform duration-300 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0">
            <img 
              src={img} 
              alt={`${alt} - 图片 ${idx + 1}`}
              className="w-full h-full object-contain bg-algernon-warm-gray/30"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="上一张"
          >
            <ChevronLeft size={20} className="text-algernon-ink" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all z-10 opacity-0 group-hover:opacity-100"
            aria-label="下一张"
          >
            <ChevronRight size={20} className="text-algernon-ink" />
          </button>
          
          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex 
                    ? 'bg-algernon-teal w-6' 
                    : 'bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`跳转到图片 ${idx + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full z-20 pointer-events-none">
            右滑查看更多原型图
          </div>
          
          {/* Image Counter */}
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm z-10">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

// 3. Projects - Polaroid Grid
const ProjectsSection: React.FC = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: "P0",
      title: "做自己的 Tony",
      tags: ["AI 染发", "Claude Vision", "黑客松冠军"],
      award: "26年抖音黑客松长三角top高校选拔赛 - 冠军 (2026.05.24)",
      description: "面向DIY染发爱好者的AI助手：仅需上传个人发色照片，即可判断能否染成博主发色、推荐染膏并跳转淘宝、计算调配比例、指导操作细节。",
      details: [
        { label: "需求分析", value: "作为染发爱好者，洞悉到DIY染发跟着博主教程容易翻车的痛点。该产品仅需上传个人发色照片，即可判断能否染成博主发色、推荐染膏并跳转淘宝、调配比例、操作细节指导等。" },
        { label: "项目成果", value: "solo参加2026年抖音黑客松长三角top高校选拔赛，20小时内完成demo，获选拔赛冠军。" }
      ],
      link: "https://my-tony-1snbp32bk-fionas-projects-b5534e52.vercel.app/",
      linkText: "体验产品 Demo",
      imageAlt: "做自己的 Tony - AI染发助手 Demo 演示",
      videoUrl: "https://player.bilibili.com/player.html?bvid=BV1SBEJ6XEAa"
    },
    {
      id: "P1",
      title: "聊聊简历（AI产品）",
      tags: ["AI 对话", "简历生成", "模拟面试"],
      award: "抖音AI创变者大赛 - 三等奖",
      description: "通过AI引导式对话，帮助求职者深度复盘个人经历，并将其沉淀为可复用的个人经历库。进一步提供多岗位定制简历、模拟面试及面试复盘报告，覆盖求职准备全流程。",
      details: [
        { label: "需求分析", value: "洞察到大学生\"不知道如何把简历写深入\"的痛点，现有AI工具仅能润色文字，无法解决内容深度问题。" },
        { label: "产品方案", value: "AI引导式对话深度复盘经历，沉淀经历库。提供定制简历、模拟面试及复盘报告，覆盖求职全流程。" },
        { label: "主导实行", value: "作为产品负责人，在48小时开发周期内，主导跨职能协作，让产品从构想成功落地为MVP。" },
        { label: "项目价值", value: "在抖音AI创变者大赛中获得三等奖及3万元奖金。" }
      ],
      link: "https://u2625171-8bf0-35c3e933.westb.seetacloud.com:8443/projects",
      linkText: "体验产品 (服务器维护中，请看演示视频)",
      imageAlt: "聊聊简历视频",
      videoUrl: "https://player.bilibili.com/player.html?bvid=BV1zrm6BYETY"
    },
    {
      id: "P2",
      title: "小鹅记账 (AI Agent)",
      tags: ["Coze Workflow", "情感化设计", "FinTech"],
      award: "腾讯微众银行产品经理竞赛 - 全国20强",
      description: "面向年轻人的陪伴式AI记账app，通过萌宠陪伴的方式，鼓励用户坚持记账，并提供智能理财建议。",
      details: [
        { label: "需求洞察", value: "识别年轻用户对趣味性和情感陪伴的记账需求，确立AI萌宠+记账的产品差异化定位。" },
        { label: "产品规划", value: "一周内完成产品设计，交付PRD与高保真原型图，获腾讯金融科技大赛Top 20。" },
        { label: "Agent搭建", value: "赛后独立用Coze设计workflow，搭建agent，实现记账查账、储蓄监督、萌宠闲聊。" }
      ],
      link: "https://www.coze.cn/s/xjGm4xrlBg0/",
      linkText: "体验 Coze Agent",
      imageAlt: "小鹅记账 UI 界面",
      images: [
        `${import.meta.env.BASE_URL}轮播1.PNG`,
        `${import.meta.env.BASE_URL}轮播2.PNG`,
        `${import.meta.env.BASE_URL}轮播3.png`,
        `${import.meta.env.BASE_URL}轮播4.png`,
        `${import.meta.env.BASE_URL}轮播5.png`,
        `${import.meta.env.BASE_URL}轮播6.png`,
        `${import.meta.env.BASE_URL}轮播7.png`,
        `${import.meta.env.BASE_URL}轮播8.png`
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-5 sm:px-6 relative">
      {/* Background tint for section */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm -z-20"></div>

      <SectionHeading title="项目竞赛" subtitle="Experiments & Projects" icon={<BookOpen size={24}/>} />
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((proj, idx) => (
          <div
            key={proj.id}
            style={{ ['--reveal-delay' as any]: `${idx * 110}ms` }}
            className={`reveal bg-white/80 backdrop-blur-md p-4 pb-8 rounded-sm shadow-polaroid transform transition-transform duration-500 hover:z-10 hover:scale-105 hover:shadow-soft border border-white/40 ${idx % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
          >
            {/* Image/Video Placeholder or Actual Media */}
            <div className="w-full aspect-[4/3] bg-algernon-warm-gray/30 mb-6 overflow-hidden relative group border border-black/5">
                {proj.localVideoUrl ? (
                   <video
                     src={proj.localVideoUrl}
                     controls
                     playsInline
                     preload="metadata"
                     className="w-full h-full object-cover bg-black"
                   >
                     您的浏览器不支持视频播放。
                   </video>
                ) : proj.videoUrl ? (
                   <iframe 
                     src={proj.videoUrl}
                     width="100%"
                     height="100%"
                     scrolling="no"
                     border="0"
                     frameborder="no"
                     framespacing="0"
                     allowfullscreen="true"
                     className="w-full h-full bg-black"
                   ></iframe>
                ) : proj.images && proj.images.length > 0 ? (
                   <ImageCarousel images={proj.images} alt={proj.imageAlt} />
                ) : proj.imageUrl ? (
                   <>
                     <img 
                       src={proj.imageUrl} 
                       alt={proj.imageAlt}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       onError={(e) => {
                         e.currentTarget.style.display = 'none';
                         e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100');
                         if(e.currentTarget.parentElement) e.currentTarget.parentElement.innerHTML = '<span class="text-xs text-red-400 font-mono">Image Load Failed</span>';
                       }}
                     />
                     <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                   </>
                ) : (
                   <div className="w-full h-full flex flex-col items-center justify-center text-algernon-ink/40 font-serif italic">
                      <div className="absolute inset-0 bg-algernon-teal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <span className="bg-white/90 px-4 py-2 rounded-full text-algernon-teal text-sm shadow-sm">预览图</span>
                      </div>
                      <span>[ 项目截图: 4:3 ]</span>
                      <span className="text-xs mt-2 not-italic font-sans opacity-60">{proj.imageAlt}</span>
                   </div>
                )}
            </div>

            <div className="px-2 text-center">
               <h3 className="font-serif text-2xl font-bold mb-2 text-algernon-ink">{proj.title}</h3>
               
               {proj.award && (
                 <div className="text-xs font-sans text-algernon-coral mb-4 tracking-wide font-bold bg-algernon-coral/5 py-1 px-2 rounded-md inline-block">
                   {proj.award}
                 </div>
               )}

               <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {proj.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 bg-white border border-algernon-ink/10 rounded-full text-algernon-ink/60 shadow-sm">
                      {tag}
                    </span>
                  ))}
               </div>

               <p className="font-sans text-sm text-algernon-ink/80 leading-relaxed mb-6">
                 {proj.description}
               </p>

               {/* New Details Section */}
               {proj.details && (() => {
                 const isExpanded = expandedProjectId === proj.id;
                 
                 return (
                   <div className="text-left mb-6 space-y-3">
                     {/* 展开/收起按钮 */}
                     <button
                       onClick={() => setExpandedProjectId(isExpanded ? null : proj.id)}
                       className="w-full flex items-center justify-center gap-2 text-xs font-sans text-algernon-teal hover:text-algernon-coral transition-colors font-bold py-2 px-3 rounded-lg border border-algernon-teal/20 hover:border-algernon-coral/30 bg-white/50 hover:bg-white/70 transition-all"
                     >
                       {isExpanded ? (
                         <>
                           <span>收起详情</span>
                           <ChevronUp size={14} />
                         </>
                       ) : (
                         <>
                           <span>查看更多</span>
                           <ChevronDown size={14} />
                         </>
                       )}
                     </button>
                     
                     {/* 所有details - 展开后显示 */}
                     {isExpanded && (
                       <div className="bg-white/50 rounded-lg p-3 space-y-2 text-xs font-sans text-algernon-ink/70 animate-fade-up">
                         {proj.details.map((detail, i) => (
                           <div key={i}>
                             <span className="font-bold text-algernon-teal block mb-0.5">{detail.label}</span>
                             <span className="leading-snug block">{detail.value}</span>
                           </div>
                         ))}
                       </div>
                     )}
                   </div>
                 );
               })()}

               <a 
                 href={proj.link || '#'} 
                 target={proj.link ? "_blank" : "_self"} 
                 rel="noopener noreferrer"
                 className="inline-block text-algernon-teal font-serif border-b border-algernon-teal/50 pb-0.5 hover:text-algernon-coral hover:border-algernon-coral transition-all text-sm font-bold cursor-pointer"
               >
                 <span className="flex items-center gap-1 justify-center">{proj.linkText} <ArrowUpRight size={14} /></span>
               </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 4. Portfolio - Gallery
const PortfolioSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const items: PortfolioItem[] = [
    {
      id: "media",
      category: "人文素养积累：公众号",
      title: "社会学理论大缸",
      metric: "50w+ 粉丝",
      description: "联合创始人，负责选题策划与写作编辑，专注于社会学理论科普。",
      placeholderType: "IMAGE",
      // Removed ./ prefix
      imageUrl: `${import.meta.env.BASE_URL}social_theory.png.jpg`,
      articleLinks: [
        { title: "《为什么知识分子都不怎么爱国？》", url: "https://mp.weixin.qq.com/s/3XrUf1kATNslZjh1rZ-VlA" },
        { title: "《香港高楼火灾：生死十分钟，人们到底在做什么？》", url: "https://mp.weixin.qq.com/s/ZxnaNSX11FBvlVuhGrxwfw" },
        { title: "《项飙的“附近”：只是中产的“小确幸”吗？》", url: "https://mp.weixin.qq.com/s/jMkAT5fXfIk242FFegf4aA" },
        { title: "《《许我耀眼》：为什么我们总爱“大女主逆袭爽剧”？》", url: "https://mp.weixin.qq.com/s/WUFkjW7MG8cxzAp_uZbtNA" }
      ]
    },
    {
      id: "video",
      category: "Prompt Engineering",
      title: "ChatGPT 六步提问法",
      metric: "217w+ 播放",
      description: "Bilibili 爆款教程。切入学术垂直场景，总结简单易懂的Prompt技巧。",
      placeholderType: "VIDEO",
      embedUrl: "//player.bilibili.com/player.html?bvid=BV16s4y177Pz&page=1&high_quality=1&danmaku=0",
      externalLink: "https://www.bilibili.com/video/BV16s4y177Pz/?share_source=copy_web&vd_source=261dba0868790d7b8f547d2ce7cfcd91"
    },
    {
      id: "aigc-video",
      category: "AIGC",
      title: "AI 商业广告片",
      metric: "独立制作",
      description: "使用nano banana+veo3+海螺+即梦完成的OPPO蓝牙耳机AI广告视频",
      placeholderType: "VIDEO",
      videoUrl: "https://player.bilibili.com/player.html?bvid=BV1zrm6BYEHh"
    },
    {
      id: "aigc-music",
      category: "AIGC",
      title: "AI音乐",
      metric: "AI 编曲",
      description: "使用 Suno 等产品，独立完成AI单曲的词曲生成与制作",
      placeholderType: "VIDEO",
      videoUrl: "https://player.bilibili.com/player.html?bvid=BV1zrm6BYEET"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 px-5 sm:px-6 relative">
       {/* Background tint */}
       <div className="absolute inset-0 bg-algernon-canvas/30 backdrop-blur-sm -z-20"></div>

      <SectionHeading title="AIGC作品" subtitle="Creation & Content" icon={<Lightbulb size={24}/>} />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {items.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => item.articleLinks ? setSelectedItem(item) : null}
            style={{ ['--reveal-delay' as any]: `${idx * 110}ms` }}
            className={`reveal glass-edge bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden shadow-glass hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-white/50 group ${item.articleLinks ? 'cursor-pointer' : ''}`}
          >
            {/* Media Placeholder */}
            <div className="w-full aspect-video bg-white/20 relative flex items-center justify-center text-algernon-ink/30 overflow-hidden bg-black/5">
                {item.embedUrl ? (
                   <iframe
                     src={item.embedUrl}
                     className="w-full h-full absolute inset-0"
                     scrolling="no"
                     frameBorder="0"
                     allowFullScreen={true}
                     sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                   ></iframe>
                ) : item.videoUrl ? (
                   <iframe 
                     src={item.videoUrl}
                     width="100%"
                     height="100%"
                     scrolling="no"
                     border="0"
                     frameborder="no"
                     framespacing="0"
                     allowfullscreen="true"
                     className="w-full h-full bg-black"
                   ></iframe>
                ) : item.audioUrl ? (
                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-algernon-teal/20 to-algernon-coral/20">
                     <audio 
                       controls
                       className="w-full max-w-md"
                       preload="metadata"
                     >
                       <source src={item.audioUrl} type="audio/mpeg" />
                       <source src={item.audioUrl} type="audio/mp3" />
                       <p className="text-white text-xs">Audio not supported</p>
                     </audio>
                   </div>
                ) : (
                  <>
                    {/* Render Image if exists, otherwise placeholder */}
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback on error - hide image and show placeholder style
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span class="font-serif italic text-sm text-red-400">[ IMG FAILED ]</span>';
                          }
                        }}
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                        
                        {item.placeholderType === 'IMAGE' && <span className="font-serif italic text-sm">[ IMAGE ]</span>}
                        {item.placeholderType === 'VIDEO' && (
                          <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center opacity-60">
                            <div className="w-0 h-0 border-l-[10px] border-l-current border-y-[6px] border-y-transparent ml-1"></div>
                          </div>
                        )}
                        {item.placeholderType === 'AUDIO' && (
                          <div className="flex gap-1 items-end h-8 opacity-60">
                             <div className="w-1 h-4 bg-current animate-pulse"></div>
                             <div className="w-1 h-8 bg-current animate-pulse delay-75"></div>
                             <div className="w-1 h-6 bg-current animate-pulse delay-150"></div>
                             <div className="w-1 h-3 bg-current animate-pulse"></div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
            </div>

            <div className="p-5 flex flex-col flex-grow relative">
               <div className="text-[10px] font-bold tracking-wider text-algernon-teal uppercase mb-1 bg-algernon-teal/5 inline-block px-2 py-0.5 rounded-sm truncate max-w-full">{item.category}</div>
               
               <h4 className="font-serif text-lg font-bold mb-1 flex items-center gap-2">
                 {item.externalLink ? (
                   <a href={item.externalLink} target="_blank" rel="noopener noreferrer" className="hover:text-algernon-coral transition-colors flex items-center gap-1">
                     {item.title}
                     <ExternalLink size={14} className="opacity-50" />
                   </a>
                 ) : (
                   <span className={item.articleLinks ? "group-hover:text-algernon-teal transition-colors" : ""}>{item.title}</span>
                 )}
               </h4>

               <div className="text-algernon-coral font-sans font-bold text-sm mb-3">{item.metric}</div>
               <p className="text-xs text-algernon-ink/70 leading-relaxed mt-auto">
                 {item.description}
               </p>
               {item.articleLinks && (
                 <div className="mt-3 text-xs font-bold text-algernon-teal flex items-center gap-1 opacity-80 group-hover:opacity-100">
                    <BookOpen size={12} /> 点击查看往期推送
                 </div>
               )}
            </div>
          </div>
        ))}
      </div>

      {/* Article Links Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
           {/* Backdrop */}
           <div 
             className="absolute inset-0 bg-algernon-ink/30 backdrop-blur-sm animate-fade-in" 
             onClick={() => setSelectedItem(null)}
           ></div>
           
           {/* Modal Content */}
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-fade-up">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-algernon-canvas/30">
                 <div>
                   <h3 className="font-serif text-xl font-bold text-algernon-ink">{selectedItem.title}</h3>
                   <p className="text-xs text-algernon-ink/60 mt-1">社会学的头脑深度思考世界</p>
                 </div>
                 <button 
                   onClick={() => setSelectedItem(null)}
                   className="p-2 hover:bg-black/5 rounded-full transition-colors text-algernon-ink/50 hover:text-algernon-ink"
                 >
                   <X size={20} />
                 </button>
              </div>
              
              <div className="p-4 space-y-3 max-h-[60vh] overflow-y-auto">
                 {selectedItem.articleLinks?.map((link, idx) => (
                   <a 
                     key={idx}
                     href={link.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-4 p-4 rounded-xl hover:bg-algernon-teal/5 border border-transparent hover:border-algernon-teal/20 transition-all group"
                   >
                      <div className="w-10 h-10 rounded-full bg-algernon-canvas flex items-center justify-center text-algernon-teal shrink-0 group-hover:scale-110 transition-transform">
                        <FileText size={18} />
                      </div>
                      <div className="flex-grow">
                        <div className="font-bold text-algernon-ink group-hover:text-algernon-teal transition-colors text-sm line-clamp-2">{link.title}</div>
                        {/* <div className="text-[10px] text-algernon-ink/40 mt-0.5 font-mono truncate max-w-[200px]">{link.url}</div> */}
                      </div>
                      <ArrowUpRight size={16} className="text-algernon-ink/30 group-hover:text-algernon-teal transition-colors" />
                   </a>
                 ))}
              </div>
              
              <div className="p-4 bg-gray-50/50 text-center border-t border-gray-100">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="text-sm font-bold text-algernon-ink/60 hover:text-algernon-teal transition-colors"
                >
                  关闭
                </button>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

// 5. Thoughts - Floating Bubbles
const ThoughtsSection: React.FC = () => {
  const bubbles = [
    {
      id: 't1',
      title: '实习与探索',
      content:
        '实习经历看似“不断跑路”的探索，但我并不认为那是弯路：每一段经历都带来新的技能与认知；只有明确不想做的事，才能在想做的路上坚定前行。'
    },
    {
      id: 't2',
      title: '职业价值排序',
      content: '成长性 ＞ 创造性 ＞ 团队氛围 ＞ 资源积累 ＞ 稳定性 ＞ 薪酬'
    },
    {
      id: 't3',
      title: '职业即旅行',
      content:
        '我把职业探索看作一次旅行。真正的成长并非你征服了多少风景，而是你允许多少风景穿过你，并最终雕刻你。'
    },
    {
      id: 't4',
      title: '一句话定义',
      content: '一个人类学家式的背包客，正在 AI 的旷野中探索。'
    },
    {
      id: 't5',
      title: '野生人类学家',
      content: '旅途中擅长在各异文化符号中发现人与人的深邃联系。'
    },
    {
      id: 't6',
      title: '人文与科技',
      content: '怀揣人文理想，在专业之外持续探索商业与科技。'
    },
    {
      id: 't7',
      title: '人文对 AI 的影响',
      content:
        '人文对 AI 的影响或许不止于伦理和性格训练；AI 本身也可以成为社会学的研究对象。'
    }
  ];

  return (
    <section id="thoughts" className="py-16 md:py-24 px-5 sm:px-6 relative">
      <SectionHeading title="碎片思考" subtitle="Mind Garden" icon={<BrainCircuit size={24} />} />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
          {bubbles.map((b, idx) => (
            <div
              key={b.id}
              style={{ ['--reveal-delay' as any]: `${idx * 80}ms` }}
              className="reveal glass-edge bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-glass hover:shadow-xl hover:-translate-y-1 transition-all transform"
            >
              <div className="font-serif font-bold text-algernon-ink text-sm mb-2">{b.title}</div>
              <p className="text-sm text-algernon-ink/80 leading-relaxed">{b.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Footer - The Three Interfaces
const Footer: React.FC = () => {
  return (
    <footer className="bg-algernon-ink/95 backdrop-blur-lg text-algernon-canvas py-20 px-6 relative overflow-hidden">
      {/* subtle noise on footer too */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="border-t border-white/10 pt-12 text-center">
          <div className="text-xs opacity-30 font-sans tracking-widest uppercase">
            © 2025  Designed with Fiona & Gemini & Cursor.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App: React.FC = () => {
  // 滚动入场：进入视口的 .reveal 元素加 .in-view 触发动画
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full overflow-x-hidden selection:bg-algernon-coral/30">
      <div className="noise-overlay" />
      <NavBar />
      <HeroSection />
      <HandDrawnDivider />
      <InternshipSection />
      <ProjectsSection />
      <PortfolioSection />
      <ThoughtsSection />
      <Footer />
    </main>
  );
};

export default App;