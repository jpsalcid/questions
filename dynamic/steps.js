/**
 * Find number of ways to go up steps either 1 or 2 steps
 */

function num_ways_steps(steps) {
  return rec_num_ways_steps(steps, {})
}

function rec_num_ways_steps(steps, mem) {
  if (mem[steps]) return mem[steps]
  if (steps < 0) return 0
  if (steps == 0) return 1
  var take1Step = rec_num_ways_steps(steps - 1, mem)
  var take2Steps = rec_num_ways_steps(steps - 2, mem)
  mem[steps] = take1Step + take2Steps
  return mem[steps]
}

console.log(num_ways_steps(13))

/**
 * Find number of ways to go up steps either x steps
 * input 13, [2,3,5]
 */

function num_ways_steps_x(steps, x) {
  return rec_num_ways_steps_x(steps, x, {})
}

function rec_num_ways_steps_x(steps, x, mem) {
  if (mem[steps]) return mem[steps]
  if (steps < 0) return 0
  if (steps == 0) return 1
  var totalSteps = 0
  for (var i = 0 ; i < steps.length; i++ ) {
    totalStep += rec_num_ways_steps(steps - x[i], x, mem)
  }
  mem[steps] = totalSteps
  return mem[steps]
}

console.log(num_ways_steps(13))

