const { sql } = require("slonik");

// Movies-related queries

const getAllMovies = async (db) => {
  try {
    return await db.query(
      sql`SELECT title FROM movies WHERE movies IS NOT NULL;`
    );
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

const mpaaNotNull = async (db) => {
  try {
    return await db.query(
      sql`SELECT title, mpaa_rating FROM movies WHERE mpaa_rating  IS NOT  NULL`
    );
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

const budgetLess5Ht = async (db) => {
  try {
    return await db.query(sql`SELECT title, production_budget , distributor FROM movies 
        WHERE production_budget <= 500000 
        `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

const mostExpensiveMovies = async (db) => {
  try {
    return await db.query(sql`SELECT title,  major_genre , production_budget  FROM movies 
            WHERE production_budget IS NOT NULL
            ORDER BY production_budget DESC LIMIT 10 OFFSET 0
            `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
const srcRemake = async (db) => {
  try {
    return await db.query(sql`SELECT title, source  FROM movies 
      WHERE source LIKE 'Remake'
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

const imdbNotNull = async (db) => {
  try {
    return await db.query(sql`SELECT title, distributor, imdb_rating  FROM movies 
      WHERE imdb_rating IS NOT NULL
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

const moviesTomatoes = async (db) => {
  try {
    return await db.query(sql`SELECT title, rotten_tomatoes_rating FROM movies 
      rotten_tomatoes_rating ORDER BY rotten_tomatoes_rating ASC LIMIT 100 OFFSET 0
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

const best20Movies = async (db) => {
  try {
    return await db.query(sql`SELECT title, major_genre, imdb_rating, imdb_votes FROM movies 
      WHERE (major_genre,imdb_rating, imdb_votes) IS NOT NULL
      ORDER BY imdb_rating DESC , imdb_votes DESC LIMIT 20 OFFSET 0
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
const budgetNotRated = async (db) => {
  try {
    return await db.query(sql`SELECT sum(production_budget)FROM movies 
      WHERE mpaa_rating ='Not Rated' AND title IS NOT NULL
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
const futurMovies = async (db) => {
  try {
    return await db.query(sql`SELECT title, release_date FROM movies
      WHERE release_date > current_date 
      ORDER BY release_date ASC
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
const yearsRate = async (db) => {
    try {
      return await db.query(sql`SELECT title, us_gross , release_date
      FROM movies
      WHERE release_date BETWEEN '1950-01-01' AND '1980-01-01'
      ORDER BY release_date ASC
              `);
    } catch (error) {
      console.info(">something went wrong:", error.message);
      return null;
    }
  };
  const grossZero = async (db) => {
    try {
      return await db.query(sql`SELECT title, us_gross , worldwide_gross
      FROM movies
      WHERE worldwide_gross = 0 OR us_gross = 0
              `);
    } catch (error) {
      console.info(">something went wrong:", error.message);
      return null;
    }
  };
  const lessGross50 = async (db) => {
    try {
      return await db.query(sql`SELECT title, us_gross 
      FROM movies
      WHERE us_gross != 0
      ORDER BY us_gross ASC LIMIT 50 
              `);
    } catch (error) {
      console.info(">something went wrong:", error.message);
      return null;
    }
  };
  const titleF = async (db) => {
    try {
      return await db.query(sql`SELECT title, source
      FROM movies
      WHERE title LIKE 'F%'
              `);
    } catch (error) {
      console.info(">something went wrong:", error.message);
      return null;
    }
  };
  const bSupMilion = async (db) => {
    try {
      return await db.query(sql`SELECT distributor, production_budget, creative_type, major_genre
      FROM movies
      WHERE production_budget > 10000000 AND distributor = 'Sony Pictures'
              `);
    } catch (error) {
      console.info(">something went wrong:", error.message);
      return null;
    }
  };
  
  
  
module.exports = {
  getAllMovies,
  mpaaNotNull,
  budgetLess5Ht,
  mostExpensiveMovies,
  srcRemake,
  imdbNotNull,
  moviesTomatoes,
  best20Movies,
  budgetNotRated,
  futurMovies,
  yearsRate,
  grossZero,
  lessGross50,
  titleF,
  bSupMilion
};
