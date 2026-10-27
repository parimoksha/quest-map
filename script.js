
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
// const questData = {
//     "y1-n1": {
//         title: "Adapting to Campus Life and Making Friends",
//         desc: "Adapt to living independently in Hong Kong for the first time. I will explore the campus, make new friends, figure out the groceries and travel, explore the city, and settle in the new environment.",
//         smart: ["join orientation activites", "at least one public event/practice/meetup per week", "orientations and clibs are welcoming to new students", "helps me meet more people and explore the campus", "by first 2 months of term 1"],
//         why: "This is my first time living away from home and that too in a completely different country with an entirely new culture. Friends are a core part of univeristy life and finding my people is very important for me in the beginning. Having people to rely on is going to make my time at the university a lot more stress-free and more importantly more fun."
//     },
//     "y1-n2": {
//         title: "Master the core academic foundations across all subjects",
//         desc: "I will focus on understanding the basics of the all the core subjects like Physics, Mathematics, and Computer Science. Building a strong technical fundamentals will prepare me for advanced classes and future projects in engineering.",
//         smart: ["learn all concepts with complete understanding", "achieve GPA > 3.3", "dedicate at leats 5hrs/week for self-study and coding practice", "stroing fundamentals are essential for further in-depth projects", "by end of term 1"],
//         why: "Engineering courses will get harder each year and they rely heavily upon previously taught basics. Mastering the basics early ensures that I do not fall behind, gives me confidence to build personal projects, and lays a foundation for specialized topics like robotics, game development, etc. "
//     },
//     "y1-n3": {
//         title: "Exploring Inter-disciplinary electives",
//         desc: "explore the different domains under engineering by taking courses form different departments. Try finding a course from beyond engineering as well, for example from economics, business, etc.",
//         smart: ["take course from different department and faculty", "earn passing grades in at least 2 courses from ouside my major", "university allows taking courses from a different department or faculty", "combining seemingly unrelated fields help me develop real-world problemm solving skills", "by end of year 1"],
//         why: "Studying topics outside computer science broadens my perspective, provides inspiration for new and unique projects, and helps me develop my real-world problem solving skills. All these will make me a better engineer and facilitate me in achiveing my ultimate goal."
//     },
//     "y1-n4": {
//         title: "Create small software and hardware projects",
//         desc: "I will turn my basic coding knowledge into real, working applications. I will build small personal projects that combine programming with simple interactive ideas to practice my skills outside the classroom.",
//         smart: ["make atleast 1 hardware and software project", "complete 2 fully-functional projects", "basic coding knowledge and learning on the job makes it manageable alongside classes", "transforming theory into practical skill prepares me for advanced upper-year courses", "by end of year 1"],
//         why: "Building real projects teaches me how to solve practical coding bugs and design working software. It boosts my technical confidence, showcases my active learning, and helps me discover which technical areas I enjoy working on most."
//     },

