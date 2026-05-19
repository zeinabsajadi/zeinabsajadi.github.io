<template>
  <section id="contact" class="py-20">
    <div class="mb-10 flex items-center gap-4">
      <span class="font-mono text-xs tracking-[0.3em] text-cyan-glow uppercase opacity-60">04 / Contact</span>
      <div class="h-px flex-1 bg-glass-border" />
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">

      <!-- Left: CTA copy -->
      <div
        class="glass border-gradient rounded-2xl p-8 flex flex-col justify-between"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        <div>
          <h2 class="font-display text-4xl font-800 leading-tight text-white/90">
            Let's build<br />
            <span class="text-gradient-cyan">something great.</span>
          </h2>
          <p class="mt-4 font-mono text-sm leading-relaxed text-white/40">
            Open to freelance contracts, full-time roles, and interesting
            collaborations. Response guaranteed within 24 hours.
          </p>
        </div>

        <div class="mt-8 flex flex-col gap-3">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center justify-between rounded-xl border border-white/6 bg-white/2 px-4 py-3 transition-all duration-300 hover:border-cyan-glow/20 hover:bg-cyan-glow/5"
          >
            <div class="flex items-center gap-3">
              <component :is="social.icon" class="h-4 w-4 text-white/30 transition-colors group-hover:text-cyan-glow" />
              <span class="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors">{{ social.label }}</span>
            </div>
            <LucideArrowUpRight class="h-3.5 w-3.5 text-white/20 transition-all group-hover:text-cyan-glow group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <!-- Right: Message form -->
      <div
        class="glass border-gradient rounded-2xl p-8"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
      >
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-4" novalidate>
          <div>
            <label class="mb-1.5 block font-mono text-[10px] tracking-widest text-white/30 uppercase">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
              class="w-full rounded-xl border border-white/6 bg-white/3 px-4 py-3 font-mono text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200 focus:border-cyan-glow/30 focus:bg-cyan-glow/5 focus:shadow-glow-cyan/20"
            />
          </div>

          <div>
            <label class="mb-1.5 block font-mono text-[10px] tracking-widest text-white/30 uppercase">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              required
              class="w-full rounded-xl border border-white/6 bg-white/3 px-4 py-3 font-mono text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200 focus:border-cyan-glow/30 focus:bg-cyan-glow/5"
            />
          </div>

          <div>
            <label class="mb-1.5 block font-mono text-[10px] tracking-widest text-white/30 uppercase">Message</label>
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Tell me about your project..."
              required
              class="w-full resize-none rounded-xl border border-white/6 bg-white/3 px-4 py-3 font-mono text-sm text-white/80 placeholder-white/20 outline-none transition-all duration-200 focus:border-cyan-glow/30 focus:bg-cyan-glow/5"
            />
          </div>

          <button
            type="submit"
            :disabled="sending"
            class="group relative mt-2 inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-dim/20 to-purple-dim/20 border border-cyan-glow/20 px-6 py-3 font-mono text-sm text-white transition-all duration-300 hover:border-cyan-glow/40 hover:shadow-glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>{{ sending ? 'Sending...' : sent ? 'Message Sent ✓' : 'Send Message' }}</span>
            <LucideSend
              v-if="!sent"
              class="h-3.5 w-3.5 text-cyan-glow transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { LucideArrowUpRight, LucideSend, LucideGithub, LucideLinkedin, LucideMail, LucideTwitter } from 'lucide-vue-next'

const form = reactive({ name: '', email: '', message: '' })
const sending = ref(false)
const sent = ref(false)

const socials = [
  { label: 'GitHub · @ZeinabSajadi', href: 'https://github.com/zeinabsajadi', icon: LucideGithub },
  { label: 'LinkedIn · ZeinabSajjadi', href: 'https://www.linkedin.com/zeinab-sajjadi-488288293/', icon: LucideLinkedin },
  { label: 'zeinabsajadynasab@gmail.com', href: 'mailto:zeinabsajadynasab@gmail.com', icon: LucideMail },
]

async function handleSubmit() {
  sending.value = true
  // Replace with your preferred form-handling (Formspree, EmailJS, etc.)
  await new Promise((r) => setTimeout(r, 1200))
  sending.value = false
  sent.value = true
  Object.assign(form, { name: '', email: '', message: '' })
  setTimeout(() => (sent.value = false), 4000)
}
</script>