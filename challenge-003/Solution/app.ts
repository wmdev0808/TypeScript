function query<T>(
  items: T[],
  query: {
    [TProp in keyof T]?: (val: T[TProp]) => boolean;
  }
) {
  return items.filter((item) => {
    // Iterates through eeach of the item's properties
    for (const property of Object.keys(item)) {
      // Gets the query for this property name
      const propertyQuery = query[property];

      // Sees if this property value matches the query
      if (propertyQuery && propertyQuery[item[property]]) {
        return true;
      }
    }

    // Nothing matched
    return false;
  });
}

const matches = query(
  [
    { name: "Ted", age: 12 },
    { name: "Angie", age: 31 },
  ],
  { name: (name) => name === "Angie", age: (age) => age > 30 }
);
