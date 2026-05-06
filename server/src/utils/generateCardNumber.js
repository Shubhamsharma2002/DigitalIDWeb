const generateCardNumber = () => {
  const random = Math.floor(
    100000 + Math.random() * 900000
  );

  return `DID-${random}`;
};

export default generateCardNumber;