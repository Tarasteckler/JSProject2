/* Tara Steckler
 * JS problems 11-20
 * 10/17/2017
 */

// 1. First last 6

function firstLast6(arr) {
    console.log(arr);
    var theIndex = arr.indexOf(6);
    var lastIndex = arr.lastIndexOf(6);
    console.log(theIndex);
    console.log(lastIndex);
    if(theIndex === 0 || lastIndex === arr.length-1){
        return true;
    }else{
        return false;
    }
}


// 2. Has 2 or 3

function has23(array){
    console.log(array);
    var two = array.indexOf(2);
    var three = array.indexOf(3);
    if(two === 0 || two === 1 || three === 0 || three === 1){
        return true;
    }else{
        return false;
    }
}

// 3. Fix 23

function fix23 (arr){
    console.log(arr);
    var twoPos = arr.indexOf(2);
    var threePos = arr.indexOf(3);
    if (twoPos > -1 && threePos > -3){
        if (twoPos + 1 === threePos){
            arr[threePos] = "0";
        }
    }
    return (arr);
}


// 4. Count YZ

function countYZ(str) {
    console.log(str);
    var count = 0;
    for (var i = 0; i <= str.length; i ++) {
        if (str[i] === " ") {
            if (str[i - 1] === "y" || str[i - 1] === "Y" || str[i - 1] === "z" || str[i - 1] === "Z") {
                count += 1;
            }
        }
    }
    if (str.endsWith("y") === true || str.endsWith("z") === true || str.endsWith("Y") === true || str.endsWith("Z") === true ){
            count += 1;
        }
    return count;
}

// 5. endOther

function endOther(strOne, strTwo){
    console.log(strOne, strTwo);
    var newOne = strOne.toLowerCase(strOne);
    var newTwo = strTwo.toLowerCase(strTwo);
    if (newOne.endsWith(newTwo) === true || newTwo.endsWith(newOne) === true){
        return true;
    }else{
        return false;
    }
}

// 6. starOut

function starOut(str){
    console.log(str);
    var newStr = "";
    for (i = 0; i < str.length; i++) {
        if (str[i - 1] !== "*" && str[i + 1] !== "*" && str[i] !== "*") {
            newStr += str[i];
        }
    }
    return newStr;
}

// 7. getSandwich

function getSandwich (str){
    console.log(str);
    if (str.includes("bread") === false){
        return "";
    }
    return str.slice(str.indexOf("bread")+5, str.lastIndexOf("bread"));
}

// 8. canBalance

function canBalance (arr){
    console.log(arr);
    var totalSum = 0;
    for (i=0; i<arr.length; i++){
        totalSum += arr[i];
    }
    var halfSum = totalSum / 2;
    var emptyPart = 0;
    for (i=0; i<arr.length; i++){
        emptyPart += arr[i];
        if (emptyPart === halfSum){
            return true;
        }
    }
    if (emptyPart !== halfSum){
        return false;
    }

}

// 9. countClumps

function countClumps(arr){
    console.log(arr);
    var count = 0;
    for (i=0; i<arr.length; i++){
        if (arr[i] === arr[i+1] && arr[i] !== arr[i-1]) {
                count += 1;
        }
    }
    return count;
}

// 10. evenlySpaced

function evenlySpaced (intOne, intTwo, intThree){
    console.log(intOne, intTwo, intThree);
    var small = " ";
    if (intOne < intTwo && intOne < intThree){
        var small = intOne;
    }
    if (intTwo < intOne && intTwo < intThree){
        var small = intTwo;
    }
    if (intThree < intOne && intThree < intTwo){
        var small = intThree;
    }
    var medium = " ";
    if(intOne < intTwo && intOne > intThree || intOne < intThree && intOne > intTwo){
        var medium = intOne;
    }
    if (intTwo < intThree && intTwo > intOne || intTwo > intThree && intTwo < intOne){
        var medium = intTwo;
    }
    if (intThree < intOne && intThree > intTwo || intThree > intOne && intThree < intTwo){
        var medium = intThree;
    }
    var large = " ";
    if (intOne > intThree && intOne > intTwo){
        var large = intOne;
    }
    if (intTwo > intThree && intTwo > intOne){
        var large = intTwo;
    }
    if (intThree > intOne && intThree > intTwo) {
        var large = intThree;
    }

    if (large - medium === medium - small){
        return true;
    }else{
        return false;
    }
}



function tester() {

    document.getElementById("output1").innerHTML = firstLast6([3, 4, 7, 6, 6]);
    document.getElementById("output2").innerHTML = has23([2, 3]);
    document.getElementById("output3").innerHTML = fix23([2, 3, 4]);
    document.getElementById("output4").innerHTML = countYZ("fizz buzz hey bye supy yyy hey");
    document.getElementById("output5").innerHTML = endOther("helloABC" , "Abc");
    document.getElementById("output6").innerHTML = starOut("sm*eil*ly");
    document.getElementById("output7").innerHTML = getSandwich("breadjamandjellybread");
    document.getElementById("output8").innerHTML = canBalance([2, 3, 5]);
    document.getElementById("output9").innerHTML = countClumps([0, 0, 0, 2, 2, 1, 1, 1, 2, 1, 1, 2, 2]);
    document.getElementById("output10").innerHTML = evenlySpaced(10, 9, 11);

}

