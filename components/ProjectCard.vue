<template>
  <article
    class="glass glass-hover border-gradient group relative flex h-full flex-col overflow-hidden rounded-2xl"
  >
    <!-- Featured badge -->
    <div
      v-if="featured"
      class="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-cyan-glow/25 bg-cyan-glow/10 px-2.5 py-1 font-mono text-[10px] text-cyan-glow"
    >
      <span class="h-1 w-1 animate-pulse rounded-full bg-cyan-glow"></span>
      Featured
    </div>

    <!-- Card glow top edge -->
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
    ></div>

    <!-- Visual header -->
    <div class="relative h-40 overflow-hidden bg-obsidian-3">
      <!-- Geometric grid art -->
      <svg
        class="absolute inset-0 h-full w-full opacity-20 transition-transform duration-700 group-hover:scale-110"
        viewBox="0 0 400 160"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="rgba(0,245,212,0.3)"
              stroke-width="0.5"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#smallGrid)" />
        <circle cx="200" cy="80" r="50" fill="none" stroke="rgba(0,245,212,0.4)" stroke-width="0.75" />
        <circle cx="200" cy="80" r="30" fill="none" stroke="rgba(168,85,247,0.3)" stroke-width="0.75" />
        <circle cx="200" cy="80" r="10" fill="rgba(0,245,212,0.15)" />
        <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(0,245,212,0.15)" stroke-width="0.5" />
        <line x1="200" y1="0" x2="200" y2="160" stroke="rgba(168,85,247,0.15)" stroke-width="0.5" />
      </svg>

      <!-- Year label -->
      <span class="absolute bottom-3 right-3 font-mono text-[10px] text-white/20">
        {{ year }}
      </span>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-6">
      <h3 class="font-display text-lg font-bold text-white/90 transition-colors group-hover:text-white">
        {{ title }}
      </h3>

      <p class="mt-2 flex-1 font-mono text-xs leading-relaxed text-white/40">
        {{ description }}
      </p>

      <!-- Tech stack pills -->
      <div class="mt-4 flex flex-wrap gap-1.5">
        <span
          v-for="t in parsedTech"
          :key="t"
          class="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/50 transition-colors group-hover:border-cyan-glow/20 group-hover:text-cyan-glow/70"
        >
          {{ t }}
        </span>
      </div>

      <!-- Footer -->
      <div class="mt-5 flex items-center justify-between">
        <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="group/link inline-flex items-center gap-2 font-mono text-xs text-cyan-glow/70 transition-colors hover:text-cyan-glow"
        >
          View Project
          <LucideExternalLink
            class="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>

        <LucideGithub
          class="cursor-pointer h-4 w-4 text-white/20 transition-colors group-hover:text-white/50"
        />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LucideExternalLink, LucideGithub } from 'lucide-vue-next'

const props = defineProps<{
  title: string
  description: string
  tech: string
  link: string
  year: string
  featured?: boolean
}>()

const parsedTech = computed(() => {
  try {
    return JSON.parse(props.tech)
  } catch {
    return props.tech.split(',').map((s) => s.trim())
  }
})
</script>
