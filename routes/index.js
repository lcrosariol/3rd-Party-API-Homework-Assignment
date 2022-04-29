var express = require('express');//
var router = express.Router();//

// The fetch variable will be a function that behaves like fetch in the browser

const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const rootURL = 'https://api.chucknorris.io/jokes/random';


/* GET home page. */
router.get('/', function(req, res, next) {//
  // const catname = req.query.catname;//
  // console.log(`catname: ${catname}`);
  // const category = req.query.category;
  let category; 
  console.log(category);

  // if (!category) return res.render('index', {categoryData: null});
  // // For now, we'll pass the token in a querystring
  // let categoryData;
  res.render('index', { category });
  
  fetch(`${rootURL}`)
    .then(res => res.json())
    .then(cat => {
      categoryData = cat;
      res.render('index', { categoryData });

      // console.log(cat);
      // // return fetch(cat.repos_url);
      // return fetch(cat.url);
    })

    // .then(res => res.json())
    // .then(data => {
    //   // console.log(repos[0]);
    //   categoryData.data = data;
      //
    // });

    
});

module.exports = router;
