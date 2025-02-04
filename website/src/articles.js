const articles = {
  about: `
  <h1>About ASC</h1>
  <h2>What is ASC?</h2>
    <p>AI Study Companion (ASC) is an in progress, AI powered study companion hosted on the web. ASC can track the users progress in selected subjects, and pushes them in the correct direction to facilitate learning.</p>
  <h2>Why choose ASC?</h2>
    <p>ASC differs from other study companions with its built in AI capabilities. ASC will not use AI to verify a students work, but to procedurally generate questions and study materials tailored to each individaul user. The more you interact with ASC, the better ASC will grow to understand your strengths and weaknesses regarding various subjects.</p>
  <h2>What technologies does ASC utilize?</h2>
    <p>ASC will be a full-stack web application with a React front-end and a Python back-end utilizing the FastAPI library.</p>
  <h2>Who created ASC?</h2>
    <p>ASC is a student created senior project for Pennsylvania Western University driven by the following members:</p>
    <ul>
      <li>Cameron Calhoun</li>
      <li>Gage Keslar</li>
      <li>Jonathan Buckel</li>
      <li>Seth Morgan</li>
    </ul>
    <p>All members are students of Pennsylvania Western University studying Computer Science.</p>
  <h2>Gantt Chart</h2>
    <h3>Updated 1/24/24</h3>
    
<iframe class="w-full h-[800px] max-w-screen-lg mx-auto rounded-lg shadow-lg"
        src="Gantt Chart - Senior Project.pdf#toolbar=1"></iframe>
    `,
  week1: `
  <h1>Week 1</h1>
  <h2>Summary:</h2>
    <p>Week 1 was entirely lectures, and thus no report was completed. Reports begin in week 2.</p>
  `,
  week2: `

  <h1>Week 2</h1>
  <h2>Summary:</h2>
    <p>This first week was spent setting up our development environment, developing the project website, and making the Gantt chart. Overall, everything went according to plan. The only change made is that we will no longer be using Docker. Due to compatibility challenges we reevaluated our need for Docker and realized that we would be able to work fine without it.</p>
  <h2>What was Accomplished:</h2>
    <ul>
      <li>Gantt Chart</li>
      <li>Git Repository</li>
      <li>FastAPI and React communcation</li>
      <li>Website for weekly reports</li>
    </ul>
  <h2>Problems Encountered:</h2>
    <ul>
      <li>Docker compatability issues</li>
    </ul>
  <h2>Plans to Overcome Problems:</h2>
    <ul>
      <li>No longer using Docker. We determined that we wouldn't be losing annything by not using it.</li>
    </ul>
  <h2>Plans for next week:</h2>
    <ul>
      <li>Get API keys</li>
      <li>Begin backend development</li>
    </ul>
  <h2>Member Contributions:</h2>
    <ul>
      <li>Cameron Calhoun - Website</li>
      <li>Jonathan Buckel - Weekly Report</li>
      <li>Gage Keslar - Gantt Chart</li>
      <li>Seth Morgan - Presentation</li>
    </ul>
  `,
  week3: `
  <h1>Week 3</h1>
  <h2>Summary:</h2>
    <p>This second week of the project was focused primarily on OpenAI API Integration, and developing a working demo for this integration. We first obtained tokens for communicating with the AI model. These are spent with each message sent and received. Limits were set on the amount of there tokens used, as well as monetary monthly limits on OpenAI. To communicate with the AI model, we must make requests through an API. This meant we had to develop a way to store our API keys. This was done through the python-dotenv library, and making use of .env files. This hides the API key from the project itself, and makes the key secure. If we were to expose our API key to the web, our tokens could be used by malicious, outside users, and our wallets drained. The rest of the time this week was spent developing our communication with the AI model, and developing a simple chat bot we can communicate with. This will allow easy integration of features in the program that require communicating with the AI model.</p>
  <h2>What was Accomplished:</h2>
    <ul>
      <li>AI tokens acquired</li>
      <li>OpenAI API communication established</li>
      <li>Proper storage and hiding of API keys</li>
      <li>Simple chat bot created</li>
    </ul>
  <h2>Problems Encountered:</h2>
    <ul>
      <li>Potential abuse of tokens</li>
      <li>Setting up API keys across all developers environments</li>
    </ul>
  <h2>Plans to Overcome Problems:</h2>
    <ul>
      <li>No longer using Docker. We determined that we wouldn't be losing annything by not using it.</li>
    </ul>
  <h2>Plans for next week:</h2>
    <ul>
      <li>Establish User class</li>
      <li>Establish Subject Classes</li>
    </ul>
  <h2>Member Contributions:</h2>
    <ul>
      <li>Cameron Calhoun - Weekly Report</li>
      <li>Jonathan Buckel - AI communication, python-dotenv implementation</li>
      <li>Gage Keslar - AI communication, presentation, chat bot</li>
      <li>Seth Morgan - AI communication</li>
    </ul>

  `,
  week4: `
  <h1>Week 4</h1>
  <h2>Summary:</h2>
    <p>Week 4 is currently in progress. Check back later to see what we've been working on.</p>
  `
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
