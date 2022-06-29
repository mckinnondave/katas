function isValidWalk(walk) {
  let ns = 0
  let we = 0; 
    for (let direction of walk) { 
      if (direction === 'n') ns++; 
      if (direction === 's') ns--; 
      if (direction === 'w') we++; 
      if (direction === 'e') we--; 
    } 
    return walk.length === 10 && ns === 0 && we === 0; 
}

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
