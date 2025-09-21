/**
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function(n, entries) {
  this.shopMovies = new Map();
  this.movieShops = new Map();
  this.rented = new PriorityQueue((a, b) => {
    if (a[2] !== b[2]) return a[2] - b[2];
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  });
  this.rentedLookup = new Map();

  for (const [shop, movie, price] of entries) {
    if (!this.shopMovies.has(shop)) {
      this.shopMovies.set(shop, new Map());
    }
    this.shopMovies.get(shop).set(movie, price);

    if (!this.movieShops.has(movie)) {
      this.movieShops.set(movie, new PriorityQueue((a, b) => {
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[0] - b[0];
      }));
    }
    this.movieShops.get(movie).enqueue([shop, price]);
  }
};

/**
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function(movie) {
  if (!this.movieShops.has(movie)) return [];

  const queue = this.movieShops.get(movie);
  const result = [];
  const seen = new Set();

  while (!queue.isEmpty() && result.length < 5) {
    const [shop, price] = queue.dequeue();
    if (this.shopMovies.get(shop)?.has(movie) && !seen.has(shop)) {
      result.push(shop);
      seen.add(shop);
    }
  }

  for (const shop of result) {
    queue.enqueue([shop, this.shopMovies.get(shop).get(movie)]);
  }

  return result;
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function(shop, movie) {
  const price = this.shopMovies.get(shop).get(movie);
  this.shopMovies.get(shop).delete(movie);
  this.rented.enqueue([shop, movie, price]);
  this.rentedLookup.set(`${shop}:${movie}`, price);
};

/**
 * @param {number} shop
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function(shop, movie) {
  const price = this.rentedLookup.get(`${shop}:${movie}`);
  this.rentedLookup.delete(`${shop}:${movie}`);
  if (!this.shopMovies.get(shop).has(movie)) {
    this.shopMovies.get(shop).set(movie, price);
    this.movieShops.get(movie).enqueue([shop, price]);
  }
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function() {
  const result = [];
  const seen = new Set();

  while (!this.rented.isEmpty() && result.length < 5) {
    const [shop, movie, price] = this.rented.dequeue();
    const key = `${shop}:${movie}`;
    if (this.rentedLookup.has(key) && !seen.has(key)) {
      result.push([shop, movie]);
      seen.add(key);
    }
  }

  for (const [shop, movie] of result) {
    const price = this.rentedLookup.get(`${shop}:${movie}`);
    this.rented.enqueue([shop, movie, price]);
  }

  return result;
};
