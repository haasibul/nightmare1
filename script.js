fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    data.forEach(row => {
      console.log(row["Week"]); // Check if this is undefined
    });
  });
