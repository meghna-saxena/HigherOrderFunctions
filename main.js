const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 1995 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1991, end: 2007 },
  { name: "Company Four", category: "Finance", start: 1996, end: 2013 },
  { name: "Company Five", category: "Retail", start: 1994, end: 2010 },
  { name: "Company Six", category: "Retail", start: 1993, end: 2003 },
  { name: "Company Seven", category: "Auto", start: 1999, end: 2006 },
  { name: "Company Eight", category: "Finance", start: 1989, end: 1996 },
  { name: "Company Nine", category: "Retail", start: 2011, end: 2016 },
  { name: "Company Ten", category: "Auto", start: 1986, end: 1989 }
];

const ages = [
  33,
  21,
  28,
  5,
  14,
  27,
  42,
  30,
  26,
  35,
  22,
  18,
  12,
  23,
  66,
  2,
  98,
  104
];

/** ======================================================
 * forEach - just iterates over array, doesnt return anything
========================================================= */

// for (let i = 0; i < companies.length; i++) {
//   console.table(companies[i]);
// }

// companies.forEach(function(company) {
//   console.table(company);
//   console.log(company.name);
// });

/** ===================================================
 * filter
====================================================== */

// Get 21 and older

let canDrink1 = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink1.push(ages[i]);
  }
}

const canDrink2 = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});

const canDrink3 = ages.filter(age => age >= 21);
// console.log(canDrink);

// Filter retail companies
const retailCompanies = companies.filter(
  company => company.category === "Retail"
);

// console.log(retailCompanies.length)

// Get 80's companies
const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.end < 1990
);

//console.log(eightiesCompanies);

// Get companies that lasted 10 years or more..
const lastedTenYears = companies.filter(
  company => company.end - company.start >= 10
);

//console.log(lastedTenYears);

/** ===================================================
 * map - returns new array
====================================================== */

// Create array of company names
const companyNames = companies.map(company => {
  return `${company.name} [${company.start} - ${company.end}]`;
});

//console.log(companyNames);

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

// console.log(ageMap);

/** ===================================================
 * sort
====================================================== */

// Sort companies by start year

// const sortedCompanies = companies.sort(function(company1, company2) {
//   if (company1.start > company2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
//console.log(sortedCompanies);

// Sort ages
const sortAgesByAscendingOrder = ages.sort((a, b) => a - b); // ascending
const sortAgesByDescendingOrder = ages.sort((a, b) => b - a); // descending
//console.log(sortAgesByDescendingOrder);

/** ===================================================
 * reduce

The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

SYNTAX
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

====================================================== */

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

const ageSum = ages.reduce((total, age) => total + age, 0);
//console.log(ageSum);

// Get total years of all companies
const totalYears = companies.reduce(function(total, company) {
  return total + (company.end - company.start); // company.end - company.start => the total time single company last
}, 0);
//console.log(totalYears);

// Combine methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((totalAges, age) => totalAges + age, 0); // always pass the second argument in reduce method, the initial value, otherwise you get object Object in certain cases when you add an object's value

console.log(combined);
