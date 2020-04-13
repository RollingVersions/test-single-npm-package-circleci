const profile = require('npm-profile');
const readConfig = require('libnpmconfig').read;

profile.get({...readConfig().toJSON()}).then(res => console.log(res)).catch(ex=> {
  console.error(ex.stack);
  process.exit(1);
});