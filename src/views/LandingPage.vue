<template>
  <div class="landing-page">
    <!-- Header -->
    <header>
      <div class="logo">Direct E-Sign</div>
      <nav>
        <ul>
          <li>Why E-Sign</li>
          <li>Advantages</li>
          <li>Customers</li>
          <li>Testimonials</li>
          <li>Packages</li>
          <li>Contact Us</li>
          <li>
            <button class="create-account-btn">Create an Account</button>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <div class="content">
        <h1>MAKE YOUR MOBILE <br> as YOUR PEN</h1>
        <div class="subheading">
          <span class="line"></span>
          <span class="text">What we do</span>
          <span class="cursor">🖱️</span>
        </div>
        <p>Make day today sign work easy. You can sign on the document from any place and all the actions will be tracked.</p>
        <div class="action-buttons">
          <button class="login-btn" @click="navigateToCreateDocument">Login</button>
          <button class="create-account-btn">Create an Account</button>
        </div>
        <div class="app-store-links">
          <h3>FIND US ON THE APP STORE</h3>
          <div class="store-buttons">
            <a href="https://play.google.com/store" target="_blank">
              <img :src="googlePlayBadge" alt="Google Play" />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank">
              <img :src="appStoreBadge" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
      <div class="illustration">
        <img :src="illustrationImage" alt="Illustration" />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import illustrationImage from '@/assets/images/illustration.png';
import googlePlayBadge from '@/assets/images/google-play-badge.png';
import appStoreBadge from '@/assets/images/app-store-badge.png';

export default defineComponent({
  name: 'LandingPage',
  data() {
    return {
      illustrationImage,
      googlePlayBadge,
      appStoreBadge,
    };
  },
  methods: {
    navigateToCreateDocument() {
      this.$router.push({ name: 'CreateDocument' });
    },
  },
});
</script>

<style scoped>
.landing-page {
  font-family: Arial, sans-serif;
  background: #f5f6fa;
  min-height: 100vh;
  overflow: hidden;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

nav li {
  font-size: 14px;
  color: #7f8c8d;
  cursor: pointer;
}

nav li:last-child {
  margin-left: 20px;
}

.create-account-btn {
  padding: 8px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.create-account-btn:hover {
  background: #2980b9;
}

/* Main Content */
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  position: relative;
}

.content {
  max-width: 50%;
}

h1 {
  font-size: 48px;
  color: #3498db;
  line-height: 1.2;
  margin-bottom: 20px;
}

.subheading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.subheading .line {
  width: 40px;
  height: 2px;
  background: #dcdcdc;
}

.subheading .text {
  font-size: 16px;
  color: #7f8c8d;
}

.subheading .cursor {
  font-size: 16px;
}

p {
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 30px;
}

.action-buttons {
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}

.login-btn,
.create-account-btn {
  padding: 10px 30px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
}

.login-btn {
  background: #fff;
  border: 2px solid #3498db;
  color: #3498db;
}

.login-btn:hover {
  background: #f0f0f0;
}

.app-store-links h3 {
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.store-buttons {
  display: flex;
  gap: 20px;
}

.store-buttons img {
  width: 135px;
  height: auto;
}

.illustration {
  max-width: 50%;
}

.illustration img {
  width: 100%;
  height: auto;
}
</style>