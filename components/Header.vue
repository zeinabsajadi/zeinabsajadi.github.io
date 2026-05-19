<template>
  <header
    class="sticky top-0 z-50 w-full"
    :class="{ 'header-scrolled': scrolled }"
  >
    <div class="header-inner mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <!-- Pisces Logo -->
      <a href="#" class="group flex items-center gap-3 no-underline">
        <div class="relative h-9 w-9">
          <!-- Geometric Pisces SVG -->
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-full w-full transition-transform duration-500 group-hover:rotate-180"
          >
            <!-- Outer ring -->
            <circle
              cx="20"
              cy="20"
              r="18"
              stroke="rgba(0,245,212,0.3)"
              stroke-width="0.75"
            />
            <!-- Fish 1 (upper arc — left to right) -->
            <path
              d="M 8 20 C 8 10 20 10 20 20"
              stroke="#00f5d4"
              stroke-width="1.4"
              stroke-linecap="round"
              fill="none"
            />
            <!-- Fish 1 tail left -->
            <path
              d="M 8 20 L 5 16 M 8 20 L 5 24"
              stroke="#00f5d4"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <!-- Fish 2 (lower arc — right to left) -->
            <path
              d="M 32 20 C 32 30 20 30 20 20"
              stroke="#a855f7"
              stroke-width="1.4"
              stroke-linecap="round"
              fill="none"
            />
            <!-- Fish 2 tail right -->
            <path
              d="M 32 20 L 35 16 M 32 20 L 35 24"
              stroke="#a855f7"
              stroke-width="1.2"
              stroke-linecap="round"
            />
            <!-- Center dot (divider orb) -->
            <circle cx="20" cy="20" r="1.6" fill="#00f5d4" />
            <!-- Dots at extremities -->
            <circle cx="8" cy="20" r="1" fill="#00f5d4" opacity="0.6" />
            <circle cx="32" cy="20" r="1" fill="#a855f7" opacity="0.6" />
          </svg>
        </div>
        <span class="font-display text-sm font-700 tracking-wider text-white/80 transition-colors group-hover:text-white">
          Zeinab<span class="text-gradient-cyan">.</span>
        </span>
      </a>

      <!-- Navigation -->
      <nav class="hidden items-center gap-1 md:flex">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="nav-link font-mono text-xs tracking-wider text-white/40 transition-all duration-200 px-3 py-2 rounded-lg hover:text-white hover:bg-white/5"
        >
          <span class="text-cyan-glow/60 mr-1">{{ item.index }}</span>{{ item.label }}
        </a>
      </nav>

      <!-- CTA -->
      <a
        href="#contact"
        class="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan-glow/20 bg-cyan-glow/5 px-4 py-2 font-mono text-xs text-cyan-glow transition-all duration-300 hover:border-cyan-glow/50 hover:bg-cyan-glow/10 hover:shadow-glow-cyan"
      >
        <span>Available for work</span>
        <span class="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse" />
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const navItems = [
  { index: '01/', label: 'About', href: '#hero' },
  { index: '02/', label: 'Skills', href: '#skills' },
  { index: '03/', label: 'Projects', href: '#projects' },
  { index: '04/', label: 'Contact', href: '#contact' },
]

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
header {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.header-scrolled .header-inner {
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0 0 16px 16px;
  margin-top: 8px;
}

.header-inner {
  border-radius: 16px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>