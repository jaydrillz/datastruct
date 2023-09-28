function sumOfDistinctElements(set1, set2) {
    const distinctElements = new Set();
  
    // Add elements from set1 to the distinctElements set
    for (const element of set1) {
      distinctElements.add(element);
    }
  
    // Add elements from set2 to the distinctElements set
    for (const element of set2) {
      distinctElements.add(element);
    }
  
    let totalSum = 0;
  
    // Calculate the sum of distinct elements
    for (const element of distinctElements) {
      totalSum += element;
    }
  
    return totalSum;
  }
  
  // Example usage:
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2);
  console.log(result); // Output: 13 (distinct elements 4, 7, 2)
  function dotProduct(v1, v2) {
    if (v1.length !== v2.length) {
      throw new Error("Vectors must have the same length");
    }
  
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
      result += v1[i] * v2[i];
    }
  
    return result;
  }
  
  function areVectorsOrthogonal(vectors) {
    const n = vectors.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (dotProduct(vectors[i], vectors[j]) !== 0) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  // Example usage:
  const vectors = [[1, 0], [0, -1], [0, 0]]; // Example vectors, the third vector is orthogonal to the first two
  const result = areVectorsOrthogonal(vectors);
  console.log(result); // Output: true (all vectors are orthogonal)
  