document.addEventListener("DOMContentLoaded", function () {
  const categorySelect = document.getElementById("category-select");
  const optionsContainer = document.getElementById("options-container");

  categorySelect.addEventListener("change", function () {
    const category = categorySelect.value;
    if (category !== "") {
      fetchOptions(category);
    } else {
      optionsContainer.innerHTML = "";
    }
  });

  function fetchOptions(category) {
    optionsContainer.innerHTML = '<div class="loading-spinner"></div>';
    // Simulate delay for fetching options (in real application, this should be an AJAX call)
    setTimeout(function () {
      const options = {
        "For Budget-Conscious Users": [
          [
            "PREMIUM",
            "Best Choice With Excellent Power",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹649/month",
              RAM: "8 GB",
              "Regular CPU": "4",
              "SSD Storage": "160 GB",
              Bandwidth: "5 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "STARTER",
            "Effective Pricing With Good Features",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹99/month",
              RAM: "1 GB",
              "Regular CPU": "1",
              "SSD Storage": "25 GB",
              Bandwidth: "1 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability":
                "<span class='red-text'>Out of Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "BASIC",
            "Great Alternative Choice For Beginners",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹249/month",
              RAM: "2 GB",
              "Regular CPU": "1",
              "SSD Storage": "50 GB",
              Bandwidth: "2 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "STANDARD",
            "Reliable With Excellent Features",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹349/month",
              RAM: "4 GB",
              "Regular CPU": "2",
              "SSD Storage": "80 GB",
              Bandwidth: "4 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
        ],
        "For Quality-Focused Users": [
          [
            "PREMIUM",
            "Best Choice With Excellent Power",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹749/month",
              RAM: "8 GB",
              "Intel CPU": "4",
              "NVME Storage": "240 GB",
              Bandwidth: "6 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "STARTER",
            "Effective Pricing With Good Features",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹199/month",
              RAM: "1 GB",
              "AMD CPU": "1",
              "NVME Storage": "35 GB",
              Bandwidth: "1 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability":
                "<span class='red-text'>Out of Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "BASIC",
            "Great Alternative Choice For Beginners",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹349/month",
              RAM: "2 GB",
              "Intel CPU": "1",
              "NVME Storage": "70 GB",
              Bandwidth: "2 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "STANDARD",
            "Reliable With Excellent Features",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹449/month",
              RAM: "4 GB",
              "Intel CPU": "2",
              "NVME Storage": "120 GB",
              Bandwidth: "4 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
        ],
        "For Value-Seeking Users": [
          [
            "PREMIUM",
            "Best Choice With Excellent Power",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹699/month",
              RAM: "8 GB",
              "AMD CPU": "4",
              "NVME Storage": "160 GB",
              Bandwidth: "5 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "STARTER",
            "Effective Pricing With Good Features",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹149/month",
              RAM: "1 GB",
              "AMD CPU": "1",
              "NVME Storage": "25 GB",
              Bandwidth: "1 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability":
                "<span class='red-text'>Out of Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "BASIC",
            "Great Alternative Choice For Beginners",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹299/month",
              RAM: "2 GB",
              "AMD CPU": "1",
              "NVME Storage": "50 GB",
              Bandwidth: "2 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
          [
            "STANDARD",
            "Reliable With Excellent Features",
            "https://telegram.me/HeyHeartBeat",
            {
              Price: "₹399/month",
              RAM: "4 GB",
              "AMD CPU": "2",
              "NVME Storage": "80 GB",
              Bandwidth: "4 TB",
              Network: "Up to 2 Gbps",
              Validity: "28 Days",
              Location: "User Choice",
              OS: "User Choice",
              "Stock Availability": "<span class='green-text'>In Stock</span>",
            },
            "MORE INFO",
          ],
        ],
      };
      const categoryOptions = options[category];
      let html = "";
      categoryOptions.forEach((option, index) => {
        html += `
                            <div class="option">
                                ${
                                  index === 0
                                    ? "<center><h2><mark style='padding: 10px;border-radius: 10px'>Recommended VPS</mark></h2></center>"
                                    : ""
                                }
                                ${
                                  index === 0
                                    ? `<h3>${option[0]} - ${option[1]}</h3>`
                                    : ""
                                }
                                ${
                                  index !== 0
                                    ? "<hr><center><h2>Alternative VPS</h2></center>"
                                    : ""
                                }
                                ${
                                  index !== 0
                                    ? `<h3>${option[0]} - ${option[1]}</h3>`
                                    : ""
                                }
                                <table class="feature-table">
                                    <tr><th>Feature</th><th>Details</th></tr>
                        `;
        for (const [key, value] of Object.entries(option[3])) {
          html += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
        html += `</table>`;
        html += `<br>`;
        html += `<a class="button" href="${option[2]}" target="_blank">${option[4]}</a>`;
        html += `<br>`;
        html += `</div>`;
      });
      optionsContainer.innerHTML = html;
    }, 1000); // Simulated delay of 1 second
  }
  // Fetch options for "For Budget-Conscious Users" category when page loads
  fetchOptions("For Budget-Conscious Users");
  categorySelect.value = "For Budget-Conscious Users";
});
let question = document.querySelectorAll(".question");

question.forEach((question) => {
  question.addEventListener("click", (event) => {
    const active = document.querySelector(".question.active");
    if (active && active !== question) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});
const toggleButton = document.getElementById("themeToggle");
toggleButton.addEventListener("click", () => {
  if (toggleButton.classList.contains("fa-moon")) {
    toggleButton.classList.remove("fa-moon");
    toggleButton.classList.add("fa-sun");
  } else {
    toggleButton.classList.remove("fa-sun");
    toggleButton.classList.add("fa-moon");
  }
  document.body.classList.toggle("dark-theme");
  document
    .querySelectorAll(
      "nav, .logo p, .main-container, select, .feature-table, .button, .article-content, .container, .question, .answer, .happy-client, footer , .cat-select , .loading-spinner , #themeToggle , #expended-nav , #logo , .marquee"
    )
    .forEach((el) => {
      el.classList.toggle("dark-theme");
    });
});

let navTogBtn = document.getElementById("nav-toggle");
let expandedNav = document.getElementById("expended-nav");
navTogBtn.addEventListener("click", () => {
  expandedNav.classList.toggle("active");
});
let scrolltotop = document.getElementById("scrolltotop");
scrolltotop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
gsap.to("#scrolltotop", {
  opacity: 1,
  duration: 0.2,
  bottom: "20px",
  scrollTrigger: {
    trigger: "#scrolltotop",
    start: "top 0%",
    end: "top -5%",
    scrab: 3,
    toggleActions: "play none none reverse",
  },
});
