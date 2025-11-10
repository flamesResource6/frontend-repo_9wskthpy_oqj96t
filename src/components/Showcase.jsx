import { Play } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">See it in action</h2>
            <p className="mt-3 text-muted-foreground">A quick glimpse of the aura animation paired with voice. Built for modern brands and products.</p>
            <div className="mt-6 flex items-center gap-3">
              <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 text-white shadow-sm hover:opacity-90 transition inline-flex items-center gap-2">
                <Play className="h-4 w-4" /> Play demo
              </button>
              <a href="#pricing" className="px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition-colors">Pricing</a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-video w-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-orange-400/20 flex items-center justify-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
