const genom = (ip, perfect_pair=false) => {
  const {power, mana} = ip;

  const bonus = 0.25;
  ip.mana = mana + (mana * bonus);
  if (perfect_pair === false) {
    ip.power = power + (power * bonus);
    return ip;
  }
  return ip; 
}

export default genom;