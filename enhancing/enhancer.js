module.exports = {
  succeed,
  fail,
  repair,
  get
}

function succeed(item) {
  if (item.enchantment <= 19) {
    item.enchantment += 1
  }
  return { ...item }
}

function fail(item) {
  if (item.enchantment > 16) {
    item.durability -= 10
    item.enchantment -= 1
  } else if (item.enchantment > 15) item.durability -= 10
  else item.durability -= 5
  if (item.durability < 0) item.durability = 0
  return { ...item }
}

function repair(item) {
  item.durability = 100
  return { ...item }
}

function get(item) {
  return { ...item }
}
