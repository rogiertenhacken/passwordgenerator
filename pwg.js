const generator = () => {
  let password = '';
  const use = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!$#%&*^?</>|+()§';

  for (let i=0; i<12; i++)
  password += use.charAt(Math.floor(Math.random() * use.length));

   const newPassword = Array.from(password);
   const uniqPassword = newPassword.filter((x, i, a) => a.indexOf(x) == i)
   const savePassword = uniqPassword.join('');

  return savePassword;
}
console.log(generator());
