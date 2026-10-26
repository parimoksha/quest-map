
const overlay = document.querySelector('#overlay')
const mapNodes = document.querySelectorAll('.node.checkpoint')

const closeBtn = document.querySelector('.close-btn')

const questTitle = document.querySelector('#quest-info-title')
const questDesc = document.querySelector('#quest-info-desc')
const questSmart = document.querySelector('#quest-info-smart')
const questWhy = document.querySelector('#quest-info-why')

// console.log('quest-info:')
// console.log(questTitle.innerText)
// console.log(questDesc.innerText)
// console.log(questSmart.innerText)
// console.log(questWhy.innerText)
// console.log('\n')

// EVENT LISTENERS
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
})

mapNodes.forEach(node => {
    node.addEventListener('click', (e) => {
        // console.log(e.currentTarget.id)
        let nodeID = e.currentTarget.id
        showQuestData(nodeID)

        overlay.style.display = 'flex'
    })
})
// END - EVENT LISTENERS

// DATA
const questData = {
    "y1-n1": {
        title: "Adapting to Campus Life and Making Friends",
        desc: "Adapt to living independently in Hong Kong for the first time. I will explore the campus, make new friends, figure out the groceries and travel, explore the city, and settle in the new environment.",
        smart: ["join orientation activites", "at least one public event/practice/meetup per week", "orientations and clibs are welcoming to new students", "helps me meet more people and explore the campus", "by first 2 months of term 1"],
        why: "This is my first time living away from home and that too in a completely different country with an entirely new culture. Friends are a core part of univeristy life and finding my people is very important for me in the beginning. Having people to rely on is going to make my time at the university a lot more stress-free and more importantly more fun."
    },
    "y1-n2": {
        title: "Master the core academic foundations across all subjects",
        desc: "I will focus on understanding the basics of the all the core subjects like Physics, Mathematics, and Computer Science. Building a strong technical fundamentals will prepare me for advanced classes and future projects in engineering.",
        smart: ["learn all concepts with complete understanding", "achieve GPA > 3.3", "dedicate at leats 5hrs/week for self-study and coding practice", "stroing fundamentals are essential for further in-depth projects", "by end of term 1"],
        why: "Engineering courses will get harder each year and they rely heavily upon previously taught basics. Mastering the basics early ensures that I do not fall behind, gives me confidence to build personal projects, and lays a foundation for specialized topics like robotics, game development, etc. "
    },
    "y1-n3": {
        title: "Exploring Inter-disciplinary electives",
        desc: "explore the different domains under engineering by taking courses form different departments. Try finding a course from beyond engineering as well, for example from economics, business, etc.",
        smart: ["take one course from another department and one from another faculty", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y1-n4": {
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },

    "y2-n1": {
        title: "Explore different fields in engg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y2-n2": {
        title: "Find internships",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y2-n3": {
        title: "Build a cool exciting project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y2-n4": {
        title: "Lorem ipsum dolor sit amet",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },

    "y3-n1": {
        title: "Pick a specialization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y3-n2": {
        title: "Build a cool exciting project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y3-n3": {
        title: "Go on semester exchange abroad",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y3-n4": {
        title: "Explore inter-disciplinary subjects",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },

    "y4-n1": {
        title: "Get a super high GPA",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y4-n2": {
        title: "Make a in-depth cool project",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y4-n3": {
        title: "Do specialization in one field",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
    "y4-n4": {
        title: "Find a job",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, minima debitis recusandae eius eaque illum? Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        smart: ["something", "something", "something", "something", "something"],
        why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
    },
}
// END - DATA


// SHOW DATA
function showQuestData (id) {
    let data = questData[id]

    // console.log(data)

    questTitle.innerText = data.title
    questDesc.innerText = data.desc
    questWhy.innerText = data.why

    questSmart.innerHTML = `
        <span class="bold">S :</span> ${data["smart"][0]}
        <br>
        <span class="bold">M :</span> ${data["smart"][1]}
        <br>
        <span class="bold">A :</span> ${data["smart"][2]}
        <br>
        <span class="bold">R :</span> ${data["smart"][3]}
        <br>
        <span class="bold">T :</span> ${data["smart"][4]}
        <br>
    `
}
// END - SHOW DATA