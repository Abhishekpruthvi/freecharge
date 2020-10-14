async function getRecipes() {
  
    let url = "http://starlord.hackerearth.com/recipe"
  
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      } else {
        throw response;
      }
    } catch (error) {
      let err = {
        status: error.status,
        error: !!error.body ? await error.json() : true
      };
      throw err;
    }
  }
  
  
  
  export const Service = {
    getRecipes
  }