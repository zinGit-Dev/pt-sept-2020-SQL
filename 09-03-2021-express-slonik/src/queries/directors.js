const { sql } = require("slonik");

// Directors-related queries
//1
const q1 = async (db) => {
  try {
    return await db.query(sql`
    SELECT name FROM directors
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//2
const q2 = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nickname FROM directors
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//3
const q3 = async (db) => {
  try {
    return await db.query(sql`
    SELECT nickname, pic FROM directors WHERE nickname != ''
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//4
const q4 = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nationality FROM directors WHERE nationality='Canadiense'
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//5
const q5 = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nationality 
    FROM directors 
    WHERE nationality LIKE '%ritánica%' AND
      nationality LIKE '%st%'

              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//6
const q6 = async (db) => {
  try {
    return await db.query(sql`
    SELECT query_name, nationality, roles FROM directors 
    WHERE roles LIKE '%' || '%jedr%' || '%';
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

//7
const q7 = async (db) => {
  try {
    return await db.query(sql`
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};
//8
const q8 = async (db) => {
  try {
    return await db.query(sql`
              `);
  } catch (error) {
    console.info(">something went wrong:", error.message);
    return null;
  }
};

module.exports = {
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
};