//     "y2-n1": {
//         title: "Advancing Core Computer Science Knowledge and Specialized Concepts",
//         desc: "I will dive deeper into advanced Computer Science subjects like data structures and algorithms. I will strengthen my technical understanding to tackle more complex engineering problems and software design.",
//         smart: ["master advanced topics through year 2 coursework", "maintain GPA > 3.3 across all coursework", "dedicating time for self-study and coding questions practice", "advanced cs concepts form the backbone for specialized fields", "by term 1 of year 2"],
//         why: "Moving beyond beginner coding requires a solid grasp of data structures and algorithms. Mastering these core concepts helps me write efficient code, solve tricky technical problems, and prepare for upper-year engineering electives."
//     },
//     "y2-n2": {
//         title: "Securing and Completing a Practical Summer Engineering Internship",
//         desc: "I will actively search for, apply to, and complete a summer engineering internship. This will allow me to gain practical workplace experience, learn industry software tools, and observe real-world engineering workflows.",
//         smart: ["complete one summer internship role", "apply to at least 15 roles and receive at least one summer internship offer", "utilizing university career portals, resume workshops, and technical preparation makes securing an internship realistic", "direct industry experience bridges classroom theory with real-world technical practices and boosts future employment prospects", "secure an iffer term 2 and complete the internship by end of year 2"],
//         why: "Classroom learning only tells half the story. Experiencing a real workplace helps me understand corporate engineering standards, practice professional communication, and discover what specific technical roles suit me best before entering my final years."
//     },
//     "y2-n3": {
//         title: "Taking Robotics Electives and Joining the CUHK Robotics Club",
//         desc: "I will deepen my technical studies by enrolling in specialized engineering electives. At the same time, I will join a campus robotics club to work hands-on with hardware and electronic circuits alongside peers.",
//         smart: ["enroll in robotics electives and join the CUHK Robocon team", "pass 2 robotics electives and participate in weekly meeting session for Robocon", "taking cross-department courses is allowed and robocon has active new-member recruitment process", "specialized electives and club teamwork provide the exact technical skills needed for advanced engineering design", "by the end of year 2"],
//         why: "Classroom lectures provide the theory, but a robotics club gives me the chance to build physical machines with my own hands. Combining specialized electives with club teamwork turns abstract concepts into real, working hardware skills."
//     },
//     "y2-n4": {
//         title: "Integrating Interdisciplinary Knowledge into Technical Project Concepts",
//         desc: "I will combine what I learned from non-engineering courses with my computer science skills. I will design a project proposal or prototype that applies computing to solve a problem in another field.",
//         smart: ["formulate an interdisciplinary project proposal", "Make a working proof of concept and open-source it", "combining skills from previous coursework", "bridges technical knowledge with real-world applications across other disciplines", "by end of year 2"],
//         why: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam at, dolore dignissimos enim, veritatis maxime quibusdam blanditiis doloremque commodi tempora et. Accusantium et, eius consequatur delectus sunt necessitatibus officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi."
//     },

//     "y3-n1": {
//         title: "Selecting a CSE Stream and find my niche",
//         desc: "I will fulfill my degree requirement by selecting one of the four official CSE academic streams. Formally choosing my stream will structure my remaining upper-year requirements around my long-term career goals",
//         smart: ["Officially declare my chosen stream", "Enroll in at least 2 courses from the stream", "Requirement by univeristy and hence ample resources are available", "Declaring my stream ensures I fulfill official graduation requirements while building deep expertise in a targeted computing area", "by end of term 1 of year 3"],
//         why: "Fulfilling this mandatory milestone gives clear academic structure to my final degree years. Instead of taking disconnected electives, committing to an official stream concentrates my effort on advanced core topics, ensuring I fulfill graduation requirements while building specialized expertise that aligns directly with my future career path."
//     },
//     "y3-n2": {
//         title: "Gaining Practical Exposure Through Guided Research and Summer Internships",
//         desc: "I will combine academic research and industry experience to test my skills. I will assist in a university research lab during the term and work in a corporate technical internship during the summer.",
//         smart: ["secure a summer internship or join a faculty research lab", "complete either one research project or an internship", "univeristy provided resources and prior experience", "Experiencing both research and industry gives me a complete view of practical software and engineering careers", "by the end of year 3"],
//         why: "Combining lab research with a corporate internship gives me a balanced view of academic and industry pathways. This dual exposure sharpens my technical skills in real-world settings, builds a professional network, and helps me decide whether to pursue graduate studies or industry jobs after graduation."
//     },
//     "y3-n3": {
//         title: "Completing an Overseas Academic Semester Exchange Program",
//         desc: "I will spend one semester studying at an overseas partner university. I will take transferrable computing or elective courses, experience a new educational culture, and gain valuable international perspective.",
//         smart: ["apply for and complete one exchange program", "go for the exchange and succesfully transfer course credits", "CUHK and Chung Chi College have a strong exchange programme", "Experiencing education in another country broadens my worldview, boosts adaptability, and expands my international network", "during either term 1 or term 2 of year 3"],
//         why: "Studying abroad pushes me out of my comfort zone and develops true global adaptability. Navigating a new academic and cultural environment builds personal independence, expands my international professional network, and gives me fresh perspectives on how computer engineering is taught and practiced globally."
//     },
//     "y3-n4": {
//         title: "Designing Personal Interdisciplinary Projects Combining Diverse Domains",
//         desc: "I will apply my stream knowledge alongside new concepts learned abroad to build personal software projects. I will focus on merging computer science with non-engineering domains to test creative solutions.",
//         smart: ["build an inter-disciplinary project or imporve a previous one", "complete a fully working prototype and make it open-source", "Combining skills learned from univeristy courses and previous experience", "Developing self-directed cross-domain projects showcases independent initiative and prepares me for final-year capstone work", "by the end of year 3"],
//         why: "Building self-directed interdisciplinary projects forces me to combine abstract concepts into real-world software. This creative synthesis proves I can build practical systems independently, builds a strong personal portfolio for future employers, and serves as ideal preparation for my final-year capstone project."
//     },

