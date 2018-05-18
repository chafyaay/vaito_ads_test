// Yassine CHAFYYA le 18 Mai 1018


var canvas = document.getElementById("canvas") // espace banière

//#############################################################""//
//#############################################################""//
//############### Insertion des formes ########################""//
//#############################################################""//
//#############################################################""//



// logo fanta 

var fantaImg = document.createElement("img") 

fantaImg.setAttribute("src", "img/LOGO_FANTA.png")
fantaImg.setAttribute("class", "logo")
canvas.appendChild(fantaImg)

// l' ovale 
var ovale = document.createElement("div")
ovale.style.opacity = 0
ovale.setAttribute("id", "cercle")
canvas.appendChild(ovale)

// les 3 boutons jaunes
var btn1 = document.createElement("button")
var btn2 = document.createElement("button")
var btn3 = document.createElement("button")
btn1.setAttribute("class", "btn btn1")
btn2.setAttribute("class", "btn btn2")
btn3.setAttribute("class", "btn btn3")

btn1.style.opacity = 0
btn2.style.opacity = 0
btn3.style.opacity = 0
canvas.appendChild(btn1)
canvas.appendChild(btn2)
canvas.appendChild(btn3)


// le rectangle

var rec = document.createElement("div")
rec.setAttribute("class", "rectangle")
rec.style.opacity = 0
canvas.appendChild(rec)


// boutton close

var close = document.createElement("img")
close.setAttribute("src", "img/BOUTON_FERMER.png")
close.setAttribute("class", "close")
close.style.opacity = 0
canvas.appendChild(close)


// L' accroche 

var accr = document.createElement("img")
accr.setAttribute("src", "img/ACCROCHE_1.png")
accr.setAttribute("class", "accroche")
accr.style.opacity = 0
canvas.appendChild(accr)

// CERCLES

var cercles = document.createElement("img")
cercles.setAttribute("src", "img/CERCLES.png")
cercles.setAttribute("class", "cercles")
canvas.appendChild(cercles)

// ORANGE.png

var orange = document.createElement("img")
orange.setAttribute("src", "img/ORANGE.png")
orange.setAttribute("class", "orange")
orange.style.opacity = 0
canvas.appendChild(orange)

// etape 1
var etap1 = document.createElement("img")
etap1.setAttribute("src", "img/ETAPE_1.png")
etap1.setAttribute("class", "etap1")
etap1.style.opacity = 0
canvas.appendChild(etap1)

var PHOTO_1 = document.createElement("img")
PHOTO_1.setAttribute("src", "img/PHOTO_1.png")
PHOTO_1.setAttribute("class", "PHOTO_1")
PHOTO_1.style.opacity = 0
canvas.appendChild(PHOTO_1)

var PHOTO_2 = document.createElement("img")
PHOTO_2.setAttribute("src", "img/PHOTO_2.png")
PHOTO_2.setAttribute("class", "PHOTO_2")
PHOTO_2.style.opacity = 0
canvas.appendChild(PHOTO_2)

var PHOTO_3 = document.createElement("img")
PHOTO_3.setAttribute("src", "img/PHOTO_3.png")
PHOTO_3.setAttribute("class", "PHOTO_3")
PHOTO_3.style.opacity = 0
canvas.appendChild(PHOTO_3)

//etape 2

var etap2 = document.createElement("img")
etap2.setAttribute("src", "img/ETAPE_2.png")
etap2.setAttribute("class", "etap1")
etap2.style.opacity = 0
canvas.appendChild(etap2)


var PHOTO_21 = document.createElement("img")
PHOTO_21.setAttribute("src", "img/PHOTO_1.png")
PHOTO_21.setAttribute("class", "PHOTO_21")
PHOTO_21.style.opacity = 0
canvas.appendChild(PHOTO_21)

var PHOTO_22 = document.createElement("img")
PHOTO_22.setAttribute("src", "img/PHOTO_2.png")
PHOTO_22.setAttribute("class", "PHOTO_22")
PHOTO_22.style.opacity = 0
canvas.appendChild(PHOTO_22)

var PHOTO_23 = document.createElement("img")
PHOTO_23.setAttribute("src", "img/PHOTO_3.png")
PHOTO_23.setAttribute("class", "PHOTO_23")
PHOTO_23.style.opacity = 0
canvas.appendChild(PHOTO_23)

//etape 3

var etap3 = document.createElement("img")
etap3.setAttribute("src", "img/ETAPE_3.png")
etap3.setAttribute("class", "etap1")
etap3.style.opacity = 0
canvas.appendChild(etap3)

