export function createAPI() {
  return {
    getUser,
  };
}

async function getUser(id) {
  await delay(500);
  return "chriscalo";
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}