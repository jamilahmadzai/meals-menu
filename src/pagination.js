const paginate = (meals) => {
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(meals.length / itemsPerPage);

  const newmeals = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return meals.slice(start, start + itemsPerPage);
  });

  return newmeals;
};

export default paginate;
