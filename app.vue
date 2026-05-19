<template>
  <div class="noise relative min-h-screen bg-obsidian dot-grid">
    <!-- Ambient orbs -->
    <div class="orb orb-cyan" />
    <div class="orb orb-purple" />

    <!-- Main layout -->
    <div class="relative z-10">
      <Header />

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />

        <!-- Skills Section -->
        <section id="skills" class="py-20">
          <div class="mb-10 flex items-center gap-4">
            <span class="font-mono text-xs tracking-[0.3em] text-cyan-glow uppercase opacity-60">02 / Skills</span>
            <div class="h-px flex-1 bg-glass-border" />
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <!-- Backend -->
            <div class="lg:col-span-1">
              <p class="mb-3 font-mono text-xs tracking-widest text-white/30 uppercase">Backend</p>
              <div class="flex flex-col gap-3">
                <SkillCard
                  icon="Server"
                  name="Python | Django | SQL | Celery | DRF | RabbitMQ | Redis"
                  level={75}
                  tag="backend"
                />
              </div>
            </div>

            <!-- Frontend -->
            <div class="lg:col-span-1">
              <p class="mb-3 font-mono text-xs tracking-widest text-white/30 uppercase">Frontend</p>
              <div class="flex flex-col gap-3">
                <SkillCard
                  icon="Layers"
                  name="Vue 3 | Nuxt"
                  level={50}
                  tag="frontend"
                />
              </div>
            </div>

            <!-- Infra -->
            <div class="lg:col-span-1">
              <p class="mb-3 font-mono text-xs tracking-widest text-white/30 uppercase">Infrastructure</p>
              <div class="flex flex-col gap-3">
                <SkillCard
                  icon="Cloud"
                  name="Docker | AWS"
                  level={50}
                  tag="infra"
                />
              </div>
            </div>
          </div>
        </section>
                <!-- Projects Section -->
        <section id="projects" class="py-20">
          <div class="mb-10 flex items-center gap-4">
            <span class="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow opacity-60">
              03 / Projects
            </span>
            <div class="h-px flex-1 bg-glass-border"></div>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Appointment System"
              description="Implemented an appointment scheduling system that lets users book, reschedule, and cancel time slots with real-time availability and automated email confirmations."
              tech='["Django", "Celery", "Redis", "DRF", "JWT"]'
              link="https://github.com"
              year="2024"
            />

            <ProjectCard
              title="ToDo-Ai System"
              description="Developed an AI-powered to-do system that suggests, organizes, and prioritizes tasks automatically through intelligent API integration."
              tech='["Django", "Celery", "DRF", "JWT"]'
              link="https://github.com"
              year="2024"
            />

            <ProjectCard
              title="CRM"
              description="Developed a CRM system that streamlines customer management by tracking interactions, automating workflows, and providing real-time insights to improve sales and support efficiency."
              tech='["Django", "Celery", "DRF", "JWT"]'
              link="https://github.com"
              year="2024"
            />
          </div>
        </section>

        <!-- Contact Section -->
        <Contact />
      </main>

      <!-- Footer -->
      <footer class="mt-20 border-t border-glass-border py-8">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span class="font-mono text-xs text-white/20">
            © {{ new Date().getFullYear() }} Zeinab Sajjadi
          </span>
          <span class="font-mono text-xs text-white/20">
            Built with ❤️
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// App is client-side only (ssr: false in nuxt.config.ts)
</script>