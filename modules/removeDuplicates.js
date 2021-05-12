exports.removeDuplicates = {
  values: [],
  assambler: (e)  => {
      let sample = e.values;
      let filtered = [];
      let result = [];

      sample.forEach(x => {
        if(!filtered.includes(x)) filtered.push(x);
      });

      filtered.forEach(x => result.push(x + "\n"))

      return result
  },
}