// function that print a staircase of size N

const staircase = num => {
    let spaces = ' ';
    for (let i = 1; i <= num; i++){   //removing  the first line of empty spaces
        console.log(spaces.repeat(num-i) + '#'.repeat(i) )
    }
    return '';
}

console.log(staircase(6))