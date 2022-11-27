// Exercise 1

let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!'
let dog_names = [ 'Max', 'HAS', 'PuRple', 'dog']

function findWords() {
    let fixed_dog_string = dog_string.replace(',', '')
    let matches = fixed_dog_string.split(' ');
    for (let i = 0; i < fixed_dog_string.length; i ++){
        if (dog_names[i] == matches[1]){
            return 'Matched ' + dog_names[i]
        } else {
            return 'No Matches'
        }
    }
}
console.log(findWords())


// Exercise 2

let given_arr =  ['Max', 'Baseball', 'Reboot', 'Goku', 'Trucks', 'Rodger']

function replaceEvens(arr){
    
    for(let i = 0; i < arr.length; i ++){
        if (i % 2 == 0){
            arr[i] = 'even index'
        }
    }
    return arr
}
console.log(replaceEvens(given_arr))

