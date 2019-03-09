<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <router-link to="/visit">Home</router-link> -->
      <v-btn to="/" flat>Home</v-btn>
      <v-btn to="/agency" flat>Agency</v-btn>
      <v-btn to="/analytics" flat>Analytics</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "ToolbarComp"
};
</script>

