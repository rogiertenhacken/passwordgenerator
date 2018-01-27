const generator = () => {
  let password = [];
  const use = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@!$#%&*^?</>|+()§';

  for (let i=0; i<12; i++)
  password += use.charAt(Math.floor(Math.random() * use.length));

   let newPassword = Array.from(password);
   let list = newPassword;
   let newlist = list.filter((x, i, a) => a.indexOf(x) == i)
   let savePassword = newlist.join('');

  return savePassword;
}
console.log(generator());
