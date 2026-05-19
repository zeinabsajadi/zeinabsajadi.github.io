<template>
  <div
    class="glass glass-hover border-gradient group relative overflow-hidden rounded-xl p-4"
    :class="tagClass"
  >
    <!-- Background accent -->
    <div
      class="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      :class="glowClass"
    />

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <!-- Icon -->
        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-300"
          :class="iconBgClass"
        >
          <component :is="lucideIcon" class="h-3.5 w-3.5" :class="iconColorClass" />
        </div>

        <div>
          <p class="font-display text-sm font-600 text-white/80">{{ name }}</p>
        </div>
      </div>

      <!-- Level badge -->
      <span class="font-mono text-xs" :class="levelColorClass">{{ level }}%</span>
    </div>

    <!-- Progress bar -->
    <div class="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-white/5">
      <div
        class="h-full rounded-full transition-all duration-1000 ease-out"
        :class="barClass"
        :style="{ width: animated ? `${level}%` : '0%' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Server,
  Layers,
  Cloud,
  Database,
  Code2,
  Terminal,
  Globe,
  Cpu,
  GitBranch,
} from 'lucide-vue-next'

const props = defineProps<{
  icon: string
  name: string
  level: number
  tag: 'backend' | 'frontend' | 'infra'
}>()

const iconMap: Record<string, any> = {
  Server,
  Layers,
  Cloud,
  Database,
  Code2,
  Terminal,
  Globe,
  Cpu,
  GitBranch,
}

const lucideIcon = computed(() => iconMap[props.icon] ?? Code2)

const tagClass = computed(() => ({
  'skill-backend': props.tag === 'backend',
  'skill-frontend': props.tag === 'frontend',
  'skill-infra': props.tag === 'infra',
}))

const glowClass = computed(() => ({
  'bg-cyan-glow': props.tag !== 'infra',
  'bg-purple-glow': props.tag === 'infra',
}))

const iconBgClass = computed(() =>
  props.tag === 'frontend'
    ? 'bg-purple-glow/10 border-purple-glow/20 group-hover:border-purple-glow/40'
    : 'bg-cyan-glow/10 border-cyan-glow/20 group-hover:border-cyan-glow/40'
)

const iconColorClass = computed(() =>
  props.tag === 'frontend' ? 'text-purple-glow' : 'text-cyan-glow'
)

const levelColorClass = computed(() =>
  props.tag === 'frontend' ? 'text-purple-glow/70' : 'text-cyan-glow/70'
)

const barClass = computed(() =>
  props.tag === 'frontend'
    ? 'bg-gradient-to-r from-purple-soft to-purple-glow'
    : 'bg-gradient-to-r from-cyan-dim to-cyan-glow'
)

// Animate bar on mount
const animated = ref(false)
onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 300)
})
</script>