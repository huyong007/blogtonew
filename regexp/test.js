/* var re = null, i;
for(i=0;i<10;i++){
    re=/cat/g;
    
    console.log(re.test('catastrophe'));
    
}
console.log('------------------------');

for(i=0;i<10;i++){
    re=new RegExp('cat','g');
    console.log(re.test('ctastrophecate'));
    
}
 */
/* var patten1=/\[bc\]at/i;
console.log(patten1.global);
console.log(patten1.ignoreCase);
console.log(patten1.multiline);
console.log(patten1.lastIndex);
console.log(patten1.source);

var patten2=new RegExp("\\[bc\\]at","i");
console.log(patten2.global);
console.log(patten2.ignoreCase);
console.log(patten2.multiline);
console.log(patten2.lastIndex);
console.log(patten2.source);


*/
var text = "mom and dad and boby";
var pattern = /nom( and dad( and ( boby)?)?)?/gi;
var matches = pattern.exec(text);
console.log(matches);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(matches[1]);+
console.log(matches[2]);
console.log('----------');












