export async function getRecipes() {
  const req = await fetch('https://recipes-api-json.herokuapp.com/recipes');
  const json = await req.json()
  return json.receitas
}