var img1 = document.getElementById("featimg1")
var img2 = document.getElementById("featimg2")
var img3 = document.getElementById("featimg3")
var img4 = document.getElementById("featimg4")
var img5 = document.getElementById("featimg5")
var img6 = document.getElementById("featimg6")
var img7 = document.getElementById("featimg7")
var img8 = document.getElementById("featimg8")

function hide(e) {
    if (e.id == "feat1") {

        img1.style.visibility = "hidden"

    } else if (e.id == "feat2") {
        img2.style.visibility = "hidden"

    } else if (e.id == "feat3") {
        img3.style.visibility = "hidden"
    } else if (e.id == "feat4") {
        img4.style.visibility = "hidden"
    } else if (e.id == "feat5") {
        img5.style.visibility = "hidden"
    } else if (e.id == "feat6") {
        img6.style.visibility = "hidden"
    } else if (e.id == "feat7") {
        img7.style.visibility = "hidden"
    } else if (e.id == "feat8") {
        img8.style.visibility = "hidden"
    }

}

function show() {
    img1.style.visibility = "visible"
    img2.style.visibility = "visible"
    img3.style.visibility = "visible"
    img4.style.visibility = "visible"
    img5.style.visibility = "visible"
    img6.style.visibility = "visible"
    img7.style.visibility = "visible"
    img8.style.visibility = "visible"
}

function latest() {
    document.getElementById("browse1").style.display = "block"
    document.getElementById("browse2").style.display = "none"

}

function byLoc() {
    document.getElementById("browse1").style.display = "none"
    document.getElementById("browse2").style.display = "block"

}

document.getElementById("vid1").onmouseover = function() {
    document.getElementById("video1").play()
}
document.getElementById("vid1").onmouseout = function() {
    document.getElementById("video1").pause()
    document.getElementById("video1").currentTime = 0;
}

document.getElementById("vid2").onmouseover = function() {
    document.getElementById("video2").play()
}
document.getElementById("vid2").onmouseout = function() {
    document.getElementById("video2").pause()
    document.getElementById("video2").currentTime = 0;
}

document.getElementById("vid3").onmouseover = function() {
    document.getElementById("video3").play()
}
document.getElementById("vid3").onmouseout = function() {
    document.getElementById("video3").pause()
    document.getElementById("video3").currentTime = 0;
}

document.getElementById("vid4").onmouseover = function() {
    document.getElementById("video4").play()
}
document.getElementById("vid4").onmouseout = function() {
    document.getElementById("video4").pause()
    document.getElementById("video4").currentTime = 0;
}

document.getElementById("vid5").onmouseover = function() {
    document.getElementById("video5").play()
}
document.getElementById("vid5").onmouseout = function() {
    document.getElementById("video5").pause()
    document.getElementById("video5").currentTime = 0;
}

document.getElementById("vid6").onmouseover = function() {
    document.getElementById("video6").play()
}
document.getElementById("vid6").onmouseout = function() {
    document.getElementById("video6").pause()
    document.getElementById("video6").currentTime = 0;
}