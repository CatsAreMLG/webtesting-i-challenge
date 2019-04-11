module.exports = {
  succeed,
  fail,
  repair,
  get
}

function succeed(item, enchantment) {
  item.enchantment = enchantment || 0
  return { ...item }
}

function fail(item) {
  return { ...item }
}

function repair(item) {
  item.durability = 100
  return { ...item }
}

function get(item) {
  return { ...item }
}
