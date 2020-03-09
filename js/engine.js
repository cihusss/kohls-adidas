var iframeID;
var wrapperWidth;
var wrapperHeight;
var videoHeight;
var expand = 0;
var gender = document.getElementById("gender").innerHTML;

var content = {
  "Womens" : {
    "lifestyle" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/lifestyle-w.jpg",
    "prod01" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-w01.jpg",
    "prod02" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-w02.jpg",
    "prod03" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-w03.jpg",
    "prod04" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-w04.jpg",
    "logo" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/logo-w.png",
    "color" : "#222"
  },
  "Mens" : {
    "lifestyle" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/lifestyle-m.jpg",
    "prod01" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-m01.jpg",
    "prod02" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-m02.jpg",
    "prod03" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-m03.jpg",
    "prod04" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/prod-m04.jpg",
    "logo" : "https://staging-adlabs.triadretail.net/flynamic/kohls/adidas-rmb-dyn/img/logo-m.png",
    "color" : "#fff"
  }
};

if (gender == "Womens" || gender == "Mens") {
  setContent();
}
else {
  console.log("no gender");
}

function setContent() {

  var lifestyle = content[gender].lifestyle;
  console.log(lifestyle);

  document.getElementById("right").style.backgroundImage = "url(" + lifestyle + ")";
  document.getElementById("logo").src = content[gender].logo;
  document.getElementById("expand").style.color = content[gender].color;

  x = document.querySelectorAll(".prod > img");
  for (i = 0; i < x.length; i++) {
    y = i + 1;
    p = "prod0" + y;
    console.log(p);
    x[i].src = content[gender][p];
  }

}

if (self !== top) {

  iframeID = window.frameElement.id;

  parent.document.getElementById(iframeID).style.height = '200px';
  parent.document.getElementById(iframeID).style.width = '100%';
  parent.document.getElementById(iframeID).style.transition = 'height .2s';
}

function resizeIframes() {

  if (self !== top && expand == 1) {

    wrapperWidth = window.innerWidth;
    parent.document.getElementById(iframeID).style.height = videoHeight + "px";
    parent.parent.document.getElementById(iframeID).style.height = videoHeight + "px";
    document.getElementById("ad").style.height = videoHeight + "px";
  }
}

function styleAd(event) {

  videoHeight = document.getElementById("botr_ZguH21QE_SMAdnFJW_div").offsetHeight;
  
  if (parent.window.location.origin == "https://www.kohls.com") {
    parent.document.getElementById("dfp_globalheader_marquee_ad").style.width = "100%";
    parent.document.getElementById("dfp_globalheader_marquee_ad").style.maxWidth = "1024px";
    parent.document.getElementById("z1-opt-in-collapsed").style.overflow = "hidden";
  }

  if (expand == 1) {
    parent.document.getElementById(iframeID).style.height = videoHeight + "px";
  }

  console.log(expand);

  resizeIframes();
  // parent.document.getElementById(iframeID).style.height = videoHeight + "px";

    switch(true) {

    case (wrapperWidth < 820):
      break;
    
    case (wrapperWidth >= 768 && wrapperWidth < 1440):
      break;
   
    case (wrapperWidth >= 1440):
      break;
  }

  document.getElementById("ad").style.opacity = "1";

}

function expandAd(event) {
  parent.document.getElementById(iframeID).style.height = "576px";
  parent.parent.document.getElementById(iframeID).style.height = "576px";
  document.getElementById("ad").style.height = "576px";
  document.getElementById("panel").style.display = "flex";
  jwplayer().play();
  videoHeight = document.getElementById("botr_ZguH21QE_SMAdnFJW_div").offsetHeight;
  expand = 1;
}

function collapseAd(event) {
  parent.document.getElementById(iframeID).style.height = "200px";
  parent.parent.document.getElementById(iframeID).style.height = "200px";
  document.getElementById("ad").style.height = "200px";
  document.getElementById("panel").style.display = "none";
  jwplayer().pause();
  expand = 0;
}

function collapseProd(event) {
  x = document.querySelectorAll(".prod");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "0";
  }
  document.getElementById("down").style.display = "none";
  document.getElementById("up").style.display = "block";
  document.getElementById("ecommwrap").style.bottom = "-3rem";
}

function expandProd(event) {
  x = document.querySelectorAll(".prod");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity = "1";
  }
  document.getElementById("down").style.display = "block";
  document.getElementById("up").style.display = "none";
  document.getElementById("ecommwrap").style.bottom = "4rem";
}

window.addEventListener("resize", styleAd);

document.getElementById("expand").addEventListener('click', expandAd);
document.getElementById("close").addEventListener('click', collapseAd);
document.getElementById("down").addEventListener('click', collapseProd);
document.getElementById("up").addEventListener('click', expandProd);

// styleAd();