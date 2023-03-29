//console.log("Merhaba", "Nasılsın");

var userAcountName="yusufyalnizligi", 
    userPasswordKey="password";
console.log(userAcountName,userPasswordKey);

/*
* Açıklama Blokları
*/
//Birleştirme Operatörü
console.log("Hoş geldin "+ userAcountName );

//Aritmetik
var a = 5;
var b= (a*2);
console.log(a);
console.log(b);

//Karşılaştırma

console.log(a==5);//true

//Mantıksal 

console.log(a==5 && b==10); //true

//Koşul
var durum=true;

if(durum)
{
    console.log("if bloğu çalışır");// true
}
else{
    console.log("else bloğu çalışır");
}

//Fonksiyonlar

function yazdir(metin,n){
    //console.log("Metod çağrıldı");
    return "Metod Çağrıldı "+metin + n +" kez yazıldı";
}
console.log(yazdir("deneme",1));

var fonksiyonum= function(){

    console.log("Farklı Tanımlama yapıldı");
};
fonksiyonum();

//Callback Fonksiyonlar
function merhaba(metin,callback)
{
   console.log("Merhaba"+metin);
   callback();
}
function metins()
{
    console.log(" bey");
}
merhaba("Deneme",metins);

