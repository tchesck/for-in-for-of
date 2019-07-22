// let theus = `vivo`
// let contador = 0;

// while(contador<3){
//     console.log(contador)
//     contador ++;
// }

// for(let contador=0; contador<4; contador ++){
//     console.log(contador)

// }
// length


// let listaDeChamanda = ("sdfdsf", " "" "" "" "" "" "" "" "" "" "" ""){
//  for(let contador=0; listaDeChamanda.length; contador ++){
//      console.log(listaDeChamanda[contador]);
//  }

// for(let aluno of listaDeChamada){
//         console.log(aluno);
//     }

let idade = Number(prompt(`digite sua idade`))
let series = [
    {nome:`sobrenatural`, classificacao:12 },
    {nome:`game of estrogonofi`, classificacao:17},
    {nome:`vikins`,classificacao:18},
    {nome:`la casa da papel`,classificacao:19},
]
for(let serie of series){
    if(idade >= serie.classificacao){
        console.log(`com ${idade},anos podera assistir ${serie.nome}`)
    }
}