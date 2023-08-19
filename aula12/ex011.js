var idade = 60
console.log(`You are ${idade} years`)
if (idade < 16){
    console.log('No Vote!')
} else if (idade < 18 || idade > 65){
        console.log('Optional Vote')
} else {
    console.log('Compulsory Vote')
}
