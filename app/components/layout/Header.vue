<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--transparent': isTransparent }">
    <div class="header-top">
      <div class="container">
        <div class="header-info">
          <div class="info-left">
            <span class="info-item">
              <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Kansanga, Opp UK Mall | Kampala, Uganda
            </span>
          </div>
          <div class="info-right">
            <a href="tel:+256768461164" class="info-item">
              <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +256 768 461 164
            </a>
            <a href="mailto:Kilagalaescapesafaris@gmail.com" class="info-item">
              <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 5L2 7"/>
              </svg>
              Kilagalaescapesafaris@gmail.com
            </a>
            <div class="social-icons">
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <nav class="nav-main">
      <div class="container">
        <div class="nav-wrapper">
          <NuxtLink to="/" class="logo">
            <img src="/KILAGALA-LOGO-FINAL--2.jpg" alt="Kilagala Escape Safaris" class="logo-img">
          </NuxtLink>
          
          <div class="nav-menu" :class="{ 'nav-menu--open': isMenuOpen }">
            <NuxtLink to="/" class="nav-link" @click="closeMenu">
              HOME
            </NuxtLink>
            
            <NuxtLink to="/about" class="nav-link" @click="closeMenu">
              ABOUT US
            </NuxtLink>
            
              <div class="nav-item has-dropdown" 
                  @mouseenter="showDropdown('destinations')" 
                  @mouseleave="hideDropdown('destinations')"
                  @click="toggleDropdownMobile('destinations')">
                <NuxtLink to="/destinations" class="nav-link" @click.prevent>
                  DESTINATIONS
                  <svg class="arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </NuxtLink>
                <div class="dropdown dropdown--mega" :class="{ 'dropdown--active': activeDropdown === 'destinations' }" v-show="activeDropdown === 'destinations' || !isMobile">
                  <div class="mega-content">
                    <div class="mega-column">
                      <h4>Uganda National Parks</h4>
                      <NuxtLink to="/destinations/bwindi-impenetrable" class="dropdown-link">Bwindi Impenetrable National Park</NuxtLink>
                      <NuxtLink to="/destinations/lake-mburo" class="dropdown-link">Lake Mburo National Park</NuxtLink>
                      <NuxtLink to="/destinations/kibale" class="dropdown-link">Kibale National Park</NuxtLink>
                      <NuxtLink to="/destinations/mgahinga" class="dropdown-link">Mgahinga Gorilla National Park</NuxtLink>
                    </div>
                    <div class="mega-column">
                      <h4>More Uganda Parks</h4>
                      <NuxtLink to="/destinations/kidepo" class="dropdown-link">Kidepo Valley National Park</NuxtLink>
                      <NuxtLink to="/destinations/rwenzori" class="dropdown-link">Mountain Rwenzori National Park</NuxtLink>
                      <NuxtLink to="/destinations/murchisons" class="dropdown-link">Murchison Falls National Park</NuxtLink>
                      <NuxtLink to="/destinations/queen-elizabeth" class="dropdown-link">Queen Elizabeth National Park</NuxtLink>
                    </div>
                    <div class="mega-column">
                      <h4>Uganda Experiences</h4>
                      <NuxtLink to="/destinations/jinja" class="dropdown-link">Things to do in Jinja</NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

            
            <NuxtLink to="/packages" class="nav-link" @click="closeMenu">
              PACKAGES
            </NuxtLink>
            
            <NuxtLink to="/gallery" class="nav-link" @click="closeMenu">
              GALLERY
            </NuxtLink>
            
            <NuxtLink to="/blog" class="nav-link" @click="closeMenu">
              BLOG
            </NuxtLink>
            
            <NuxtLink to="/contact" class="nav-link" @click="closeMenu">
              CONTACT
            </NuxtLink>
          </div>
          
          <div class="nav-actions">
            
            <NuxtLink to="/contact" class="cta-button">
              BOOK NOW
            </NuxtLink>
            
            <button 
              class="menu-toggle"
              @click="toggleMenu"
              :aria-expanded="isMenuOpen"
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeDropdown = ref('')
const isTransparent = ref(true)
const isMobile = ref(false)

