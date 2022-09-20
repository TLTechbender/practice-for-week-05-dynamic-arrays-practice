class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here
	  // I honestly don't understand this problem at all and I be having difficulty reading the specs file...........................
	  // Like I no sabi this one ooo, Na copying I do laslas
   this.length=0;
	  this.capacity =defaultSize;
	  this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
    // Your code here
  }

  unshift(val) {

    // Your code here
  for(let i =this.length; i>0; i--){
  this.data[i] = this.data[i-1];
 
  }
   this.data[0]= val;
	  this.length++;
  }

}


module.exports = DynamicArray;
