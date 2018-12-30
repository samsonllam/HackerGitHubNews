<template>
  <v-app>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-title v-text="title"/>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>
        &copy; 2018 
        <a 
          target="_blank" 
          href="https://github.com/samsonllam">
          samsonllam
        </a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        fixed: false,
        title: 'HackerGitHubNews'
      }
    }
  }
</script>
