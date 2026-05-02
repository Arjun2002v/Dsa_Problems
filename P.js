const Union = (a,b) =>{

  let i=0;
  let j=0;
  let final = []
  while(a[i]<b[j]){
    final.push(a[i]);
    i++


  }
  while(a[i]===b[j]){
    final.push(b[j]);
    j++
  }
  while(a[i]>b[j]){
    final.push(b[j]);
    j++
  }
  return final


}
console.log(Union([1,2,3,4],[2,3,5,6]))
