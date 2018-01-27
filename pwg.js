const generator = () => {
  let password = [];
  const use = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!$#%&*^?</>|+()§';

  for (let i=0; i<12; i++)
  password += use.charAt(Math.floor(Math.random() * use.length));

   let newPassword = Array.from(password);
   list = newPassword;
   list = list.filter((x, i, a) => a.indexOf(x) == i)
   let savePassword = list.join('');

  return savePassword;
}
console.log(generator());
