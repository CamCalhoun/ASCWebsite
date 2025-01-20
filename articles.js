const articles = {
  about: `
  <h1 class="font-bold text-[#0F172A] text-3xl">About ASC</h1>
  <br>
  <h2 class="font-bold text-[#0F172A] text-2xl">What is ASC?</h2>
    <p>AI Study Companion (ASC) is an in progress, AI powered study companion hosted on the web. ASC can tracks the users progress in selected subjects, and pushes them in the correct direction to facilitate learning.</p>
  <br>
  <h2 class="font-bold text-[#0F172A] text-2xl">Why choose ASC?</h2>
    <p>ASC differs from other study companions with its built in AI capabilities. ASC will not use AI to verify a students work, but to procedurally generate questions and study materials tailored to each individaul user. The more you interact with ASC, the better ASC will grow to understand your strengths and weaknesses regarding various subjects.</p>
  <br>
  <h2 class="font-bold text-[#0F172A] text-2xl">What technologies does ASC utilize?</h2>
    <p>ASC will be a full-stack web application with a React front-end and a Python back-end utilizing the FastAPI library.</p>
  <br>
  <h2 class="font-bold text-[#0F172A] text-2xl">Who created ASC?</h2>
    <p>ASC is a student created senior project for Pennsylvania Western University driven by the following members:</p>
    <ul>
      <li>Cameron Calhoun</li>
      <li>Gage Keslar</li>
      <li>Jonathan Buckel</li>
      <li>Seth Morgan</li>
    </ul>
    <p>All members are students of Pennsylvania Western University studying Computer Science.</p>
    `,
  week1: `
  <h2 class="font-bold text-[#0F172A]">Week 1</h2>
    <p>Week 1's content will be updated at a future date with this weeks progress report and presentation.</p>`,
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
