export function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  const nums = numbers.split(delimiter).map(Number);

  return nums.reduce((sum, num) => sum + num, 0);
}