//     "y4-n1": {
//         title: "Prioritizing Final Academic Performance to Maximize CGPA",
//         desc: "I will dedicate strong academic effort to my remaining upper-level courses. I will manage my study time efficiently to maintain a high academic standard and maximize my overall CGPA upon graduation.",
//         smart: ["top grades in all courses", "GPA > 3.5 for solidifying my overall CGPA", "Applying effective study habits and specialized knowledge along with dedicated time", "A strong cumulative CGPA strengthens postgraduate applications and opens competitive corporate career pathways", "end of year 4"],
//         why: "A strong cumulative GPA reflects sustained discipline and academic dedication throughout my university degree. Elevating my final academic results in Year 4 ensures my transcript stands out to postgraduate admission committees and premier technology employers, giving me a strong competitive advantage as I enter the job market."
//     },
//     "y4-n2": {
//         title: "Making a Concrete Final Year Project in My Chosen Domain",
//         desc: "I will channel my best effort into designing and building my Final Year Project (FYP). I will integrate my specialized computing skills to deliver a substantial project in my chosen domain.",
//         smart: ["complete a compehensive FYP", "complete the project, write the thesis, and present it officially", "Working closely with my project advisor and leveraging prior research/project experience", "The capstone project serves as the primary demonstration of my ability to solve real-world engineering problems independently.", "by the end of year 4"],
//         why: "The Final Year Project is the crown jewel of my engineering degree. Dedicating maximum effort to building a concrete, high-quality system proves my capacity for complex problem-solving. It converts abstract classroom knowledge into a tangible centerpiece for my engineering portfolio that showcases my complete technical capability."
//     },
//     "y4-n3": {
//         title: "Applying for Master's Programs or Preparing for Job Search",
//         desc: "I will execute my post-graduation strategy based on my academic performance and career preferences. I will prepare strong applications for Master's programs or actively apply for professional industry roles.",
//         smart: ["aplpy for job/master's programs", "Submit at least 5 Master's applications or 20 targeted job applications, and participate in interview processes.", "Utilizing past internship experiences, project portfolios, and career center resources streamlines the application process", "Aligning my immediate post-graduation steps with my long-term goals ensures a smooth transition into my career or higher education.", "by middle of term 2 of year 4"],
//         why: "Having a clear post-graduation execution plan prevents last-minute career uncertainty. Whether pursuing advanced specialization through a Master's program or entering the professional workforce directly, taking early, organized action ensures I secure an exciting, high-impact opportunity aligned with my growth aspirations right after graduation."
//     },
//     "y4-n4": {
//         title: "Fulfilling Graduation Requirements and Reflecting on University Formation",
//         desc: "I will complete all remaining degree requirements, present my overall portfolio, and evaluate my four-year development. I will transition smoothly from an engineering student into a confident computing professional.",
//         smart: ["Audit all academic records to confirm completion of degree requirements", "Clear all university graduation checks and complete a structured self-reflection on my 4-year development goals", "Regular communication with academic advisors ensures all unit requirements are fully satisfied ahead of time", "Formally completing all requirements marks the successful end of my undergraduate studies and prepares me for professional life", "by the official degree conferment date at the end of Year 4"],
//         why: "Reflecting on my overall progress allows me to recognize how much I have grown technically, personally, and socially. Successfully fulfilling all graduation milestones consolidates four years of hard work, cementing my identity as a well-rounded engineering professional ready to make meaningful contributions to society."
//     },
// }

