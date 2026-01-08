const EMICalc = () => {
  const principal = 10000;
  const roi = 3; // 3% anually
  const years = 30;
  const months = years * 12;
  const r = (roi / 12) * 0.01;
  const pow = Math.pow(1 + r, months);

  const getEmiValue = (principal * r * pow) / (pow - 1);

  return <div>{getEmiValue.toFixed(2)}</div>;
};

export default EMICalc;
