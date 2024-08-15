export function add(numbers) {
  if (numbers === "") return 0;

  numbers = numbers.replace(/\\n/g, "\n"); //replacing the extra escape char added by browser when adding /n in input text

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    console.log(numbers);

    const parts = numbers.split("\n", 2);
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
    console.log(parts);
  }

  const nums = numbers.split(delimiter).map(Number);

  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, num) => sum + num, 0);
}
