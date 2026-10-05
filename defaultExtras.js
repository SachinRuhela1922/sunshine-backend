// Default (demo) data for the sections that are editable from Admin panel.
// Keys missing in MongoDB are filled automatically from here (see deepFill in routes/api.js).
module.exports = {
  // ---- small home page texts ----
  home: {
    admissionText: 'Admissions open for 2026-27',
    whySubtitle: 'A school where children feel safe, stay curious and grow every single day.',
    differentSubtitle: 'Smart classrooms, real practical learning and a campus full of things to do. Tap any card to see what is inside.',
    campusSubtitle: 'Take a look around before you visit. Real classrooms, real play areas and real moments from a normal day at our school.',
    achieversSubtitle: 'Big wins from small hands. Meet the students who made us proud in studies, sports, arts and science this year.',
    visitSubtitle: 'The best way to know a school is to walk through it. Come see the classrooms, meet the teachers and ask us anything.',
    visitHoursText: 'Monday to Saturday, 9:00 AM to 1:00 PM'
  },

  // ---- Leadership: Director, Principal, Vice Principal (all editable from Admin) ----
  // "achievements" = one per line, optional "Title | detail" format. Photo empty = animated monogram.
  leadershipInfo: {
    title: 'Our Leadership',
    subtitle: 'The people who guide Sunshine School every day with vision, discipline and a lot of heart. Tap a card to see what each of them has done for our school.'
  },
  leadership: [
    {
      role: 'Director', name: 'Mr. Vikram Singh Rathore', image: '',
      qualification: 'M.A., B.Ed., M.B.A. (Education Management)', experience: '30+ years in education', joined: 'Founder, since 2003',
      quote: 'A school is not built with bricks. It is built with the dreams of every child who walks in.',
      message: 'When we opened our doors on 4 July 2003, we had a few classrooms and one big promise: every child in this city deserves a joyful, honest and world-class education.\nToday that promise lives in our smart classrooms, our labs, our playgrounds and, most of all, in our students. We will keep growing, but we will never stop putting children first.',
      achievements: 'Founded Sunshine School on 4 July 2003 | Started with a small building and a big dream of quality education for every child.\nBuilt a modern campus | Added smart classrooms, science labs, a library and a large sports ground over the years.\nScholarship programme | Started merit and need-based scholarships so that no talented child is left behind.\nSafe campus initiative | Brought in CCTV, verified staff and a safe school transport system.',
      f1v: '2003', f1l: 'School founded', f2v: '1500+', f2l: 'Students today', f3v: '120+', f3l: 'Awards won'
    },
    {
      role: 'Principal', name: 'Mrs. Anita Sharma', image: '',
      qualification: 'M.Sc., M.Ed., Ph.D. (Education)', experience: '25 years of teaching and leadership', joined: 'Principal since 2008',
      quote: 'Every child can shine. Our job is to find the light and help it grow.',
      message: 'Academics matter, but character matters more. At Sunshine we want children who are curious, kind and confident, who can answer a question and also ask a better one.\nOur teachers work as one family with parents. Come, visit us, and see how learning feels when children are happy to be at school.',
      achievements: 'Consistent top board results | Led the school to excellent results year after year, with many students scoring above 90%.\nActivity-based learning | Introduced experiments, projects and storytelling in every class from nursery to senior school.\nTeacher training | Started regular workshops each term so that every teacher stays updated with modern methods.\nAwards and recognition | Guided students to 120+ district, state and national level awards.',
      f1v: '25', f1l: 'Years of experience', f2v: '98%', f2l: 'Board pass results', f3v: '80+', f3l: 'Teachers mentored'
    },
    {
      role: 'Vice Principal', name: 'Mrs. Kavita Singh', image: '',
      qualification: 'M.A., B.Ed.', experience: '18 years of teaching and administration', joined: 'Vice Principal since 2014',
      quote: 'Discipline and kindness are not opposites. The best classrooms have both.',
      message: 'I work closely with students, teachers and parents on a daily basis, and I believe small things done well every day create a great school.\nFrom a smooth timetable to a friendly corridor, we make sure that every child feels heard, safe and encouraged.',
      achievements: 'Smooth school systems | Redesigned the timetable, attendance and discipline process so that the school day runs on time.\nParent-teacher meetings | Started monthly parent-teacher meetings with clear progress reports for every child.\nHouse captains and prefects | Trains and mentors student leaders so they learn responsibility early.\nEvents and sports | Coordinates the annual day, sports day and inter-school competitions.',
      f1v: '18', f1l: 'Years of experience', f2v: '12', f2l: 'Events every year', f3v: '40+', f3l: 'Student leaders mentored'
    }
  ],

  // ---- Why Sunshine (4 cards) ----
  whyFeatures: [
    { title: 'Safe & Caring Environment', text: 'CCTV-monitored campus, verified staff and a warm, nurturing atmosphere where every child feels secure and valued.' },
    { title: 'Activity-Based Learning', text: 'Learning by doing: experiments, art, storytelling and play that turn curiosity into real understanding.' },
    { title: 'Experienced Teachers', text: 'Trained, passionate educators who know each child by name and guide them with patience and personal attention.' },
    { title: 'Holistic Development', text: 'Academics, sports, creativity and values together, so children grow confident in mind, body and character.' }
  ],

  // ---- Campus ----
  campusFacts: [
    { value: '5 acres', label: 'Green campus' },
    { value: '40+', label: 'Bright classrooms' },
    { value: '2 acres', label: 'Open play area' },
    { value: '12', label: 'Labs and special rooms' }
  ],
  campusDay: [
    { time: '8:15 AM', title: 'Arrival and assembly', text: 'Prayer, news and a thought for the day.' },
    { time: '9:00 AM', title: 'Morning lessons', text: 'Core subjects when minds are freshest.' },
    { time: '11:00 AM', title: 'Snack break', text: 'Healthy food and free play outside.' },
    { time: '11:30 AM', title: 'Activity period', text: 'Labs, art, music, sports or clubs.' },
    { time: '1:00 PM', title: 'Lunch and rest', text: 'Lunch together, then a quiet half hour.' },
    { time: '1:45 PM', title: 'Reading and projects', text: 'Library time and group work.' },
    { time: '2:30 PM', title: 'Dismissal', text: 'Supervised pick-up and bus departure.' }
  ],

  // ---- Little Achievers (images come from admin) ----
  tally: [
    { medal: 'gold', value: '42', label: 'Gold medals' },
    { medal: 'silver', value: '38', label: 'Silver medals' },
    { medal: 'bronze', value: '40', label: 'Bronze medals' },
    { medal: 'star', value: '120+', label: 'Prizes and awards' }
  ],
  spotlight: {
    name: 'Aarav Sharma', cls: 'Class 7', image: '',
    headline: 'Gold medal at the National Science Olympiad 2026',
    text: 'Aarav ranked first among thousands of students across the country. He prepared with his teachers after school, built three working models for practice and also helps younger students in the science club.',
    f1v: '1st', f1l: 'National rank', f2v: '98%', f2l: 'Annual score', f3v: '3', f3l: 'Models built'
  },
  achievers: [
    { name: 'Ananya Verma', cls: 'Class 5', title: 'Topper in Maths Olympiad', level: 'State', cat: 'Academics', year: '2026', medal: 'gold', image: '' },
    { name: 'Rohan Gupta', cls: 'Class 8', title: 'Spelling Bee champion', level: 'District', cat: 'Academics', year: '2026', medal: 'gold', image: '' },
    { name: 'Ishita Singh', cls: 'Class 3', title: 'Perfect score in English reading test', level: 'School', cat: 'Academics', year: '2026', medal: 'star', image: '' },
    { name: 'Kabir Mehta', cls: 'Class 6', title: 'Gold in 100 m race', level: 'District', cat: 'Sports', year: '2026', medal: 'gold', image: '' },
    { name: 'Diya Yadav', cls: 'Class 4', title: 'Silver in under-10 swimming', level: 'State', cat: 'Sports', year: '2026', medal: 'silver', image: '' },
    { name: 'Vihaan Khan', cls: 'Class 7', title: 'Best player, inter-school football', level: 'Zonal', cat: 'Sports', year: '2025', medal: 'bronze', image: '' },
    { name: 'Saanvi Joshi', cls: 'Class 2', title: 'First prize in drawing contest', level: 'City', cat: 'Arts', year: '2026', medal: 'gold', image: '' },
    { name: 'Arjun Patel', cls: 'Class 6', title: 'Winner, classical dance festival', level: 'State', cat: 'Arts', year: '2026', medal: 'gold', image: '' },
    { name: 'Myra Kapoor', cls: 'Class 5', title: 'Second place in solo singing', level: 'District', cat: 'Arts', year: '2025', medal: 'silver', image: '' },
    { name: 'Reyansh Tiwari', cls: 'Class 8', title: 'Innovation award for water-saving model', level: 'National', cat: 'Science', year: '2026', medal: 'gold', image: '' },
    { name: 'Navya Agarwal', cls: 'Class 7', title: 'Runner-up in Science Quiz', level: 'State', cat: 'Science', year: '2026', medal: 'silver', image: '' },
    { name: 'Advik Rao', cls: 'Class 4', title: 'Best project, Junior Science Fair', level: 'District', cat: 'Science', year: '2025', medal: 'bronze', image: '' }
  ],
  recognitions: [
    { title: 'Student of the Month', text: 'Chosen by teachers for effort, attitude and helpfulness.', recent: 'Ishita Singh, Class 3' },
    { title: 'Perfect Attendance', text: 'For students who did not miss a single day this year.', recent: '28 students this year' },
    { title: 'Kindness Award', text: 'For helping classmates and making others feel welcome.', recent: 'Diya Yadav, Class 4' },
    { title: 'Best Reader', text: 'For the most books read in our library challenge.', recent: 'Myra Kapoor, Class 5' },
    { title: 'Young Leader', text: 'For house captains and prefects who lead by example.', recent: 'Vihaan Khan, Class 7' },
    { title: 'Sportsmanship Award', text: 'For playing fair, winning kindly and losing gracefully.', recent: 'Kabir Mehta, Class 6' },
    { title: 'Creative Star', text: 'For original ideas in art, writing, music and projects.', recent: 'Saanvi Joshi, Class 2' },
    { title: 'Most Improved', text: 'For the biggest progress over the school year.', recent: 'Advik Rao, Class 4' }
  ],

  // ---- Visit section ----
  // open / close = 24h hour (e.g. 9 and 13). Leave both empty for a closed day.
  visitHours: [
    { day: 'Sunday', note: 'Closed', open: '', close: '' },
    { day: 'Monday', note: '9:00 AM to 1:00 PM', open: '9', close: '13' },
    { day: 'Tuesday', note: '9:00 AM to 1:00 PM', open: '9', close: '13' },
    { day: 'Wednesday', note: '9:00 AM to 1:00 PM', open: '9', close: '13' },
    { day: 'Thursday', note: '9:00 AM to 1:00 PM', open: '9', close: '13' },
    { day: 'Friday', note: '9:00 AM to 1:00 PM', open: '9', close: '13' },
    { day: 'Saturday', note: '9:00 AM to 12:00 PM', open: '9', close: '12' }
  ],
  visitReach: [
    { title: 'By road', text: 'Located on the main road, with parking space for visitors at the school gate.', meta: 'Free visitor parking' },
    { title: 'By bus or auto', text: 'City buses and autos stop right outside the school. Ask for the school stop.', meta: "Stop: 2 minutes' walk" },
    { title: 'By train', text: 'The nearest railway station is a short ride away. Autos and cabs are always available.', meta: 'Moradabad Junction, about 6 km' },
    { title: 'By air', text: 'The nearest airport is about 25 km from the school, around 45 minutes by car.', meta: 'Nearest airport, about 25 km' }
  ],
  visitSteps: [
    { title: 'Book your visit', text: 'Call us, message on WhatsApp or fill the form below and pick a day that suits you.' },
    { title: 'Tour the campus', text: 'Walk through classrooms, labs, library and the playground with a member of our team.' },
    { title: 'Meet the teachers', text: 'Talk to the principal and class teachers about how your child will learn.' },
    { title: 'Get admission help', text: 'We explain the process, fees and dates, and answer every question on the spot.' }
  ],
  visitBring: [
    { item: "Child's birth certificate" },
    { item: 'Parent ID proof and address proof' },
    { item: 'Recent passport-size photos of the child' },
    { item: 'Previous school report card (if applicable)' },
    { item: 'Transfer certificate (for Class 2 and above)' },
    { item: 'A list of your questions' }
  ],
  visitFaqs: [
    { q: 'Do I need an appointment to visit?', a: 'Walk-ins are welcome during visiting hours, but booking a slot means a teacher is free to show you around without waiting.' },
    { q: 'Can my child come along?', a: 'Yes, please bring your child. Younger children often enjoy the tour, and it helps us understand them better.' },
    { q: 'How long does a campus visit take?', a: 'A full tour with a short chat usually takes 45 minutes to one hour.' },
    { q: 'Can I meet the principal?', a: 'Yes. The principal meets parents by appointment during visiting hours. Mention this when you book.' },
    { q: 'Is there parking for visitors?', a: 'Yes, there is parking space near the main gate for cars and two-wheelers.' },
    { q: 'Can I visit on a Sunday or a holiday?', a: 'The school is closed on Sundays and public holidays. For special cases, call the office and we will try to help.' }
  ]
};
