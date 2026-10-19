console.log('hiii')

    function i() {
        const alleyOop = [0,1,2,3,4,5]
         const kapusta = alleyOop.push = (6);
         console.log(kapusta)
    }
    i();

    console.log("========================================");

    
    function brekfist() {
        const arreyino = [1,2,3,4,5,6,7,8,9];
        const trek = arreyino.reduce((total, current) => {
            return total + current;
        }, 0);


        return trek;
    }
brekfist();
console.log(brekfist());

 console.log("========================================");
 
 function bochakas() {
    const terra = [0,2,3,60,51,8,24356,123123,5687]
    terra.sort((a, b) => a - b);
    console.log(terra);
 }
 bochakas();

  console.log("========================================");

  function trikanunas(array1,startIndex, endIndex) {
        // const cheesecake = ['banana', 'chocolate', 'strawberry', 'mascarpone'];
        console.log(array1.slice(startIndex, endIndex));
  }
  trikanunas(['banana', 'chocolate', 'strawberry', 'mascarpone'], 0, 2);
  trikanunas([11, 15, 33, 55, 100, 1122], 0, 4);
//   nesuprantu, use paramaters

    console.log("========================================");

    // 5th arrayy 
    function blabla(firstArray, secondArray) {


        let placeholder = firstArray.concat(secondArray);
        return placeholder;
    
    }

    // blabla();
  let resulttest = blabla([24312, 4213], [342, 3421])
  console.log(`Result: ${resulttest}`)

    console.log("========================================");

    function trikompacha() {
        const arrayOop = [1,3,5,7,9,11,13,15,17,19,21];
        let higherNumber = arrayOop.filter((number) => number > 10);
        console.log(higherNumber);
        }

trikompacha();

    console.log("========================================");

    function input(arrayTest) {
        let higherThanTen = arrayTest.find((element) => 

        {
        if (typeof element === 'string'){
           return element.length > 10
        }
        else if (typeof element === 'number'){
            return element > 10
        }
        else if (typeof element === 'boolean') {
            return element === true
        }
        else {
        console.log("")
        }
        }
    )
    
        console.log(higherThanTen);
    }
    input(['pineapple', 'kopustas', 'deutschland', 'hiiiiiiiiiiiiiiiiiiiiiiii'] );
    input([1, 22, 33, 44, 55] );
    input([true, false, true]);
        console.log("========================================");

    function mapinput() {
        const mapNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
        const mappedNumbers = mapNumbers.map((x) => x * 2);
        console.log(mappedNumbers);
        
    }
    mapinput();