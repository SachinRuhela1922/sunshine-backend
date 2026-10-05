const U = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`;
const base = {
  general: {
    schoolName: 'Sunshine School', tagline: 'Learn. Grow. Shine.', logo: '',
    established: '2003-07-04', // school founding date (YYYY-MM-DD). "Years of Excellence" is calculated from this.
    phone: '+91 98765 43210', email: 'info@sunshineschool.edu', address: 'Main Road, Moradabad, Uttar Pradesh, India',
    mapEmbed: '', facebook: '', instagram: '', youtube: ''
  },
  hero: {
    title: 'Welcome to Sunshine School', subtitle: 'Nurturing young minds with knowledge, values and creativity since 2003.',
    ctaText: 'Apply for Admission',
    video: 'https://res.cloudinary.com/demo/video/upload/dog.mp4',
    poster: U('photo-1503676260728-1c00da094a0b', 1400)
  },
  pages: {
    about: { title: 'About Us', subtitle: 'Know more about our school', banner: U('photo-1580582932707-520aed937b7b', 1400) },
    programs: { title: 'Our Programs', subtitle: 'Learning for every age', banner: U('photo-1427504494785-3a9ca7044f45', 1400) },
    facilities: { title: 'Facilities', subtitle: 'Everything students need to grow', banner: U('photo-1588072432836-e10032774350', 1400) },
    teachers: { title: 'Our Teachers', subtitle: 'Experienced and caring educators', banner: U('photo-1509062522246-3755977927d7', 1400) },
    gallery: { title: 'Gallery', subtitle: 'Moments from our campus', banner: U('photo-1523050854058-8df90110c9f1', 1400) },
    news: { title: 'School News', subtitle: 'Latest updates from Sunshine School', banner: U('photo-1497633762265-9d179a990aa6', 1400) },
    events: { title: 'Events', subtitle: 'Upcoming and past events', banner: U('photo-1546410531-bb4caa6b424d', 1400) },
    social: { title: 'Social Updates', subtitle: 'Our latest posts from Instagram and Facebook', banner: U('photo-1523050854058-8df90110c9f1', 1400) },
    contact: { title: 'Contact Us', subtitle: 'We would love to hear from you', banner: U('photo-1571260899304-425eee4c7efc', 1400) }
  },
  about: {
    title: 'About Our School',
    text: 'Sunshine School provides a safe, joyful and inspiring environment where every child can discover their potential. Our experienced teachers, modern classrooms and focus on activities help students grow academically and personally.',
    image: U('photo-1580582932707-520aed937b7b'),
    mission: 'To provide quality education that builds knowledge, character and confidence.',
    vision: 'To be a school where every child learns, grows and shines.'
  },
  stats: [
    { label: 'Students', value: '1500+' }, { label: 'Teachers', value: '80+' },
    { label: 'Years of Excellence', value: 'auto' }, { label: 'Awards', value: '120+' }
  ],
  programs: [
    { title: 'Pre-Primary', desc: 'Play-based learning for ages 3 to 5.', image: U('photo-1587654780291-39c9404d746b') },
    { title: 'Primary School', desc: 'Strong foundation in languages, maths and science.', image: U('photo-1427504494785-3a9ca7044f45') },
    { title: 'Secondary School', desc: 'Concept-based learning and career guidance.', image: U('photo-1509062522246-3755977927d7') }
  ],
  facilities: [
    { title: 'Smart Classrooms', desc: 'Digital boards and interactive learning.', image: U('photo-1588072432836-e10032774350') },
    { title: 'Science Labs', desc: 'Well equipped physics, chemistry and biology labs.', image: U('photo-1532094349884-543bc11b234d') },
    { title: 'Library', desc: 'Thousands of books and a quiet reading space.', image: U('photo-1481627834876-b7833e8f5570') },
    { title: 'Sports Ground', desc: 'Cricket, football, athletics and more.', image: U('photo-1461896836934-ffe607ba8211') }
  ],
  teachers: [
    { name: 'Mrs. Anita Sharma', role: 'Principal', image: U('photo-1580489944761-15a19d654956', 500) },
    { name: 'Mr. Rahul Verma', role: 'Mathematics', image: U('photo-1507003211169-0a1dd7228f2d', 500) },
    { name: 'Ms. Neha Gupta', role: 'English', image: U('photo-1438761681033-6461ffad8d80', 500) }
  ],
  gallery: [
    { image: U('photo-1503676260728-1c00da094a0b', 700), caption: 'Classroom' },
    { image: U('photo-1497633762265-9d179a990aa6', 700), caption: 'Reading time' },
    { image: U('photo-1523050854058-8df90110c9f1', 700), caption: 'Annual function' },
    { image: U('photo-1546410531-bb4caa6b424d', 700), caption: 'Learning' },
    { image: U('photo-1571260899304-425eee4c7efc', 700), caption: 'Sports day' },
    { image: U('photo-1509062522246-3755977927d7', 700), caption: 'Activities' }
  ],
  news: [
    { title: 'Students Win District Science Fair', date: '20 Sep 2026', desc: 'Our students secured first place with their water purification project.', image: U('photo-1532094349884-543bc11b234d') },
    { title: 'New Smart Classrooms Inaugurated', date: '02 Sep 2026', desc: 'Ten new smart classrooms are now open for students.', image: U('photo-1588072432836-e10032774350') },
    { title: 'Admissions Open for 2027', date: '01 Oct 2026', desc: 'Admissions for all classes are now open. Visit the school office.', image: U('photo-1503676260728-1c00da094a0b') }
  ],
  events: [
    { title: 'Annual Day Celebration', date: '15 Dec 2026', desc: 'Cultural programs and prize distribution.', image: U('photo-1523050854058-8df90110c9f1') },
    { title: 'Science Exhibition', date: '10 Nov 2026', desc: 'Students present their innovative projects.', image: U('photo-1532094349884-543bc11b234d') },
    { title: 'Sports Day', date: '20 Jan 2027', desc: 'Races, team games and medals for all houses.', image: U('photo-1571260899304-425eee4c7efc') }
  ],
  testimonials: [
    { name: 'Priya Singh', role: 'Parent', text: 'My child loves going to school every day. Teachers are caring and supportive.' },
    { name: 'Amit Kumar', role: 'Parent', text: 'Excellent academics along with sports and activities. Highly recommended.' }
  ]
};

// extra editable sections (achievers, campus, visit, home texts) live in defaultExtras.js
module.exports = { ...base, ...require('./defaultExtras') };
