module.exports = new Promise(async res => {
  const envs = {
    CARDS: "/cards",
    ABOUT: "/about",
    HOME: "/",
    dark: {
      CARDS: "/dark_cards",
    },
    orange: {
      CARDS: "/orange_cards",
    },
  }

  res(envs)
})
