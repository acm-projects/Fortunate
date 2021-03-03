# Fortunate

Learn the highs and lows of market trading in this interactive web game that utilizes virtual currency to give you experience buying and selling stocks.

---

**MVP:**

1. Sign in/user athentication
2. Working virtual market
3. Definitions/Thesaurus
4. Intro tutorial:
   - Should have tooltips and seperate page articles
5. Portfolio overview
6. Stock lookup
7. Transaction history

- Tutorial Topics:
  - Beating the Market and betas
  - Metrics (P/E ratio, Volume, Market Cap etc)
  - Associated fees

---

**Stretch Goals:**

1. Leader board(s)
2. Demo mode (no account needed to explore app)
3. Different Difficulty/investor knowledge levels
4. Optimized for mobile devices
5. Support for bonds
6. Tutorials for bonds
7. Support for Mutual/Index Funds
8. Tutorials for funds
9. Support for shorting
10. Tutorials for shorting
11. Tutorials for candle stick patterns

---

**Tech Stack:**

- Firebase for data storage, authentication, and functions
- Adobe XD for wireframes
  - Tutorial [here](https://letsxd.com/getting-started)
- React.js for front end

  - Free code camp example tutorial for React/Firebase application 12 hr long video [here](https://www.youtube.com/watch?v=m_u6P5k0vP0&ab_channel=freeCodeCamp.org) HIGHLY RECOMMENDED
    - first 4hrs is backend setup for firebase
    - last 8hrs is front end and react.js stuff
  - React docs [here](https://reactjs.org/docs/getting-started.html)

  - React app/web app deployment [here](https://rapidapi.com/blog/how-to-deploy-a-react-app/)

For icons:

- https://material.io/resources/icons/?style=baseline
- https://materialdesignicons.com/
- https://www.flaticon.com/
- https://www.pexels.com/
- https://commons.wikimedia.org/wiki/Category:Images
- https://unsplash.com/images/stock

**APIs & Libraries**

- For the market data: [Yahoo Finance API](https://rapidapi.com/apidojo/api/yahoo-finance1)
  - [Yahoo Finance api tutorial](https://rapidapi.com/blog/how-to-use-the-yahoo-finance-api/)
- For Portfolio overview's graphs and charts: [Chart.js](https://www.chartjs.org/)
  - Youtube video covering general usage [here](https://www.youtube.com/watch?v=sE08f4iuOhA&ab_channel=TraversyMedia)
  - Youtube video covering usage with React [here](https://www.youtube.com/watch?v=Ly-9VTXJlnA&ab_channel=TraversyMedia)
- Redux.js for state management
- Unirest for HTTP request and API's
- Material ui React components (useful for front end) [link here](https://material-ui.com/)

---

**Softerware to Install**

- [Node.js](https://nodejs.org/en/download/)
  - We will be using node.js and the npm manager to download other tools and also to run along side the react.js front end
- [React](https://reactjs.org/docs/getting-started.html)
  - React.js will make up the front end of the app and needs to be installed. You will also find the "create-react-app" repository incredibly usefull when starting your first react.js project
- [Firebase](https://firebase.google.com/)
  - This is a backend as a service provided by Google that the project will use for database, authentication, and backend functionality purposes. You will need to globally install Firebase to your machine through Node.js' npm feature.
- Unirest
  - A HTTP request library built for Node.js. We will be using unirest to connect with any needed API's.
  - Unirest installation and use is covered [here in a github repo](https://github.com/Kong/unirest-nodejs) and also [here in rapidAPI's official documentation](https://docs.rapidapi.com/docs/nodejs-unirest). Installation is done via npm
- [Axios](https://www.npmjs.com/package/axios#features) a javascript library to make https requests use is for the front end react.js app to communicate with back end's api served through firebase functions
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en) : an optional chrome extension that helps a ton with debugging a react project

  ***

  **Additional Resources**

  \*\*\*The first 4 of these are incredibly helpful youtube videos to further explain topics. Especially The javascript videos as Firebase makes extensive use of promises and asynchronous functions in their services.

  - [Javascript: exporting modules](https://www.youtube.com/watch?v=YGHnvrDGmJw&ab_channel=DavidConnelly)
  - [Javascript: Asynchronous/Await/Promises](https://www.youtube.com/watch?v=V_Kr9OSfDeU&list=LL&index=2&ab_channel=FrancisMasangcayFrancisMasangcay)
  - [Firebase functions: Chaining multiple database queries](https://firebase.google.com/docs/functions/video-series)
  - [GitHub Crash Course by Brad Traversy](https://www.youtube.com/watch?v=SWYqp7iY_Tc&feature=youtu.be&ab_channel=TraversyMedia)
  - [Firestore reference documentation](https://googleapis.dev/nodejs/firestore/latest/)
  - [Redux Documentation/Tutorials](https://react-redux.js.org/introduction/quick-start)
  - [Redux Guide](https://daveceddia.com/what-does-redux-do/)

---

**Estimated Timeline:**

Week 1:

- Research and set up React.js project along with Firebase (everyone)
- wire frame pages with Figma or Adobe XD or just sketch it out (frontend)
- start coding up login and authentication (backend)

Week 2:

- code up front end for buy/sell pages (frontend)
- finish coding up login (backend)
- set up database in Firestore (backend)

Week 3:

- code up all get routes (backend)
- code up home page and transaction history pages

Week 4:

- code up post routes (backend)
- set up dictionary and terms(front end)

Week 5:

- get API integrated in backend and the virutal market logic for backend done (backend)
- Create tutorial pages

Week 6:

- continue immplementing tutorials (Front and backend)
- integrate back end and front end

Week 7:

- integrate back end and front end

Week 8:

- presentation prep

Week 9:

- presentation prep

Week 10:

- presentation week
