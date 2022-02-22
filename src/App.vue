<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --bs-body-font-family: Consolas, Monaco, Avenir, Helvetica, Arial, sans-serif !important;
  --bs-body-bg: #000000 !important;
  --bs-body-color: #cccccc !important;
  --bs-body-font-size: 24px !important;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0px !important;
}

a,
button {
  &:focus {
    outline: none;
    box-shadow: none;
  }
}

@media (max-width: 768px) {
  :root {
    --bs-body-font-size: 20px !important;
  }
}

@media (max-width: 376px) {
  :root {
    --bs-body-font-size: 16px !important;
  }
}
</style>
