const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const totalIncome = Number(numWeeks) * Number(weeklyRevenue);
  if (totalIncome < 1000000 || !numWeeks || !weeklyRevenue || isNaN(totalIncome)) {
    res.status(400).send();
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
