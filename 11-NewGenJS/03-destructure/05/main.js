let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
// careful the [] {}
// if {} = bring all both key and value.
