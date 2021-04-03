<template>
  <nav>
    <button class="btn-menu">Menu</button>
    <ul class="main-nav">
      <li><a href="#about">About</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#activity">Activityi</a></li>
      <li><a href="#address">Address</a></li>
    </ul>
  </nav>
</template>

<script>
const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');
btn.addEventListerner('click', () => {
  nav.classList.toggle('open-menu');
});
</script>

<style scoped>
.btn-menu {
  position: absolute;
  top: 12px;
  right: 12px;
  border: 1px solid rgba(255, 255, 255, .5);
  color: var(--white);
  padding: .5rem 1rem;
}
.main-nav {
  background: var(--grey);
  width: 0;
  position: absolute;
  z-index: 2;
  top: 50px;
  right: 0;
  overflow: hidden;
}
.main-nav.open-menu {
  width: 100%;
}
.main-nav li {
  text-align: center;
  margin: 2rem 0;
}
.main-nav a {
  display: block;
}
</style>
