
function sum(num) {
    if(num == 0){
        return 0;
    }
    return num % 10 + sum(Math.floor(num / 10));
}
console.log(sum(456))
 function g(num){
     if(num <= 0){
         return 1
     }
     return num*g(num - 1)
 }
 console.log(g(4))

 // vi du 3
 var deptArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
 var flatArray = deptArray.reduce(function(flatOutput, deptItem){
     return flatOutput.concat(deptItem);

 }, [])
 console.log(flatArray)
  //Lay ra cac khoa hoc dua vao mang moi
   var topics = [
       {
           topic: "Frond-end",
           courses: [
               {
                   id: 1,
                   tittle: "Html, Css"
               },
               {
                   id: 2,
                   tittle: "Javascript"
               }
           ] 
       },
       {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                tittle: "Php"
            },
            {
                id: 2,
                tittle: "Nodjs"
            }
        ] 
       }
   ]

   var newArray = topics.reduce(function(courses, topic) {
       return courses.concat(topic.courses)
   }, [])
   console.log(newArray)

   //Tao phuong thuc reduce2
   Array.prototype.reduce2 = function(callback, result) {
       for(let i = 0;i < this.length; i++){
           result = callback(result, this[i], i, this)
       }
       return result
   }
   const numbers = [1, 2, 3, 4, 5]
   var Sum = numbers.reduce2(function(total, number) {
       return total + number
   },0)
   console.log(Sum)
   // Tao phuong thuc map2
   Array.prototype.map2 = function(callback) {
        var arrayLength = this.length
        for(var i = 0; i < arrayLength; i++){
            callback(this[i], i)
        }
   }
   var Arrays = ['java','php','hmtl']
   Arrays.map2(function(courses,index) {
       console.log(index, courses)
   })
   // Tao phuong thuc forEach
   Array.prototype.forEach2 = function(callback) {
       
        for(var i in this){
            if(this.hasOwnProperty(i)){
                const result = callback(this[i], i, this)
            }
        }
   }
   let tong = 0
   numbers.forEach2(function(element) {
       tong += element
   })
   console.log('Đây là phương thức forEach: ' + tong)
   // Tao phuong thuc find
   Array.prototype.find2 = function(callback) {
    var arrayLength = this.length
    for(let i in this){
        if(this.hasOwnProperty(i)){
            if(callback(this[i], i, this)){
                return this[i]
            }
        }
    }
   }
   timkiem  = numbers.find2(function(element) {
       return element > 4
   })
   console.log('day la phuong thuc find: ' + timkiem)
   
   // Tao phuong thuc filter
   Array.prototype.filter2 = function(callback) {
    
    const arrray = []
    for(let i in this){
        if(this.hasOwnProperty(i)){
            if(callback(this[i], i, this)){
                arrray.push(this[i])
            }
        }
    }
    return arrray
   }

   var daymoi = numbers.filter2(function(element) {
        return element != 4
   })
   console.log(daymoi)
   // Tao phuong thuc some
   Array.prototype.some2 = function(callback) {
        for( let i in this){
            if(this.hasOwnProperty(i)){
                if(callback(this[i], i, this)){
                    return true
                }
            }
        }
        return false
   }
   var ketqua = numbers.some(function(element) {
       return element > 2
   })
   console.log('Đây là phương thức some: '+ ketqua  )
   // Tạo phương thức every
   Array.prototype.every2 = function(callback) {
       var output = true
    for( let i in this){
        if(this.hasOwnProperty(i)){
            var result = callback(this[i], i, this)
            if(!result){
                output = false;
                break
            }
        }
    }
    return output
    }
    var ketqua2 = numbers.every2(function(element) {
    return element > 0
    })
    console.log('Đây là phương thức every: '+ ketqua2  )