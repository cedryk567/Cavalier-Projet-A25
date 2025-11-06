import bcrypt from "bcrypt";
export const encrypterMotDePasse = async (mot_de_passe) => {
  console.log(mot_de_passe);
  const salt = bcrypt.genSaltSync(10);
  const mot_de_passe_hash = await bcrypt.hash(mot_de_passe, salt);
  return mot_de_passe_hash;
};
