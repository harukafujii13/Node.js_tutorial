//jshint esversion:6

//1 npm init →パッケージを初期化
//2 npm install superheroes(外部パッケージ)　→外部パッケージをインストールし、このプロジェクトの依存関係として追加する

// var superheroes = require("superheroes");
// var mySuperheroName =  superheroes.random();
// console.log(mySuperheroName);

var supervillains = require("supervillains");
var mysuperVillains = supervillains.random();
console.log(mysuperVillains);

