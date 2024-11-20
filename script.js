
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all contents
        contents.forEach(content => content.style.display = 'none');

        // Show the selected content
        contents[index].style.display = 'block';

        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});




/*
let menuIcon = document.querySelector("menu-icon");
let navbar = document.querySelector("navbar");

let sections = document.querySelector("section");
let navlinks = document.querySelector("header nav a");

window.onscroll = () => {
     sections.foreach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute ("id");

    if(top >= && top < offset + height){
        navlinks.forEach( => {
    links.classList.remove('active');
    document.querySelector('header nav a' [href'=' + id + ']').classList.add('active');

        })
    }
     })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// Select elements with correct CSS selectors
let menuIcon = document.querySelector(".menu-icon"); // Use a class selector if "menu-icon" is a class
let navbar = document.querySelector(".navbar"); // Use a class selector if "navbar" is a class

let sections = document.querySelectorAll("section"); // Use `querySelectorAll` to select all sections
let navlinks = document.querySelectorAll("header nav a"); // Use `querySelectorAll` to select all nav links

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            navlinks.forEach(link => {
                link.classList.remove("active");
            });

            // Add 'active' class to the current section link
            document.querySelector(`header nav a[href="#${id}"]`).classList.add("active");
        }
    });
};

menuIcon.onscroll = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
*/


let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); // Toggles between menu and close icon
    navbar.classList.toggle("active"); // Toggles the navbar visibility
};


document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const responseMessage = document.getElementById('responseMessage');
    
    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            })
        });
        
        if (response.ok) {
            responseMessage.textContent = 'Thank you! Your message has been sent.';
            this.reset();
        } else {
            responseMessage.textContent = 'Something went wrong. Please try again later.';
        }
    } catch (error) {
        responseMessage.textContent = 'There was an error submitting the form.';
    }
});