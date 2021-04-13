<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Search App</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
              type="text"
              v-model="search"
            ></b-form-input>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <b-container class="mt-4" fluid>
      <b-row>
        <b-col v-for="item in dataBike" :key="item.id">
          <b-card tag="article" style="max-width: 20rem;" class="mb-2">
            <b-card-text>
              {{ item.id }}
              {{ item.name }}
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      bike: null,
      search: "",
    };
  },
  mounted() {
    this.$store.dispatch("dataStore/getAllDataAction");
  },
  computed: {
    ...mapGetters({
      dataBike: "dataStore/getAllData",
    }),
  },
  watch: {
    search() {
      this.$store.dispatch("dataStore/search", this.search);
    },
  },
  methods: {},
};
</script>
<style></style>
