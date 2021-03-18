const { sql } = require("slonik");

// Directors-movies-related queries
//24
const query24 = async (db) => {
  try {
    return await db.query(sql`SELECT query_name, production_budget, distributor
      FROM directors as d
      JOIN movies as m 
      ON d.id=m.director
      WHERE distributor IS NOT NULL
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//25
const query25 = async (db) => {
  try {
    return await db.query(sql`SELECT query_name,COUNT(title)
      FROM directors as d
      JOIN movies as m 
      ON d.id=m.director
      GROUP BY query_name
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//26
const query26 = async (db) => {
  try {
    return await db.query(sql`
      SELECT query_name, title, imdb_votes
        FROM directors as d
        JOIN movies as m 
        ON d.id=m.director
        WHERE imdb_votes IS NOT NULL
        ORDER BY imdb_votes ASC LIMIT 50 OFFSET 0
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//27
const query27 = async (db) => {
  try {
    return await db.query(sql`
        SELECT query_name, distributor
            FROM directors as d
            JOIN movies as m 
            ON d.id=m.director
            WHERE name LIKE 'Christopher Nolan'
            `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//28
const query28 = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, us_gross
        FROM directors as d
        JOIN movies as m 
        ON d.id=m.director
        WHERE us_gross = (
        SELECT MAX (us_gross)
        FROM movies
        )
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//29
const query29 = async (db) => {
  try {
    return await db.query(sql`
            SELECT query_name, COUNT(release_date)
        FROM directors as d
        JOIN movies as m 
        ON d.id=m.director
        WHERE release_date >='2000-01-01' 
        GROUP BY query_name
        ORDER BY COUNT(release_date) DESC LIMIT 1
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//30
const query30 = async (db) => {
  try {
    return await db.query(sql`
        SELECT name, major_genre, rotten_tomatoes_rating
    FROM directors as d
    JOIN movies as m 
    ON d.id=m.director
    WHERE major_genre LIKE 'Drama' AND rotten_tomatoes_rating >70
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//31
const query31 = async (db) => {
  try {
    return await db.query(sql`
        SELECT name, release_date, nationality
    FROM directors as d
    JOIN movies as m 
    ON d.id=m.director
    WHERE nationality LIKE '%stralian%'AND release_date<= '1995-01-01'
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//32
const query32 = async (db) => {
  try {
    return await db.query(sql`
        SELECT name, title, release_date, mpaa_rating
    FROM directors as d
    JOIN movies as m 
    ON d.id=m.director
    WHERE mpaa_rating LIKE 'PG-13'
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//33
const query33 = async (db) => {
  try {
    return await db.query(sql`
        SELECT query_name,AVG(DISTINCT imdb_rating)::NUMERIC(10,2) AS av
    FROM directors as d
    JOIN movies as m 
    ON d.id=m.director

    GROUP BY query_name, nationality

    HAVING (AVG(DISTINCT imdb_rating)::NUMERIC(10,2) IS NOT NULL)
    AND (nationality iLIKE 'Canadiense')

    ORDER BY av DESC LIMIT 1 OFFSET 4
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//34
const query34 = async (db) => {
  try {
    return await db.query(sql`
        SELECT query_name, creative_type,AVG(DISTINCT imdb_rating)::NUMERIC(10,2) AS av, 
    AVG(DISTINCT rotten_tomatoes_rating)::NUMERIC(10,2) AS rto

    FROM directors as d
    JOIN movies as m 
    ON d.id=m.director

    GROUP BY query_name,creative_type,release_date

    HAVING (AVG(DISTINCT imdb_rating)IS NOT NULL)
        AND (creative_type LIKE 'Contemporary Fiction') 
        AND(AVG(DISTINCT rotten_tomatoes_rating) IS NOT NULL)
        AND (release_date BETWEEN '1990-01-01' AND '2000-12-31')
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//35
const query35 = async (db) => {
  try {
    return await db.query(sql`
            SELECT query_name, EXTRACT(year From release_date),
        SUM( worldwide_gross) AS gross

        FROM directors as d
        JOIN movies as m 
        ON d.id=m.director

        GROUP BY query_name, worldwide_gross,release_date
        HAVING worldwide_gross < 500000

        ORDER BY query_name ASC
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

module.exports = {
  query24,
  query25,
  query26,
  query27,
  query28,
  query29,
  query30,
  query31,
  query32,
  query33,
  query34,
  query35,
};
