# Fortunate
Learn the highs and lows of market trading in this interactive web game that utilizes virtual currency to give you experience buying and selling stocks.

---

**MVP:**
1. Sign in/user athentication
2. Working virtual market
3. Definitions/dictionary
4. Intro tutorial to cover:
    - Long term vs. Short term trading
    - Beating the Market and betas
    - Metrics (P/E ratio, Volume, Market Cap etc)
    - Associated fees
5. Portfolio overview 
6. Transaction history

---

**Stretch Goals:**
1. Stock look up
2. Support for bonds
3. Tutorials for bonds
4. Support for Mutual/Index Funds
5. Tutorials for funds
6. Support for shorting
7. Tutorials for shorting
8. Tutorials for candle stick patterns

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
  - Implement fees (backend)
  - set up dictionary and terms(front end)

Week 5:
  - get API integrated in backend and the virutal market logic for backend done (backend)
  - Create tutorial for metrics and fees (frontend)
  - create tutorial for long term vs short term trading (frontend)

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

---

**Tech Stack:**

- Firebase for data storage, authentication, and functions
  - Firebase w/React authentication by webdevsimplified [here](https://www.youtube.com/watch?v=PKwu15ldZ7k&ab_channel=WebDevSimplified)
  - Firebase and react.js tutorial by firecast [here](https://www.youtube.com/watch?v=mwNATxfUsgI&ab_channel=Firebase) 
    - [Part2](https://www.youtube.com/watch?v=p4XTMvagQ2Q&ab_channel=Firebase)
- Adobe XD for wireframes
  - Tutorial [here](https://letsxd.com/getting-started)
- React.js for front end
  - Free code camp example tutorial for React/Firebase application 12 hr long video [here](https://www.youtube.com/watch?v=m_u6P5k0vP0&ab_channel=freeCodeCamp.org) HIGHLY RECOMMENDED
    - first 4hrs is backend setup for firebase
    - last 8hrs is front end and react.js stuff
  - Comprehensive React Youtube Tutorial [here](https://www.youtube.com/watch?v=15YB__vYpuA&ab_channel=codedamn)
  - React docs [here](https://reactjs.org/docs/getting-started.html)
  - React and redux tutorial 1.5 hrs [here](https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh)
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
  - Alternative to chart.js is [Material UI](https://demos.creative-tim.com/material-dashboard-react/?_ga=2.110349637.1305139177.1610393674-449867271.1610393674#/admin/dashboard)
- Redux.js for state management
- Unirest for HTTP request and API's

---

**Softerware to Install**
- [Node.js](https://nodejs.org/en/download/ )
  - We will be using node.js and the npm manager to download other tools and also to run along side the react.js front end
- [React](https://reactjs.org/docs/getting-started.html)
  - React.js will make up the front end of the app and needs to be installed. You will also find the "create-react-app" repository incredibly usefull when starting your first react.js project
- [Firebase](https://firebase.google.com/) 
  - This is a backend as a service provided by Google that the project will use for database, authentication, and backend functionality purposes. You will need to globally install Firebase to your machine through Node.js' npm feature.
- Unirest
  - A HTTP request library built for Node.js. We will be using unirest to connect with any needed API's.
  - Unirest installation and use is covered [here in a github repo](https://github.com/Kong/unirest-nodejs) and also [here in rapidAPI's official documentation](https://docs.rapidapi.com/docs/nodejs-unirest). Installation is done via npm

  ---
  **Additional Resources**


  ***The first 4 of these are incredibly helpful youtube videos to further explain topics. Especially The javascript videos as Firebase makes extensive use of promises and asynchronous functions in their services. 
  - [Javascript: exporting modules](https://www.youtube.com/watch?v=YGHnvrDGmJw&ab_channel=DavidConnelly)
  - [Javascript: Asynchronous/Await/Promises](https://www.youtube.com/watch?v=V_Kr9OSfDeU&list=LL&index=2&ab_channel=FrancisMasangcayFrancisMasangcay)
  - [Firebase functions: Chaining multiple database queries](https://firebase.google.com/docs/functions/video-series)
  - [GitHub Crash Course by Brad Traversy](https://www.youtube.com/watch?v=SWYqp7iY_Tc&feature=youtu.be&ab_channel=TraversyMedia)
  - [Firestore reference documentation](https://googleapis.dev/nodejs/firestore/latest/)