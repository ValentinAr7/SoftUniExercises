function groupProducts(products) {
    // Create an object to store the products grouped by their initial
    const groupedProducts = {};
  
    // Iterate over the products and add them to the groupedProducts object
    products.forEach(product => {
      // Extract the product name and price
      const [name, price] = product.split(': ');
      // Get the initial of the product name
      const initial = name[0].toUpperCase();
  
      // If the initial is not a property of the groupedProducts object, create an empty array for it
      if (!groupedProducts[initial]) {
        groupedProducts[initial] = [];
      }
  
      // Add the product to the array for its initial
      groupedProducts[initial].push({ name, price });
    });
  
    // Sort the products within each group by name
    for (let initial in groupedProducts) {
      groupedProducts[initial] = groupedProducts[initial].sort((a, b) => a.name.localeCompare(b.name));
    }
  
    // Sort the initials in ascending order
    const sortedInitials = Object.keys(groupedProducts).sort();
  
    // Print the grouped and sorted products
    sortedInitials.forEach(initial => {
      console.log(initial);
      groupedProducts[initial].forEach(product => {
        console.log(`  ${product.name}: ${product.price}`);
      });
    });
  }
groupProducts(

    ['Appricot : 20.4',
     'Fridge : 1500', 
     'TV : 1499', 
     'Deodorant : 10', 
     'Boiler : 300', 
     'Apple : 1.25', 
     'Anti-Bug Spray : 15', 
     'T-Shirt : 10']
)