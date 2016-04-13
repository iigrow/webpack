module.exports=function(){
console.log('load codesplit');
require.ensure(['./lib/dialog'],function(){
 console.log('dialog');
});
}