var GO_PRO = document.createElement("img")
GO_PRO.setAttribute("src", "img/GO_PRO.png")
GO_PRO.setAttribute("class", "gopro")
GO_PRO.style.opacity = 0
canvas.appendChild(GO_PRO)

var btnParticipe = document.createElement("img")
btnParticipe.setAttribute("src", "img/BOUTON_PARTICIPE.png")
btnParticipe.setAttribute("class", "btnParticipe")
btnParticipe.style.opacity = 0
canvas.appendChild(btnParticipe)


//#############################################################""//
//#############################################################""//
//############### implementation des functions ###############""//
//#############################################################""//
//#############################################################""//


// afficher l'etape 1

function Showetape1() {

    hide(rec, 140, 300, rec.clientWidth, rec.clientHeight, 0, 0)


    hide(etap3, 90, 216, etap3.clientWidth, etap3.clientHeight, 0, 0)
    hide(btnParticipe, 228, 432, btnParticipe.clientWidth, btnParticipe.clientHeight, 0, 0)
    hide(GO_PRO, 50, 205, 170, 198, 0, 0)



    hide(etap2, 90, 216, etap1.clientWidth, etap1.clientHeight, 0, 0)
    hide(PHOTO_21, 450, 152, PHOTO_21.clientWidth, PHOTO_21.clientHeight, 0, 0)
    hide(PHOTO_22, 11, 201, PHOTO_22.clientWidth, PHOTO_22.clientHeight, 0, 0)
    hide(PHOTO_23, 305, 390, PHOTO_23.clientWidth, PHOTO_23.clientHeight, 0, 0)

    show(etap1, 90, 204, etap1.clientWidth, etap1.clientHeight, 1, 0)
    show(PHOTO_1, 420, 150, PHOTO_1.clientWidth, PHOTO_1.clientHeight, 1, 0)
    show(PHOTO_2, 62, 194, PHOTO_2.clientWidth, PHOTO_2.clientHeight, 1, 0)
    show(PHOTO_3, 250, 350, PHOTO_3.clientWidth, PHOTO_3.clientHeight, 1, 0)


}

// afficher l'etape 2

function Showetape2() {

    hide(rec, 140, 300, rec.clientWidth, rec.clientHeight, 0, 0)


    hide(etap3, 90, 216, etap3.clientWidth, etap3.clientHeight, 0, 0)
    hide(btnParticipe, 228, 432, btnParticipe.clientWidth, btnParticipe.clientHeight, 0, 0)
    hide(GO_PRO, 50, 205, 170, 198, 0, 0)


    hide(etap1, 90, 216, etap1.clientWidth, etap1.clientHeight, 0, 0)
    hide(PHOTO_1, 433, 50, PHOTO_1.clientWidth, PHOTO_1.clientHeight, 0, 0)
    hide(PHOTO_2, 10, 116, PHOTO_2.clientWidth, PHOTO_2.clientHeight, 0, 0)
    hide(PHOTO_3, 250, 365, PHOTO_3.clientWidth, PHOTO_3.clientHeight, 0, 0)




    show(etap2, 90, 204, etap2.clientWidth, etap2.clientHeight, 1, 200)
    show(PHOTO_21, 435, 186, PHOTO_21.clientWidth, PHOTO_21.clientHeight, 1, 200)
    show(PHOTO_22, 70, 260, PHOTO_22.clientWidth, PHOTO_22.clientHeight, 1, 200)
    show(PHOTO_23, 315, 357, PHOTO_23.clientWidth, PHOTO_23.clientHeight, 1, 200)




}
// afficher l'etape 3

function Showetape3() {

    hide(rec, 140, 300, rec.clientWidth, rec.clientHeight, 0, 0)


    hide(etap2, 90, 216, etap1.clientWidth, etap1.clientHeight, 0, 0)
    hide(PHOTO_21, 450, 152, PHOTO_21.clientWidth, PHOTO_21.clientHeight, 0, 0)
    hide(PHOTO_22, 11, 201, PHOTO_22.clientWidth, PHOTO_22.clientHeight, 0, 0)
    hide(PHOTO_23, 305, 390, PHOTO_23.clientWidth, PHOTO_23.clientHeight, 0, 0)

    hide(etap1, 90, 216, etap1.clientWidth, etap1.clientHeight, 0, 0)
    hide(PHOTO_1, 433, 50, PHOTO_1.clientWidth, PHOTO_1.clientHeight, 0, 0)
    hide(PHOTO_2, 10, 116, PHOTO_2.clientWidth, PHOTO_2.clientHeight, 0, 0)
    hide(PHOTO_3, 250, 365, PHOTO_3.clientWidth, PHOTO_3.clientHeight, 0, 0)


    show(etap3, 90, 184, etap3.clientWidth, etap3.clientHeight, 1, 0)
    show(btnParticipe, 228, 410, btnParticipe.clientWidth, btnParticipe.clientHeight, 1, 0)
    show(GO_PRO, 50, 205, 100, 116, 1, 0)
}


