import { Metadata } from 'next';

// 1. 구글 노출(SEO)을 위한 글로벌 메타데이터 세팅
export const metadata: Metadata = {
  title: 'Live Web3 & Crypto Intelligence Hub | Real-time Market & News Feed',
  description: 'Get the latest real-time Web3, Bitcoin, Ethereum, and DeFi news aggregated from top sources. Stay updated with live blockchain market trends.',
  keywords: ['Crypto News', 'Web3 News Aggregator', 'Bitcoin Updates', 'Ethereum Live Feed', 'Blockchain News', 'Web3 Public Goods'],
  openGraph: {
    title: 'Live Web3 & Crypto Intelligence Hub',
    description: 'Real-time aggregated blockchain news with zero platform fee crypto donation support.',
    type: 'website',
  },
};

// 실시간 크립토 뉴스 수집 함수 (5분마다 자동 업데이트)
async function getCryptoNews() {
  try {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://cointelegraph.com/rss', {
      next: { revalidate: 300 }
    });
    const data = await res.json();
    return data.items || [];
  } catch (error) {
    return [];
  }
}

export default async function CryptoNewsPage() {
  const newsList = await getCryptoNews();

  // 💡 본인의 실제 지갑 주소로 변경 가능합니다 (임시 주소 설정됨)
  const EVM_ADDRESS = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";
  const SOL_ADDRESS = "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU";
  const BTC_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";

  return (
    <div className="min-h-screen bg-[#0a0d14] text-slate-100 font-sans pb-32 relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* 화려한 네온 배경 빛 효과 (Glow Background) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-cyan-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none -z-10 rounded-full" />

      {/* 상단 글로우 네비게이션 헤더 */}
      <header className="border-b border-slate-800/80 bg-[#0a0d14]/80 backdrop-blur-md sticky top-0 z-40 px-4 py-3.5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              ETHOS Web3 Live
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full backdrop-blur-sm">
              LIVE AUTO FEED
            </span>
          </div>
        </div>
      </header>

      {/* 메인 뉴스터미널 섹션 */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* 히어로 타이틀 영역 */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-semibold text-indigo-300">
            ✨ Real-Time Blockchain Intelligence & Open Source
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Support Open <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Web3 & AI</span> News Feed
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Continuously updated every 5 minutes with decentralized tech updates, market insights, and public goods research.
          </p>
        </div>

        {/* 실시간 뉴스 그리드 카드 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4">
          {newsList.slice(0, 12).map((item: any, idx: number) => (
            <a 
              key={idx} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-5 bg-slate-900/40 border border-slate-800/80 rounded-2xl hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-semibold text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded-md border border-cyan-800/50">
                    {item.author || 'Crypto News'}
                  </span>
                  <span className="text-slate-500 font-mono">{item.pubDate?.slice(0, 16)}</span>
                </div>
                <h2 className="font-bold text-sm sm:text-base text-slate-200 group-hover:text-cyan-300 line-clamp-2 leading-snug transition-colors">
                  {item.title}
                </h2>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-200">
                <span>Read Full Article</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* 💡 우측 하단 Glassmorphism 플로팅 후원 카운터/모달 */}
      <div className="fixed bottom-5 right-5 z-50 max-w-md w-[calc(100%-2.5rem)] bg-[#0d121f]/90 border border-cyan-500/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(0,0,0,0.8)] backdrop-blur-xl space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-base">☕</span>
            <span className="font-bold text-sm text-white">Support Server & API Costs</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
            Zero Platform Fee
          </span>
        </div>

        <p className="text-xs text-slate-300 leading-normal">
          Enjoying this live feed? Support our independent Web3 infrastructure with a small crypto contribution.
        </p>

        {/* 네트워크별 지갑 주소 복사 세션 */}
        <div className="space-y-2.5 pt-1">
          {/* EVM */}
          <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80 space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="font-bold text-indigo-400">🔷 EVM (ETH, Base, Arb, USDT)</span>
              <span className="text-slate-500">Click to Select Address</span>
            </div>
            <div className="text-[11px] font-mono text-slate-300 break-all bg-slate-900/90 p-2 rounded border border-slate-800 select-all font-medium">
              {EVM_ADDRESS}
            </div>
          </div>

          {/* SOL */}
          <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80 space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="font-bold text-purple-400">🟣 Solana (SOL, USDC)</span>
            </div>
            <div className="text-[11px] font-mono text-slate-300 break-all bg-slate-900/90 p-2 rounded border border-slate-800 select-all font-medium">
              {SOL_ADDRESS}
            </div>
          </div>

          {/* BTC */}
          <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80 space-y-1">
            <div className="flex justify-between text-[10px]">
              <span className="font-bold text-amber-400">🟠 Bitcoin (BTC)</span>
            </div>
            <div className="text-[11px] font-mono text-slate-300 break-all bg-slate-900/90 p-2 rounded border border-slate-800 select-all font-medium">
              {BTC_ADDRESS}
            </div>
          </div>
        </div>

        <div className="text-[10px] text-slate-500 text-center pt-1">
          🔒 100% On-Chain Direct Peer-to-Peer Donation
        </div>
      </div>

    </div>
  );
}
