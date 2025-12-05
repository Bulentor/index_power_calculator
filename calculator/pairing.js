const pairing = (pair, ip) => {
  const {power, mana} = ip;

  const perfect_pair_power = power * 3;
  const improved_pair_power = power * 2;
  const minimal_pair_power = power * 0.25;

  const improved_pair_mana = mana + (mana / 2);
  const minimal_pair_mana = mana + (mana * 2);

  if (pair === "perfect") {
    ip.power = perfect_pair_power
  } else if (pair === 'improved') {
    ip.power = improved_pair_power
    ip.mana = improved_pair_mana
  } else if (pair === 'minimal') {
    ip.power = minimal_pair_power
    ip.mana = minimal_pair_mana
  }

  return ip;
};

export default pairing;