function pegar_produto() {
    var str1 = 'R$';
    fetch('https://fakestoreapi.com/products/' + Math.floor(Math.random() * 20 + 1))
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("name").innerHTML = data['title'];
            document.getElementById("preco").innerHTML = `${str1} ` + data['price'];
            document.getElementById("descricao").innerHTML = data['description'];
            document.getElementById("categoria").innerHTML = data['category'];
            document.getElementById("imagem").src = data['image'];
        })
}
pegar_produto()

//card01
function pegar_produto1() {
    var str1 = 'R$';
    fetch('https://fakestoreapi.com/products/' + Math.floor(Math.random() * 20 + 1))
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("namecard1").innerHTML = data['title'];
            document.getElementById("precocard1").innerHTML = `${str1}` + data['price'];
            document.getElementById("categoriacard1").innerHTML = data['category'];
            document.getElementById("imagemcard1").src = data['image'];
        })
}
pegar_produto1()

//card2
function pegar_produto2() {
    var str1 = 'R$';
    fetch('https://fakestoreapi.com/products/' + Math.floor(Math.random() * 20 + 1))
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("namecard2").innerHTML = data['title'];
            document.getElementById("precocard2").innerHTML = `${str1} ` + data['price'];
            document.getElementById("categoriacard2").innerHTML = data['category'];
            document.getElementById("imagemcard2").src = data['image'];
        })
}
pegar_produto2()

//card3
function pegar_produto3() {
    var str1 = 'R$';
    fetch('https://fakestoreapi.com/products/' + Math.floor(Math.random() * 20 + 1))
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("namecard3").innerHTML = data['title'];
            document.getElementById("precocard3").innerHTML = `${str1} ` + data['price'];
            document.getElementById("categoriacard3").innerHTML = data['category'];
            document.getElementById("imagemcard3").src = data['image'];
        })
}
pegar_produto3()