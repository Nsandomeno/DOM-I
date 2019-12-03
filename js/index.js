const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelectorAll("nav a");
navBar.forEach((element, i) => {
  element.textContent = siteContent["nav"][`nav-item-${i}`]
})


// navBar[0].textContent = siteContent["nav"]["nav-item-1"]
// navBar[1].textContent = siteContent["nav"]["nav-item-2"]
// navBar[2].textContent = siteContent["nav"]["nav-item-3"]
// navBar[3].textContent = siteContent["nav"]["nav-item-4"]
// navBar[4].textContent = siteContent["nav"]["nav-item-5"]
// navBar[5].textContent = siteContent["nav"]["nav-item-6"]


// creating two new elements to add to the navigation bar


let navItems = document.querySelector("nav"); // Should this be "nav" or "nav a"?
//console.log(navItems)
let new_anchor1 = document.createElement("a");   // Create a new anchor tag
let textNode1 = document.createTextNode("Hello"); // Create a text node to be appended to the new anchor
//console.log(textNode1)
let new_anchor2 = document.createElement("a");
let textNode2 = document.createTextNode("Good Bye");

new_anchor1.appendChild(textNode1)
navItems.prepend(new_anchor1)
//console.log(new_anchor1)

new_anchor2.appendChild(textNode2)
navItems.prepend(new_anchor2)

//
navBar = document.querySelectorAll("nav a");

navBar.forEach(function(element){
  element.style.color = "green";
})


let mainImgLeft = document.getElementById("cta-img");
mainImgLeft.setAttribute('src', siteContent["cta"]["img-src"])

let mainHeaderRight = document.querySelector(".cta-text h1");
mainHeaderRight.textContent = siteContent["cta"]["h1"]

let mainButtonRight = document.querySelector(".cta-text button");
mainButtonRight.textContent = siteContent["cta"]["button"]

let featureImg = document.getElementById("middle-img");
featureImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let featureSectionHeadersTop = document.querySelectorAll(".top-content .text-content h4")
featureSectionHeadersTop[0].textContent = siteContent["main-content"]["features-h4"]
featureSectionHeadersTop[1].textContent = siteContent["main-content"]["about-h4"]


let featureSectionTextTop = document.querySelectorAll(".top-content .text-content p")
featureSectionTextTop[0].textContent = siteContent["main-content"]["features-content"]
featureSectionTextTop[1].textContent = siteContent["main-content"]["about-content"]


let featureSectionHeadersBottom = document.querySelectorAll(".bottom-content .text-content h4")
featureSectionHeadersBottom[0].textContent = siteContent["main-content"]["services-h4"]
featureSectionHeadersBottom[1].textContent = siteContent["main-content"]["product-h4"]
featureSectionHeadersBottom[2].textContent = siteContent["main-content"]["vision-h4"]

let featureSectionTextBottom = document.querySelectorAll(".bottom-content .text-content p")
featureSectionTextBottom[0].textContent = siteContent["main-content"]["services-content"]
featureSectionTextBottom[1].textContent = siteContent["main-content"]["product-content"]
featureSectionTextBottom[2].textContent = siteContent["main-content"]["vision-content"]

let contactSectionHead = document.querySelector(".contact h4");
contactSectionHead.textContent = siteContent["contact"]["contact-h4"]

let contactSectionPara = document.querySelectorAll(".contact p");
contactSectionPara[0].textContent = siteContent["contact"]["address"]
contactSectionPara[1].textContent = siteContent["contact"]["phone"]
contactSectionPara[2].textContent = siteContent["contact"]["email"]

let foot = document.querySelector("footer");
foot.textContent = siteContent["footer"]["copyright"]












