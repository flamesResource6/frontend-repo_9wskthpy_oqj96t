import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,20,0.0)_0%,rgba(10,10,20,0.2)_45%,rgba(10,10,20,0.6)_70%,rgba(10,10,20,0.9)_100%)]" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          An AI Voice Agent with a Living Aura
        </h1>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Futuristic, minimal, and beautifully animated. Experience a digital presence that feels alive.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#features" className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 text-white shadow-sm hover:opacity-90 transition">
            Explore Features
          </a>
          <a href="#showcase" className="px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition-colors">
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
