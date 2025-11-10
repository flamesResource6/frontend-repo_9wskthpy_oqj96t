import { Sparkles, Shield, Mic, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Natural Conversations',
    desc: 'Human-like voice interactions powered by cutting-edge models.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    desc: 'Data encryption and safe-by-default privacy controls.',
  },
  {
    icon: Mic,
    title: 'Real-time Streaming',
    desc: 'Low-latency audio streaming and instant responses.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    desc: 'Drop-in SDKs and ready-to-ship templates.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(120,50,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Designed for modern voice experiences</h2>
          <p className="mt-3 text-muted-foreground">A minimal, futuristic toolkit to build your voice agent ideas faster.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center shadow">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
