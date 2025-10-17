const verifierBodyEstRemplie = (body, bodyDesire) => {
  for (const element of bodyDesire) {
    if (!body.hasOwnProperty(element) || !body[element]) {
      return false;
    }
  }
  return true;
};

const verifierTypeValeurs = (body, bodyDesire) => {
  const cles = Object.keys(bodyDesire);

  for (const cle of cles) {
    if (!(cle in body)) {
      return false;
    }
    if (typeof body[cle] !== typeof bodyDesire[cle]) {
      return false;
    }
  }
  return true;
};
const verifierCasSpeciaux = (body, casSpeciaux) => {
  return casSpeciaux ? casSpeciaux(body) : true;
};
export const verifierBody = (body, bodyDesire, casSpeciaux) => {
  let verifications = [];
  verifications.push(verifierBodyEstRemplie(body, bodyDesire));
  verifications.push(verifierTypeValeurs(body, bodyDesire));
  verifications.push(verifierCasSpeciaux(body, casSpeciaux));

  for (const element of verifications) {
    if (!element) {
      return false;
    }
  }
  return true;
};