const questData = {
    "y1-n1": {
        title: "Adapting to Campus Life and Making Friends",
        desc: "I will adapt to living independently in Hong Kong for the first time. I will explore the campus, make new friends, manage daily routines and travel, explore the city, and settle into my new environment.",
        smart: [
            "Join orientation activities and campus clubs",
            "Attend at least one public event, practice, or meetup per week",
            "Orientations and student clubs are welcoming to all new students",
            "Helps me meet diverse people and explore the campus environment",
            "Achieve within the first two months of Term 1"
        ],
        why: "This is my first time living away from home in an entirely new country and culture. Friends are a core part of university life, so finding my community early is essential. Having a reliable support network makes navigating university life far less stressful and significantly more enjoyable."
    },
    "y1-n2": {
        title: "Mastering Core Academic Foundations Across All Subjects",
        desc: "I will focus on understanding basic concepts across core subjects like Physics, Mathematics, and Computer Science. Building strong technical fundamentals will prepare me for advanced classes and future engineering projects.",
        smart: [
            "Learn core course concepts with clear, deep understanding",
            "Maintain a cumulative GPA above 3.3 in Term 1",
            "Dedicate at least 5 hours per week to self-study and coding practice",
            "Strong academic fundamentals are essential for upper-year technical projects",
            "Complete by the end of Term 1"
        ],
        why: "Engineering courses get progressively harder and rely heavily on previously taught basics. Mastering foundational concepts early ensures I do not fall behind, gives me confidence to build personal software projects, and lays a solid foundation for specialized fields like robotics and game development."
    },
    "y1-n3": {
        title: "Exploring Interdisciplinary Electives Beyond Major",
        desc: "I will explore diverse domains within engineering by taking courses from different departments. I will also take electives beyond engineering, such as economics or business, to widen my perspective.",
        smart: [
            "Take elective courses from different engineering departments and faculties",
            "Earn passing grades in at least 2 courses outside my core major",
            "University course structures allow taking electives across different departments",
            "Combining different disciplines helps me develop real-world problem-solving skills",
            "Complete by the end of Year 1"
        ],
        why: "Studying topics outside computer science broadens my academic perspective, inspires creative project ideas, and sharpens my real-world problem-solving skills. Learning across diverse fields helps me become a versatile, holistic engineer and aligns directly with my long-term personal growth goals."
    },
    "y1-n4": {
        title: "Creating Small Software and Hardware Projects",
        desc: "I will turn my basic coding knowledge into real, working applications. I will build small personal projects that combine programming with simple interactive ideas to practice my skills outside the classroom.",
        smart: [
            "Build at least 1 hardware project and 1 software project from scratch",
            "Complete 2 fully functional interactive project prototypes",
            "Applying core coding knowledge alongside hands-on learning keeps tasks manageable",
            "Transforming theory into practical skill prepares me for advanced upper-year courses",
            "Complete by the end of Year 1"
        ],
        why: "Building real projects teaches me how to solve practical coding bugs and design working software. It boosts my technical confidence, showcases my active learning, and helps me discover which technical areas I enjoy working on most."
    },

    "y2-n1": {
        title: "Advancing Core Computer Science Knowledge and Specialized Concepts",
        desc: "I will dive deeper into advanced Computer Science subjects like data structures and algorithms. I will strengthen my technical understanding to tackle more complex engineering problems and software design.",
        smart: [
            "Master advanced technical topics through Year 2 core coursework",
            "Maintain a term GPA above 3.3 across all CS subjects",
            "Dedicate regular weekly hours to self-study and algorithm practice",
            "Advanced CS concepts form the essential backbone for specialized computing fields",
            "Complete by the end of Term 1 of Year 2"
        ],
        why: "Moving beyond beginner coding requires a solid grasp of data structures and algorithms. Mastering these core concepts helps me write efficient code, solve tricky technical problems, and prepare for upper-year engineering electives."
    },
    "y2-n2": {
        title: "Securing and Completing a Practical Summer Engineering Internship",
        desc: "I will actively search for, apply to, and complete a summer engineering internship. This will allow me to gain practical workplace experience, learn industry software tools, and observe real-world engineering workflows.",
        smart: [
            "Apply to at least 15 technical roles and secure one offer",
            "Successfully complete one summer engineering internship position",
            "Utilizing university career portals and resume workshops makes applying realistic",
            "Direct industry experience bridges classroom theory with real-world technical practice",
            "Secure an offer in Term 2 and complete the internship by the end of Year 2"
        ],
        why: "Classroom learning only tells half the story. Experiencing a real workplace helps me understand corporate engineering standards, practice professional communication, and discover what specific technical roles suit me best before entering my final years."
    },
    "y2-n3": {
        title: "Taking Robotics Electives and Joining the CUHK Robocon Team",
        desc: "I will deepen my technical studies by enrolling in specialized engineering electives. At the same time, I will join a campus robotics team to work hands-on with hardware and electronic circuits alongside peers.",
        smart: [
            "Enroll in robotics electives and join the CUHK Robocon team",
            "Pass 2 robotics electives and attend weekly Robocon team build sessions",
            "Robocon features an active recruitment process open to engineering undergraduates",
            "Specialized electives and club teamwork provide practical hardware integration skills",
            "Complete by the end of Year 2"
        ],
        why: "Classroom lectures provide the theory, but a robotics club gives me the chance to build physical machines with my own hands. Combining specialized electives with club teamwork turns abstract concepts into real, working hardware skills."
    },
    "y2-n4": {
        title: "Integrating Interdisciplinary Knowledge into Technical Project Concepts",
        desc: "I will combine what I learned from non-engineering courses with my computer science skills. I will design a project proposal or prototype that applies computing to solve a problem in another field.",
        smart: [
            "Formulate an interdisciplinary project proposal combining CS with another domain",
            "Build a working proof-of-concept prototype and open-source the repository",
            "Leveraging cross-disciplinary skills from previous coursework makes execution feasible",
            "Bridges technical computing knowledge with practical applications across other fields",
            "Complete by the end of Year 2"
        ],
        why: "Connecting computer science with non-engineering domains trains me to think beyond isolated coding. Designing a cross-disciplinary project allows me to apply technical logic to diverse fields, sharpens my system design skills, and prepares me for complex upper-year research and capstone challenges."
    },

    "y3-n1": {
        title: "Selecting a CSE Stream and Finding My Niche",
        desc: "I will fulfill my degree requirement by selecting one of the four official CSE academic streams. Formally choosing my stream will structure my remaining upper-year requirements around my long-term career goals.",
        smart: [
            "Officially declare my chosen academic stream within the department",
            "Enroll in and complete at least 2 required courses within the stream",
            "Stream selection is a mandatory university milestone supported by faculty advisors",
            "Ensures I fulfill graduation requirements while building deep specialized expertise",
            "Complete by the end of Term 1 of Year 3"
        ],
        why: "Fulfilling this mandatory milestone gives clear academic structure to my final degree years. Instead of taking disconnected electives, committing to an official stream concentrates my effort on advanced core topics, ensuring I fulfill graduation requirements while building specialized expertise that aligns directly with my future career path."
    },
    "y3-n2": {
        title: "Gaining Practical Exposure Through Guided Research or Summer Internships",
        desc: "I will combine academic research or industry experience to test my skills. I will assist in a university research lab during the term or work in a corporate technical internship during the summer.",
        smart: [
            "Apply for faculty research positions or technical summer internships",
            "Successfully complete either one semester of research work or a summer internship",
            "Leveraging past project experience and university portals makes applications competitive",
            "Gives me a comprehensive view of practical software and engineering career paths",
            "Complete by the end of Year 3"
        ],
        why: "Combining lab research with a corporate internship gives me a balanced view of academic and industry pathways. This dual exposure sharpens my technical skills in real-world settings, builds a professional network, and helps me decide whether to pursue graduate studies or industry jobs after graduation."
    },
    "y3-n3": {
        title: "Completing an Overseas Academic Semester Exchange Program",
        desc: "I will spend one semester studying at an overseas partner university. I will take transferrable computing or elective courses, experience a new educational culture, and gain valuable international perspective.",
        smart: [
            "Apply for and secure a place in an overseas academic exchange program",
            "Successfully complete the exchange semester and transfer course credits back to CUHK",
            "CUHK and constituent colleges provide established international exchange pathways",
            "Broadens my global perspective, boosts cultural adaptability, and expands my network",
            "Complete during Term 1 or Term 2 of Year 3"
        ],
        why: "Studying abroad pushes me out of my comfort zone and develops true global adaptability. Navigating a new academic and cultural environment builds personal independence, expands my international professional network, and gives me fresh perspectives on how computer engineering is taught and practiced globally."
    },
    "y3-n4": {
        title: "Designing Personal Interdisciplinary Projects Combining Diverse Domains",
        desc: "I will apply my stream knowledge alongside new concepts learned abroad to build personal software projects. I will focus on merging computer science with non-engineering domains to test creative solutions.",
        smart: [
            "Design and build an interdisciplinary project or upgrade a past prototype",
            "Develop a fully working software prototype and open-source the project code",
            "Combining advanced course concepts with prior coding experience makes building feasible",
            "Developing self-directed cross-domain projects prepares me for final-year capstone work",
            "Complete by the end of Year 3"
        ],
        why: "Building self-directed interdisciplinary projects forces me to combine abstract concepts into real-world software. This creative synthesis proves I can build practical systems independently, builds a strong personal portfolio for future employers, and serves as ideal preparation for my final-year capstone project."
    },

    "y4-n1": {
        title: "Prioritizing Final Academic Performance to Maximize CGPA",
        desc: "I will dedicate strong academic effort to my remaining upper-level courses. I will manage my study time efficiently to maintain a high academic standard and maximize my overall CGPA upon graduation.",
        smart: [
            "Target top grades across all upper-level Year 4 courses",
            "Achieve a term GPA above 3.5 to raise or solidify my cumulative CGPA",
            "Applying effective study habits and specialized knowledge makes high performance achievable",
            "A strong cumulative CGPA strengthens postgraduate applications and corporate job prospects",
            "Complete by the end of Year 4"
        ],
        why: "A strong cumulative GPA reflects sustained discipline and academic dedication throughout my university degree. Elevating my final academic results in Year 4 ensures my transcript stands out to postgraduate admission committees and premier technology employers, giving me a strong competitive advantage as I enter the job market."
    },
    "y4-n2": {
        title: "Executing a Concrete Final Year Project in My Chosen Domain",
        desc: "I will channel my best effort into designing and building my Final Year Project (FYP). I will integrate my specialized computing skills to deliver a substantial project in my chosen domain.",
        smart: [
            "Design and execute a comprehensive Final Year Project from start to finish",
            "Deliver a working software system, write the thesis, and defend the project",
            "Working closely with my advisor and leveraging past experience ensures steady progress",
            "Serves as the primary demonstration of my ability to solve complex problems independently",
            "Complete by the end of Year 4"
        ],
        why: "The Final Year Project is the crown jewel of my engineering degree. Dedicating maximum effort to building a concrete, high-quality system proves my capacity for complex problem-solving. It converts abstract classroom knowledge into a tangible centerpiece for my engineering portfolio that showcases my complete technical capability."
    },
    "y4-n3": {
        title: "Applying for Master's Programs or Preparing for Job Search",
        desc: "I will execute my post-graduation strategy based on my academic performance and career preferences. I will prepare strong applications for Master's programs or actively apply for professional industry roles.",
        smart: [
            "Apply for graduate programs or targeted full-time software engineering roles",
            "Submit at least 5 Master's applications or 20 job applications with interviews",
            "Utilizing past internships, project portfolios, and career center resources streamlines applying",
            "Aligning post-graduation steps with long-term goals ensures a smooth career transition",
            "Complete by the middle of Term 2 of Year 4"
        ],
        why: "Having a clear post-graduation execution plan prevents last-minute career uncertainty. Whether pursuing advanced specialization through a Master's program or entering the professional workforce directly, taking early, organized action ensures I secure an exciting, high-impact opportunity aligned with my growth aspirations right after graduation."
    },
    "y4-n4": {
        title: "Fulfilling Graduation Requirements and Reflecting on University Formation",
        desc: "I will complete all remaining degree requirements, present my overall portfolio, and evaluate my four-year development. I will transition smoothly from an engineering student into a confident computing professional.",
        smart: [
            "Audit all academic records to confirm completion of degree unit requirements",
            "Clear all graduation checks and complete a structured self-reflection on my development",
            "Regular communication with academic advisors ensures all unit requirements are met",
            "Formally completing all milestones marks the successful end of my undergraduate studies",
            "Complete by the official degree conferment date at the end of Year 4"
        ],
        why: "Reflecting on my overall progress allows me to recognize how much I have grown technically, personally, and socially. Successfully fulfilling all graduation milestones consolidates four years of hard work, cementing my identity as a well-rounded engineering professional ready to make meaningful contributions to society."
    }
};
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