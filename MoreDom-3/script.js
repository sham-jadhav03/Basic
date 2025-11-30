const users = [
    {
        fullname: "Aarav Desai",
        image: "https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612&w=0&k=20&c=eF_0QCtw-Y8Q2c4_xQe6KTkcSPiGCT6qBf6nuavE2Dg=",
        profession: "Software Engineer",
        description:
            "Deep diver into distributed systems and low-level runtime optimization. Runs on caffeine and legacy code refactoring.",
        tags: ["engineering", "backend", "distributed-systems", "optimization"]
    },
    {
        fullname: "Mira Khatri",
        image: "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg",
        profession: "UX Researcher",
        description:
            "Absolutely obsessed with aligning user behavior with product intent. Lives for clean flows and hates dark patterns.",
        tags: ["ux", "research", "design-thinking", "human-centered"]
    },
    {
        fullname: "Jian Wu",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IkjwskdL5mSwfc3-yYi_kJmCExykT1jqzsTnbk8clYwAcnmO80ywhrJKyvhY3gywtN0&usqp=CAU",
        profession: "Data Scientist",
        description:
            "Wrangling messy datasets since day one. Pragmatic with models, allergic to overfitting, loyal to reproducible pipelines.",
        tags: ["data-science", "ml", "analytics", "pipelines"]
    },
    {
        fullname: "Leila Haddad",
        image: "https://st.depositphotos.com/1011643/1248/i/450/depositphotos_12485614-stock-photo-asian-businesswoman-with-tablet-computer.jpg",
        profession: "Product Manager",
        description:
            "Keeps teams aligned like a mission-control operator. Speaks fluent engineering, design, and stakeholder panic.",
        tags: ["product", "leadership", "roadmaps", "strategy"]
    }
];

var sum = ''

users.forEach(function (elem) {
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullname}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
            <h5>#${elem.tags}</h5>
        </div>`
})

var main= document.querySelector('main')

main.innerHTML = sum