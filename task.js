// Task 1 

let massiv = [1,3,-1,5,7,8,12,-6,3,9]
function toplam (x){
    let y = 0
    for (i=0; i<x.length; i++){
        if(x[i]%2 != 0 || x[i]<0){
            y+=x[i]
        }
    }
    return y
}

console.log(toplam(massiv))
z=massiv.length

// Task 2

function splice (x){
    y=0
    for (i=0; i<z; i++){
        if(x[y]%2 != 0 || x[y]<0){
            x.splice(y,1)
            
        }else{
            y+=1
        }
        
        
    }
    return x
}

console.log(splice(massiv))

// Task 3

massiv = [1,3,-1,5,7,8,12,-6,3,9]


function array(x){
    let max=x[0]
    let min=x[0]
    for(i=0; i<x.length; i++){
        if(x[i]>max){
            max=x[i]
        }
        if(x[i]<min){
            min=x[i]
        }
    }
    
    let v = console.log(`[${x}] - icindeki en boyuk deyer - ${max} \n[${x}] - icindeki en kicik deyer - ${min}`)
    
    return v
}
console.log(array(massiv))

// Task 4

massiv = [1,3,-1,5,7,8,12,-6,3,9]

function ortaQiymet(x){
    let y = 0
    for(let i=0; i<x.length; i++){
        y += x[i]
    }
    z = y/x.length // v' ya y/i
    return z
}

console.log(ortaQiymet(massiv))

// Task 5

function cutEded(x){
    let y = []
    for(let i = 0; i < x.length; i++ ){
        if (x[i] % 2 == 0){
            y.push(x[i])
        }
    }
    return y
}

console.log(cutEded(massiv))

// Task 6 , Task 8

let array4 = ["apple","orange",2,5,8,true,"AZ","HTML",5,8,7,false,"JS"]

function string(x){
    a = []
    for(let i = 0; i < x.length; i++){
        if(typeof x[i] == 'string'){
            a.push(x[i])
        }
    }
    return a
}
console.log(string(array4).sort())

// Task 7

let telebe = {
    firstName: 'jon',
    lastName: 'Doe', 
    school: 'Oxford',
    age: 22,
    country: 'England',
}

let values = Object.values(telebe)
for(let i = 0; i<values.length; i++){
    let value = values[i]
    console.log(Object.keys(telebe)[i],':',value)
}


// Task 9

let hesablamaqIstediyinizFaktorial = +prompt("faktorialini hesablamaq istediyiniz ededi daxil edin")

if (hesablamaqIstediyinizFaktorial>0){
    let x = 1
    for(let i = 1; i<=hesablamaqIstediyinizFaktorial; i++){
        x =x*i
    }
    console.log(x)
}else if(hesablamaqIstediyinizFaktorial<0){
    let x = 1
    for(let i = -1; i>=hesablamaqIstediyinizFaktorial; i--){
        x =x*i
    }
    console.log(x)
}else{
    console.log('o-dan ferqli reqem yazin ve ya reqem yazdiginizdan emin olun')
}


// Task 10



let arr=['facebook','goole','microsoft','apple','ibm','oracle',"stratosfer"]

function array2(qq){
    for(i=0; i<qq.length; i++){
        let x='';
        x += qq[i]
        n=""
        
        for(z=0; z<x.length; z++){
            let f=0
            let l=0;
            let a=""
            k=0
            for(l=0; l<x.length; l++){
                let y=""
                y+=x[z]
                if(x[l]==y){
                    f++
                    if (f>1 && !n.includes(y)){
                        a=y
                        n += y
                        k = 1
                    }
    
                }
                
    
            }
            if(k==1){
                console.log(`${x} - sozunde - ${a} - herifinden - ${f} - ededdir`)
                
            }
        }
    
    }
    return qq
}

console.log(array2(arr))

// 11 12 13 cox sade oldugu ucun yazmadim muellim ))

// Task 14

const arr1 = [
    {
        name: 'fazil',
        age: 43
    },
    {
        name: 'samir',
        age: 13
    },
    {
        name: 'teymur',
        age: 17
    },
    {
        name: 'mikayil',
        age: 25
    },
    {
        name: 'leyla',
        age: 14
    },
    ]
// yasi 18 den kisik olanlari basqa bir arrayda saxlayin.
let arr2=[]
for(let i = 0; i<arr1.length; i++){
    if(arr1[i].age<18){
        arr2.push(arr1[i])
    }
}
console.log(arr2)