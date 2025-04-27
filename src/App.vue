<template>
  <div id="app">
    <!-- Top Bar -->
    <header class="top-bar">
      <div class="logo">
        <h1 class="logo">DirectSign</h1>
        <!-- Hamburger Menu for Mobile -->
        <button class="hamburger" @click="toggleSidebar" v-if="isMobile">
          <span class="hamburger-icon">☰</span>
        </button>
      </div>
      <div class="user-actions">
        <span class="user-name">Cameron Williamson</span>
        <button class="logout-btn" @click="handleLogout">Logout</button>
      </div>
    </header>

    <!-- Main Layout with Sidebar -->
    <div class="main-layout">
      <!-- Sidebar -->
      <aside class="sidebar" :class="{ 'sidebar-hidden': !sidebarVisible && isMobile }">
        <ul>
          <li>
            <router-link to="/" :class="{ active: $route.name === 'BusinessLetter' }">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/add-signature" :class="{ active: $route.name === 'AddSignature' }">E-Sign</router-link>
          </li>
          <li>
            <router-link to="/history" :class="{ active: $route.name === 'History' }">History</router-link>
          </li>
          <li>
            <router-link to="/signature-model" :class="{ active: $route.name === 'SignatureModel' }">Signature Model</router-link>
          </li>
        </ul>
        <div class="sidebar-footer">
          <span class="settings-icon">⚙️</span>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="content">
        <!-- Document Title and Action Buttons -->
        <div class="document-header">
          <h2>Document 1 of Agreement</h2>
          <div class="action-buttons">
            <button class="decline-btn" @click="handleDecline">Decline</button>
            <button class="sign-btn" @click="handleSign">Sign</button>
          </div>
        </div>

        <!-- Router View for Rendering Components -->
        <router-view></router-view>
      </main>
    </div>
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

<style scoped>
#app {
  font-family: Arial, sans-serif;
}

/* Top Bar */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background-color: #f5f7fa;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  color: #007BFF;
  font-weight: bold;
  margin-bottom: 6px;
}

.logo img {
  height: 20px;
}

.hamburger {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: none;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-name {
  color: #1976d2;
  font-weight: bold;
  font-size: 14px;
}

.logout-btn {
  background-color: #fff;
  border: 1px solid #ff0000;
  color: #ff0000;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

/* Main Layout */
.main-layout {
  display: flex;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
}

/* Sidebar */
.sidebar {
  width: 200px;
  background-color: #e8f0fe;
  padding: 20px;
  transition: transform 0.3s ease;
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 5px 0;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 10px;
  font-size: 16px;
}

.sidebar a.active {
  background-color: #d3e1ff;
  font-weight: bold;
  border-radius: 4px;
}

.sidebar-footer {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.settings-icon {
  font-size: 20px;
  color: #666;
}

/* Main Content */
.content {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  margin-left: 200px;
  overflow-y: auto;
}

.document-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.document-header h2 {
  font-size: 18px;
  margin: 0;
  font-weight: 500;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.decline-btn {
  background-color: #fff;
  border: 1px solid #ff0000;
  color: #ff0000;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.sign-btn {
  background-color: #1976d2;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .top-bar {
    padding: 10px 15px;
  }

  .hamburger {
    display: block;
  }

  .sidebar {
    position: fixed;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
    z-index: 1000;
    transform: translateX(0);
  }

  .sidebar-hidden {
    transform: translateX(-100%);
  }

  .content {
    margin-left: 0;
    padding: 15px;
  }

  .document-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .action-buttons {
    width: 100%;
    justify-content: flex-end;
  }

  .decline-btn,
  .sign-btn {
    padding: 6px 12px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .top-bar {
    padding: 8px 10px;
  }

  .user-name,
  .logout-btn {
    font-size: 12px;
  }

  .content {
    padding: 10px;
  }

  .document-header h2 {
    font-size: 16px;
  }
}

@media (min-width: 1200px) {
  .content {
    padding: 40px;
  }

  .document-header {
    margin-bottom: 30px;
  }

  .action-buttons {
    gap: 15px;
  }

  .decline-btn,
  .sign-btn {
    padding: 10px 20px;
    font-size: 16px;
  }
}
</style>