const showDropdown = (name: string) => {
  if (!isMobile.value) {
    activeDropdown.value = name
  }
}

const hideDropdown = (name: string) => {
  if (!isMobile.value && activeDropdown.value === name) {
    activeDropdown.value = ''
  }
}

const toggleDropdownMobile = (name: string) => {
  if (isMobile.value) {
    activeDropdown.value = activeDropdown.value === name ? '' : name
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('menu-open')
  } else {
    document.body.style.overflow = ''
    document.body.classList.remove('menu-open')
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  activeDropdown.value = ''
  document.body.style.overflow = ''
  document.body.classList.remove('menu-open')
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
    isTransparent.value = window.scrollY < 50
  }
  
  const handleResize = () => {
    isMobile.value = window.innerWidth <= 992
    if (!isMobile.value && isMenuOpen.value) {
      closeMenu()
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  handleScroll()
  handleResize()
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
    document.body.style.overflow = ''
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  transition: all 0.3s ease;
  background: var(--color-white);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.header--transparent {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.header--scrolled {
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
}

.header--scrolled .header-top {
  max-height: 0;
  overflow: hidden;
  padding: 0;
  opacity: 0;
}

.header-top {
  background: var(--color-forest-green);
  color: var(--color-white);
  padding: 8px 0;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.header-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

.info-left,
.info-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-white);
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.2s;
}

.info-item:hover {
  opacity: 1;
  color: var(--color-golden-yellow);
}

.icon {
  flex-shrink: 0;
}

.social-icons {
  display: flex;
  gap: 12px;
  padding-left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--color-white);
  transition: all 0.2s;
}

.social-icons a:hover {
  background: var(--color-golden-yellow);
  color: var(--color-forest-green);
  transform: translateY(-2px);
}

.nav-main {
  padding: 0;
  transition: padding 0.3s ease;
}

.header--scrolled .nav-main {
  padding: 5px 0;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  transition: padding 0.3s ease;
  max-width: 100%;
}

.header--scrolled .nav-wrapper {
  padding: 10px 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease;
  text-decoration: none;
}

.logo:hover {
  transform: scale(1.02);
}

.logo-img {
  height: 55px;
  width: auto;
  object-fit: contain;
  border-radius: 4px;
  transition: height 0.3s ease;
}

.header--scrolled .logo-img {
  height: 45px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.logo-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-forest-green);
  line-height: 1.2;
  font-family: var(--font-family-heading);
}

.logo-tagline {
  font-size: 11px;
  color: var(--color-gray);
  line-height: 1.2;
  margin-top: 2px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 0;
  margin: 0 20px;
  flex: 1;
  justify-content: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 20px;
  color: var(--color-charcoal);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.8px;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  position: relative;
  white-space: nowrap;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--color-golden-yellow);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-forest-green);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}

.arrow {
  transition: transform 0.3s ease;
}

.nav-item:hover .arrow {
  transform: rotate(180deg);
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: var(--color-white);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  border-top: 3px solid var(--color-golden-yellow);
  z-index: 100001;
}

.dropdown--active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown--mega {
  min-width: 600px;
  padding: 30px;
}

.mega-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.mega-column h4 {
  color: var(--color-forest-green);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--color-golden-yellow);
}

.dropdown-link {
  display: block;
  padding: 8px 20px;
  color: var(--color-charcoal);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s ease;
  position: relative;
}

.dropdown-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 2px;
  background: var(--color-golden-yellow);
  transition: width 0.3s ease;
  transform: translateY(-50%);
}

.dropdown-link:hover {
  color: var(--color-forest-green);
  background: var(--color-light-beige);
  padding-left: 30px;
}

.dropdown-link:hover::before {
  width: 10px;
  left: 15px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 25px;
  justify-content: flex-end;
  min-width: 200px;
}


