<template>
  <section id="hero" class="relative flex min-h-[90vh] flex-col justify-center py-24">
    <!-- Section label -->
    <div class="mb-8 flex items-center gap-4">
      <span class="font-mono text-xs tracking-[0.3em] text-cyan-glow uppercase opacity-60">01 / About</span>
      <div class="h-px w-12 bg-cyan-glow/30" />
    </div>

    <!-- Bento hero grid -->
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-12">

      <!-- Main intro card — large -->
      <div
        class="glass glass-hover border-gradient rounded-2xl p-8 lg:col-span-7"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
      >
        <div class="mb-4 flex items-center gap-2">
          <span class="font-mono text-xs text-white/30">Full-Stack Engineer &amp; Creative Technologist</span>
          <div class="flex gap-1">
            <span v-for="i in 3" :key="i" class="h-1 w-1 rounded-full bg-cyan-glow/40" />
          </div>
        </div>

        <h1 class="font-display text-5xl font-800 leading-none tracking-tight sm:text-6xl lg:text-7xl">
          <span class="block text-white/90">Zeinab</span>
          <span class="block text-gradient-cyan">Sajjadi</span>
        </h1>

        <p class="mt-6 max-w-lg font-mono text-sm leading-relaxed text-white/50">
          I architect systems where backend precision meets polished interfaces.
          Obsessed with performance, clean APIs, and the craft of code that scales.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            class="group inline-flex items-center gap-2 rounded-xl bg-cyan-glow/10 border border-cyan-glow/20 px-5 py-2.5 font-mono text-sm text-cyan-glow transition-all duration-300 hover:bg-cyan-glow/20 hover:shadow-glow-cyan"
          >
            View Work
            <LucideArrowRight class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-xl border border-white/8 px-5 py-2.5 font-mono text-sm text-white/50 transition-all duration-300 hover:border-white/20 hover:text-white/80"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <!-- Right column bento cells -->
      <div class="flex flex-col gap-4 lg:col-span-5">
        <!-- Status card -->
        <div
          class="glass glass-hover border-gradient rounded-2xl p-5"
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 250 } }"
        >
          <div class="flex items-start justify-between">
            <div>
              <p class="font-mono text-xs text-white/30 tracking-wider uppercase mb-1">Current Status</p>
              <p class="font-display text-base font-600 text-white/80">Open to opportunities</p>
              <p class="font-mono text-xs text-white/40 mt-1">Remote · Contract · Full-time</p>
            </div>

            <!-- Profile picture with glow & glass -->
            <div class="relative">
              <div
                class="h-14 w-14 rounded-full overflow-hidden glass border border-cyan-glow/30 shadow-[0_0_25px_rgba(0,245,212,0.20)] backdrop-blur-md"
              >
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  class="h-full w-full object-cover"
                />
              </div>

              <span
                class="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-glow animate-pulse border border-black shadow-[0_0_10px_rgba(0,245,212,0.6)]"
              ></span>
            </div>
          </div>
        </div>

        <!-- Location / tech card -->
        <div
          class="glass glass-hover border-gradient rounded-2xl p-5 flex items-center justify-between"
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 450 } }"
        >
          <div class="flex items-center gap-3">
            <div class="h-8 w-8 rounded-lg bg-purple-glow/10 border border-purple-glow/20 flex items-center justify-center">
              <LucideMapPin class="h-3.5 w-3.5 text-purple-glow" />
            </div>
            <div>
              <p class="font-mono text-xs text-white/60">Based in</p>
              <p class="font-display text-sm font-600 text-white/80">Isfahan, Iran</p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <span
              v-for="tech in quickTech"
              :key="tech"
              class="rounded-md border border-white/6 bg-white/3 px-2 py-0.5 font-mono text-[10px] text-white/40"
            >
              {{ tech }}
            </span>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll hint -->
    <div class="mt-16 flex items-center gap-3 opacity-30">
      <div class="scroll-line h-8 w-px bg-gradient-to-b from-transparent via-cyan-glow to-transparent" />
      <span class="font-mono text-[10px] tracking-[0.3em] text-white uppercase">Scroll</span>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '+3', label: 'Years Exp.' },
  { value: '30+', label: 'Projects' },
  { value: '∞', label: 'Curiosity' },
]

const quickTech = ['Python', 'Django', 'SQL','Celery']
</script>