const articles = {
  about: `
  <h2 class="font-bold text-[#0F172A]">About</h2>
    <p>
      This is the About section. Learn more about ASC Progress Reports and its purpose.
    </p>`,
  week1: `
  <h2 class="font-bold text-[#0F172A]">Week 1</h2>
    <p>
      Welcome to Week 1! Here you'll find progress reports and updates from the first week.
    </p>`,
}

document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = document.querySelectorAll('[data-section]')
  const mainArticle = document.getElementById('main-article')

  mainArticle.innerHTML = articles['about']

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.getAttribute('data-section')
      if (articles[section]) {
        mainArticle.innerHTML = articles[section]
      }
    })
  })

})
