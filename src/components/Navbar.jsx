import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 backdrop-blur-xl bg-background/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 flex items-center justify-center shadow-md">
              <Rocket className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold tracking-tight">AuraVoice</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#showcase" className="hover:text-foreground transition-colors">Showcase</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition-colors">Sign in</button>
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 text-white shadow-sm hover:opacity-90 transition">Get started</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-white/10 focus:outline-none">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-1">
              <a href="#features" className="block rounded-md px-3 py-2 text-sm hover:bg-white/10">Features</a>
              <a href="#showcase" className="block rounded-md px-3 py-2 text-sm hover:bg-white/10">Showcase</a>
              <a href="#pricing" className="block rounded-md px-3 py-2 text-sm hover:bg-white/10">Pricing</a>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex-1 px-4 py-2 rounded-md border border-white/20 hover:border-white/40 transition-colors">Sign in</button>
              <button className="flex-1 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400 text-white shadow-sm hover:opacity-90 transition">Get started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