.cta-button {
  padding: 14px 40px;
  background: var(--color-golden-yellow);
  color: var(--color-charcoal);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(244, 200, 66, 0.3);
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  min-width: 140px;
  margin-right: 15px;
}

.cta-button:hover {
  background: var(--color-golden-yellow-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(244, 200, 66, 0.4);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 26px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.menu-toggle:hover {
  background: rgba(45, 80, 22, 0.1);
}

.menu-toggle span {
  display: block;
  height: 3px;
  width: 100%;
  background: var(--color-forest-green);
  border-radius: 3px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-origin: center;
}

.menu-toggle[aria-expanded="true"] span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
  background: var(--color-golden-yellow);
}

.menu-toggle[aria-expanded="true"] span:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.menu-toggle[aria-expanded="true"] span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
  background: var(--color-golden-yellow);
}

@media (max-width: 1400px) {
  .nav-link {
    padding: 10px 16px;
    font-size: 13px;
  }
  
  .dropdown--mega {
    min-width: 500px;
  }
}

@media (max-width: 1200px) {
  .nav-link {
    padding: 10px 12px;
    font-size: 12px;
    letter-spacing: 0.5px;
  }
  
  .logo-title {
    font-size: 16px;
  }
  
  .logo-tagline {
    font-size: 10px;
  }
}

/* Global mobile menu reset */
@media (max-width: 992px) {
  body.menu-open {
    overflow: hidden !important;
    position: fixed !important;
    width: 100% !important;
    top: 0 !important;
    left: 0 !important;
  }
  
  /* Reset any conflicting CSS when menu is open */
  body.menu-open * {
    position: static;
  }
  
  body.menu-open .header,
  body.menu-open .nav-menu,
  body.menu-open .nav-menu--open,
  body.menu-open .menu-toggle {
    position: fixed !important;
  }
  
  body.menu-open .nav-menu--open {
    z-index: 2147483647 !important;
    transform: translateX(0) !important;
  }
}

