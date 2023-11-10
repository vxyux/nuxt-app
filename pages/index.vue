<template>
  <div>
    <NuxtLayout :name="'default'">
      <section class="hero">
        <MainHeading
          :head="'Hello World'"
          :desc="'We have now launched our Nuxt website!'"
        />
      </section>
      <section>
        <ParagraphBlock title="First section"
          >Adipisicing ex ea commodo aliquip consequat culpa aute ullamco voluptate non
          nulla voluptate et quis. Mollit enim pariatur deserunt nisi nisi. Fugiat mollit
          aliqua pariatur dolore ad ea elit.</ParagraphBlock
        >
      </section>
      <section>
        <ParagraphBlock title="Second section"
          >Sunt aliquip tempor fugiat. Est dolor sint nulla nulla enim occaecat. Veniam
          duis officia sint voluptate esse magna in eiusmod dolore est non consequat et
          fugiat elit. Labore esse minim quis est in cillum ad do ipsum tempor occaecat
          cillum. Non officia veniam amet irure ullamco sit cillum minim dolor enim
          incididunt sint.</ParagraphBlock
        >
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