// cacher tous les elements 

function hideAll() {

    hide(rec, 140, 300, rec.clientWidth, rec.clientHeight, 0, 0)


    hide(etap2, 90, 216, etap1.clientWidth, etap1.clientHeight, 0, 0)
    hide(PHOTO_21, 450, 152, PHOTO_21.clientWidth, PHOTO_21.clientHeight, 0, 0)
    hide(PHOTO_22, 11, 201, PHOTO_22.clientWidth, PHOTO_22.clientHeight, 0, 0)
    hide(PHOTO_23, 305, 390, PHOTO_23.clientWidth, PHOTO_23.clientHeight, 0, 0)

    hide(etap1, 90, 216, etap1.clientWidth, etap1.clientHeight, 0, 0)
    hide(PHOTO_1, 433, 50, PHOTO_1.clientWidth, PHOTO_1.clientHeight, 0, 0)
    hide(PHOTO_2, 10, 116, PHOTO_2.clientWidth, PHOTO_2.clientHeight, 0, 0)
    hide(PHOTO_3, 250, 365, PHOTO_3.clientWidth, PHOTO_3.clientHeight, 0, 0)


    hide(etap3, 90, 216, etap3.clientWidth, etap3.clientHeight, 0, 0)
    hide(btnParticipe, 228, 432, btnParticipe.clientWidth, btnParticipe.clientHeight, 0, 0)
    hide(GO_PRO, 50, 205, 170, 198, 0, 0)



    hide(orange, 500, 360, orange.clientWidth, orange.clientHeight, 0, 100)
    hide(cercles, -40, 360, cercles.clientWidth, cercles.clientHeight, 0, 100)
    hide(btn1, 226, 160, btn1.clientWidth, btn1.clientHeight, 0, 50)
    hide(btn2, 290, 160, btn2.clientWidth, btn2.clientHeight, 0, 50)
    hide(btn3, 355, 160, btn3.clientWidth, btn3.clientHeight, 0, 50)


    hide(accr, 129, 67, accr.clientWidth, accr.clientHeight, 0, 50)

    hide(close, 50, 50, close.clientWidth, close.clientHeight, 0, 50)

    hide(cercle, 500, 67, 100, 100, 0, 500)





}



// appele des fonction 

btn1.onclick = function () {

    Showetape1()

}

btn2.onclick = function () {

    Showetape2()

}

btn3.onclick = function () {

    Showetape3()

}

close.onclick = function () {
    hideAll()
}

fantaImg.onclick = function () {


    show(ovale, 60, 0, 500, 500, 1, 0)
    show(btn1, 355, 140, btn1.clientWidth, btn1.clientHeight, 1, 500)
    show(btn2, 290, 140, btn2.clientWidth, btn2.clientHeight, 1, 500)
    show(btn3, 226, 140, btn3.clientWidth, btn3.clientHeight, 1, 500)
    show(rec, 140, 200, rec.clientWidth, rec.clientHeight, 1, 500)

    show(close, 83, 100, close.clientWidth, close.clientHeight, 1, 500)
    show(accr, 156, 50, accr.clientWidth, accr.clientHeight, 1, 500)

    setTimeout(function () {
        cercles.style.visibility = "visible"
    }, 500)

    show(cercles, 0, 360, cercles.clientWidth, cercles.clientHeight, 1, 500)
    show(orange, 430, 360, orange.clientWidth, orange.clientHeight, 1, 500)



}



// fonction Show :: pour afficher un element avec annimation

function show(obj, left, top, width, height, opacity, delay) {

    setTimeout(function () {
        obj.style.opacity = opacity
        obj.style.left = left + "px"
        obj.style.top = top + "px"
        obj.style.width = width + "px"
        obj.style.height = height + "px"
    }, delay)


}

// fonction Show :: pour cacher un element avec annimation

function hide(obj, left, top, width, height, opacity, delay) {

    setTimeout(function () {
        obj.style.opacity = opacity
        obj.style.left = left + "px"
        obj.style.top = top + "px"
        obj.style.width = width + "px"
        obj.style.height = height + "px"
    }, delay)


}


