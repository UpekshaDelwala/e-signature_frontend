<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sidebarVisible: false,
      windowWidth: window.innerWidth
    };
  },
  computed: {
    isMobile() {
      return this.windowWidth <= 768;
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    handleLogout() {
      alert('Logged out!');
    },
    handleDecline() {
      alert('Declined!');
    },
    handleSign() {
      this.$router.push('/add-signature');
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (!this.isMobile) {
        this.sidebarVisible = true;
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    if (!this.isMobile) {
      this.sidebarVisible = true;
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

