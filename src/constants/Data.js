export const catagory = [
    { id: 1, catagory: "Home", emoji: "🏠" },
    { id: 2, catagory: "Work", emoji: "🏢" },
    { id: 3, catagory: "Personal", emoji: "👤" },
    { id: 4, catagory: "Health/Fitness", emoji: "💪" },
    { id: 5, catagory: "Education", emoji: "📚" },
    { id: 6, catagory: "Gym", emoji: "🏋️" },
  ];
  export const addCustomCategory = (newCategory, emoji) => {
    const id = catagory.length + 1;
    const customCategory = { id, catagory: newCategory, emoji };
    catagory.push(customCategory);
  };