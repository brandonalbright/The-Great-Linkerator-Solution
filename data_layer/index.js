const sync = require("./sync");
const client = require('./client')


// get all links
async function getAllLinks() {
  try {
    const { rows: links } = await client.query(`
      SELECT *
      FROM links
    `);

    console.log('These are the links:', links);

    return links;
  } catch (error) {
    throw error;
  }
}

// create new link
const createLink = async (url, comment) => {
  try {
    const { rows: [link] } = await client.query(`
      INSERT INTO links (link, comment)
      VALUES($1, $2)
      ON CONFLICT (link) DO NOTHING 
      RETURNING *;
    `, [url, comment]);

    return link
  } catch (error) {
    throw error;
  }
}
// get link by id
// need to complete

async function createInitialLinks() {
  try {
    const linkOne = await createLink('www.google.com', 'search engine');

    const linkTwo = await createLink('www.amazon.com', 'shopping engine');

  } catch (error) {
    throw (error)
  }
}

createInitialLinks();


module.exports = {
  sync,
  client,
  getAllLinks,
  createLink,
};
