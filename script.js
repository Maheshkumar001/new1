

function navigateToDetails(project) {
    // Map project details
    const projectDetails = {
        car: {
            title: "Car Sales Report",
            image: "assets/car.png",
            description: "This report provides insights into car sales trends, performance, and profitability metrics.",
            pdf: "assets/car_sales_report.pdf"
        },
        bank: {
            title: "Bank Analytics Report",
            image: "assets/bank.jpg",
            description: "This report analyzes banking data, loan portfolio performance, and customer insights.",
            pdf: "assets/bank_analytics_report.pdf"
        },
        energy: {
            title: "Energy Based Report",
            image: "assets/energy.jpg",
            description: "This report focuses on energy consumption, pricing trends, and sustainability metrics.",
            pdf: "assets/energy_report.pdf"
        },
        manufacturing: {
            title: "Manufacturing Report",
            image: "assets/manfacture.jpg",
            description: "Insights into manufacturing processes, production efficiency, and supply chain optimization.",
            pdf: "assets/manufacturing_report.pdf"
        },
        lab: {
            title: "Lab Based Report",
            image: "assets/lab.jpg",
            description: "Detailed analysis of lab data, research metrics, and operational efficiency.",
            pdf: "assets/lab_report.pdf"
        },
        hospital: {
            title: "Hospital Report",
            image: "assets/hospita.jpg",
            description: "This report highlights patient data, healthcare performance, and hospital operations.",
            pdf: "assets/hospital_report.pdf"
        },
        "real-estate": {
            title: "Real Estate Report",
            image: "assets/real estate.jpg",
            description: "This report provides insights into real estate market trends, sales, and revenue analysis.",
            pdf: "assets/real_estate_report.pdf"
        },
        hr: {
            title: "HR Report",
            image: "assets/hr.jpg",
            description: "Insights into employee performance, recruitment trends, and HR operations.",
            pdf: "assets/hr_report.pdf"
        }
    };

    // Set project details
    const projectData = projectDetails[project];
    document.getElementById("projectTitle").textContent = projectData.title;
    document.getElementById("projectImage").src = projectData.image;
    document.getElementById("projectDescription").textContent = projectData.description;
    document.getElementById("projectPDF").href = projectData.pdf;

    // Show project details and hide project section
    document.querySelector(".projects").classList.add("hidden");
    document.querySelector(".project-details").classList.remove("hidden");
}

function goBack() {
    // Show project section and hide project details
    document.querySelector(".projects").classList.remove("hidden");
    document.querySelector(".project-details").classList.add("hidden");
}

// Typing effect for "I'm a Data Analyst"
const typing = document.querySelector('.typing');
const roles = ["Data Analyst", "Power BI Expert", "SQL Developer", "Web Developer"];
let roleIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 100);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll to sections on navigation link click
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// Navigate to project details
function navigateToDetails(projectName) {
  alert(`Navigating to details for ${projectName}`);
  // Example: You can implement navigation logic here
  // window.location.href = `${projectName}-details.html`;
}

// Skills bar animation
const skillBars = document.querySelectorAll(".line");
const skillSection = document.querySelector(".skil");
let animationTriggered = false;

function animateSkills() {
  if (window.scrollY + window.innerHeight >= skillSection.offsetTop && !animationTriggered) {
    skillBars.forEach((bar, index) => {
      const width = bar.classList.contains("POWER") ? "90%" :
                    bar.classList.contains("SQL") ? "80%" :
                    bar.classList.contains("DAX") ? "70%" :
                    bar.classList.contains("python") ? "50%" :
                    bar.classList.contains("DATA") ? "90%" :
                    bar.classList.contains("ETL") ? "80%" :
                    bar.classList.contains("ANALYSIS") ? "100%" :
                    bar.classList.contains("QLIK") ? "70%" : "70%";
      bar.style.width = width;
      bar.style.transition = `width 1s ease ${index * 0.2}s`;
    });
    animationTriggered = true;
  }
}

window.addEventListener("scroll", animateSkills);

// Hamburger menu functionality
const checkbox = document.getElementById("check");
const nav = document.querySelector("nav ul");

checkbox.addEventListener("change", () => {
  nav.classList.toggle("active");
});