@media (max-width: 992px) {
  .header-top {
    display: none;
  }
  
  .header {
    z-index: 999999 !important;
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
  }
  
  .menu-toggle {
    display: flex !important;
    z-index: 2147483647 !important;
    position: relative !important;
    background: rgba(255, 255, 255, 0.9) !important;
    border-radius: 6px !important;
    backdrop-filter: blur(10px) !important;
  }
  
  .nav-wrapper {
    padding: 10px 0;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, var(--color-white) 0%, var(--color-light-beige) 100%);
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin: 0;
    padding: 100px 30px 40px;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 999998;
    backdrop-filter: blur(10px);
    border-left: 3px solid var(--color-golden-yellow);
  }
  
  .nav-menu--open {
    transform: translateX(0) !important;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
    z-index: 2147483647 !important;
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  
  .nav-menu--open::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(45, 80, 22, 0.6), rgba(0, 0, 0, 0.4));
    z-index: 99999;
    animation: fadeIn 0.4s ease;
    backdrop-filter: blur(2px);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInFromRight {
    from { 
      opacity: 0; 
      transform: translateX(30px);
    }
    to { 
      opacity: 1; 
      transform: translateX(0);
    }
  }
  
  .nav-menu--open .nav-link {
    animation: slideInFromRight 0.4s ease forwards;
  }
  
  .nav-menu--open .nav-link:nth-child(1) { animation-delay: 0.1s; }
  .nav-menu--open .nav-link:nth-child(2) { animation-delay: 0.15s; }
  .nav-menu--open .nav-link:nth-child(3) { animation-delay: 0.2s; }
  .nav-menu--open .nav-link:nth-child(4) { animation-delay: 0.25s; }
  .nav-menu--open .nav-link:nth-child(5) { animation-delay: 0.3s; }
  .nav-menu--open .nav-link:nth-child(6) { animation-delay: 0.35s; }
  .nav-menu--open .nav-link:nth-child(7) { animation-delay: 0.4s; }
  
  .nav-link {
    padding: 18px 25px;
    border-bottom: 1px solid rgba(45, 80, 22, 0.1);
    font-size: 16px;
    font-weight: 600;
    justify-content: space-between;
    color: var(--color-forest-green-dark);
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all 0.3s ease;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 100001;
  }
  
  .nav-link:hover {
    background: var(--color-forest-green);
    color: white;
    transform: translateX(8px);
    border-color: var(--color-golden-yellow);
  }
  
  .nav-link.router-link-active {
    background: var(--color-golden-yellow);
    color: var(--color-forest-green-dark);
    font-weight: 700;
  }
  
  .nav-link::after {
    display: none;
  }
  
  .nav-item.has-dropdown {
    display: block;
  }
  
  .nav-item.has-dropdown .nav-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .nav-item.has-dropdown .arrow {
    transition: transform 0.3s ease;
  }
  
  .nav-item.has-dropdown .arrow {
    transform: rotate(0);
  }
  
  .dropdown--active ~ .nav-link .arrow,
  .nav-item.has-dropdown:has(.dropdown--active) .arrow {
    transform: rotate(180deg);
  }
  
  .dropdown {
    display: none;
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: rgba(45, 80, 22, 0.05);
    margin: 8px 0 16px;
    padding: 15px 20px;
    border-radius: 12px;
    border-top: 2px solid var(--color-golden-yellow);
    border-left: 3px solid var(--color-forest-green);
  }
  
  .dropdown--active {
    display: block;
  }
  
  .dropdown--mega {
    min-width: auto;
    padding: 15px 20px;
  }
  
  .mega-content {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .mega-column h4 {
    font-size: 13px;
    margin-bottom: 10px;
    padding-bottom: 8px;
  }
  
  .dropdown-link {
    padding: 12px 18px;
    font-size: 14px;
    border-radius: 6px;
    margin-bottom: 4px;
    background: transparent;
    transition: all 0.3s ease;
  }
  
  .dropdown-link:hover {
    background: var(--color-white);
    color: var(--color-forest-green-dark);
    padding-left: 28px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .cta-button {
    padding: 10px 20px;
    font-size: 12px;
    min-width: 110px;
  }
  
  .logo {
    flex: 1;
  }
  
  .nav-actions {
    gap: 20px;
    align-items: center;
  }
  
  .cta-button {
    margin-right: 15px !important;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 15px;
  }
  
  .nav-actions {
    gap: 15px !important;
  }
  
  .cta-button {
    margin-right: 10px !important;
    padding: 8px 16px !important;
    font-size: 12px !important;
  }
  
  .logo-title {
    font-size: 15px;
  }
  
  .logo-tagline {
    display: none;
  }
  
  .logo-img {
    height: 45px;
  }
  
  .header--scrolled .logo-img {
    height: 40px;
  }
}

@media (max-width: 576px) {
  .logo-img {
    height: 40px;
  }
  
  .header--scrolled .logo-img {
    height: 35px;
  }
  
  .logo-title {
    font-size: 14px;
    line-height: 1.1;
  }
  
  .cta-button {
    padding: 10px 18px;
    font-size: 11px;
    min-width: 100px;
    letter-spacing: 0.5px;
  }
  
  .nav-wrapper {
    padding: 8px 0;
  }
  
  .menu-toggle {
    width: 25px;
    height: 20px;
  }
  
  .menu-toggle span {
    height: 2px;
  }
  
  .nav-menu {
    padding: 80px 25px 30px;
  }
  
  .nav-link {
    font-size: 15px;
    padding: 16px 20px;
    letter-spacing: 0.8px;
  }
  
  .dropdown-link {
    font-size: 13px;
    padding: 10px 16px;
  }
  
  .mega-column h4 {
    font-size: 12px;
    margin-bottom: 8px;
  }
}

@media (max-width: 400px) {
  .logo-text {
    max-width: 140px;
  }
  
  .logo-img {
    height: 38px;
  }
  
  .logo-title {
    font-size: 13px;
  }
  
  .cta-button {
    padding: 9px 16px;
    font-size: 10px;
    min-width: 90px;
  }
  
  .nav-actions {
    gap: 8px;
  }
}
</style>