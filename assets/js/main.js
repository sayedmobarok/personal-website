document.addEventListener('DOMContentLoaded', function () {
    // Select the dropdown and buttons
    const dropdown = document.querySelector('.dropdownul');
    const showBtn = document.querySelector('.showbtn');
    const closeBtn = document.querySelector('.closebtn');

    // Initially hide the dropdown
    dropdown.style.display = 'none';

    // Show dropdown when 'showBtn' is clicked
    showBtn.addEventListener('click', function () {
        dropdown.style.display = 'block';
    });

    // Hide dropdown when 'closeBtn' is clicked
    closeBtn.addEventListener('click', function () {
        dropdown.style.display = 'none';
    });

    // Array of texts to display
    const texts = [
        "I am a Freelancer",
        "I am a Web developer",
        "I am a Master Coder"
    ];

    let currentTextIndex = 0; // Start from the first text

    // Function to update the text
    function updateText() {
        // Get the current text
        const currentText = texts[currentTextIndex];

        // Select all letters
        const textWrapper = document.querySelector('.letters');
        textWrapper.innerHTML = currentText.replace(/\S/g, "<span class='letter'>$&</span>");

        // Animate letters in
        anime.timeline({ loop: false })
            .add({
                targets: '.letter',
                scale: [0.3, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 1500,
                delay: (el, i) => 70 * i
            });

        // Move to the next text after some time
        setTimeout(() => {
            // Animate letters out
            anime.timeline({ loop: false })
                .add({
                    targets: '.letter',
                    scale: [1, 0.3],
                    opacity: [1, 0],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 1500,
                    delay: (el, i) => 70 * i,
                    complete: () => {
                        // Update text index
                        currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop back to the start
                        updateText(); // Call the function again
                    }
                });
        }, 3000); // Change text every 3 seconds
    }

    // Start the text animation
    updateText();
});

const aboutRightwrap = document.querySelector(".aboutrightwrap");
let aboutarr=[
    {
        i:"fa-solid fa-chevron-right",
        name:"Birthday:",
        title:"19 JULY 2003",
    },
    {
        i:"fa-solid fa-chevron-right",
        name:"Age:",
        title:"21",
    },
    {
        i:"fa-solid fa-chevron-right",
        name:"Website:",
        title:"www.example.com",
    },

    {
        i:"fa-solid fa-chevron-right",
        name:"Degree:",
        title:"Master",
    },
    {
        i:"fa-solid fa-chevron-right",
        name:"Phone:",
        title:"+123 456 7890",
    },
    {
        i:"fa-solid fa-chevron-right",
        name:"Email:",
        title:"email@example.com",
    },
    {
        i:"fa-solid fa-chevron-right",
        name:"City:",
        title:"DHAKA, BANGLADESH",
    },
    {
        i:"fa-solid fa-chevron-right",
        name:"Freelance:",
        title:"Available",
    },
]


aboutRightwrap.innerHTML= aboutarr.map((item) =>{
    return`
     <div class="singleabout">
         <i class="${item.i}"></i>
         <h4>${item.name}</h4>
         <span>${item.title}</span>
     </div>
    `
}).join("")



    // Select all filter buttons
    const filterButtons = document.querySelectorAll('.button-group .button');
    
    // Select all items in the gallery
    const items = document.querySelectorAll('.gallery .item');
    
    // Add click event listeners to each button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            
            // Loop through each item in the gallery
            items.forEach(item => {
                // If filter is "*" (all items), show all items
                if (filterValue === '*') {
                    item.style.display = 'block';
                } 
                // Else show only the items that match the filter
                else if (item.classList.contains(filterValue.slice(1))) {
                    item.style.display = 'block';
                } 
                // Hide non-matching items
                else {
                    item.style.display = 'none';
                }
            });
            
            // Optional: Add an active class to the selected button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });



const servicewrap = document.querySelector(".serviceswrap")   

let servicearr=[
    {
        i:"fa-solid fa-briefcase",
        title:"Lorem Ipsum",
        text:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    },
    {
        i:"fa-solid fa-list",
        title:"Dolor Sitema",
        text:"Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
    },
    {
        i:"fa-solid fa-chart-simple",
        title:"Sed ut perspiciatis",
        text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
        i:"fa-solid fa-binoculars",
        title:"Magni Dolores",
        text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
        i:"fa-solid fa-sun",
        title:"Nemo Enim",
        text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
    },
    {
        i:"fa-solid fa-credit-card",
        title:"Eiusmod Tempor",
        text:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
    },
]

servicewrap.innerHTML = servicearr.map((item) =>{
    return`
     <div class="singleservices">
        <div class="sslogo">
            <i class="${item.i}"></i>
        </div>
        <div class="sstext">
            <h4>${item.title}</h4>
            <p>${item.text}</p>
        </div>
     </div>
    `
}).join("")


const closeBtn1 = document.querySelector(".closebtn2");
const showBtn2 = document.querySelector(".showbtn2");
const left2 = document.querySelector(".left2")


showBtn2.addEventListener('click', function () {
    left2.style.display = 'block';
});
closeBtn1.addEventListener('click', function () {
    left2.style.display = 'none';
});
