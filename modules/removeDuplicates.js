exports.removeDuplicates = {
  values: [],
  assambler: (e)  => {
      let sample = e.values;
      let result = [];

      sample.forEach(x => {
        if(!result.includes(x)) result.push(x);
      });

      let r = result.join('\n')

      return r
  },
}