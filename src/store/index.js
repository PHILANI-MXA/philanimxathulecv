import { createStore } from 'vuex';

export default createStore({
  state: {
    projects: [
      {
        Projectname: 'To do',
        title: 'This is my javascript project where a user can add in the list an item of their choice they can also delete',
		    category: 'Javascript',
        img: 'https://i.postimg.cc/QdbSN9N0/todo.png',
        github: 'https://github.com/PHILANI-MXA/TodoAppChallenge',
        live: 'https://bejewelled-sunflower-763e81.netlify.app/'
      },
   	{
		Projectname: 'Time Converter',
		title: 'This is my javascript project that allows a user to convert minutes to seconds.',
		category: 'Javascript',
     img: 'https://i.postimg.cc/WpFpc0p6/minutes-to-sec.png',
     github: 'https://github.com/PHILANI-MXA/time-converter',
    live: 'https://taupe-syrniki-941c55.netlify.app/'
      },
      	{
		Projectname: 'Property Listing',
		title: 'This is my Javascript project sales of properties',
		category: 'Javascript',
     img: 'https://i.postimg.cc/yxtkBTt2/Propertylisting.png',
     github: 'https://github.com/PHILANI-MXA/End-of-Mudule-Javascript',
    live: 'https://fantastic-duckanoo-062ed5.netlify.app/'
      },
        	{
		Projectname: 'Rainbow',
		title: 'Functioning calculator using Javascript',
		category: 'HTML',
     img: 'https://i.postimg.cc/xTjwSz2T/calxulator-save.png',
     github: 'https://github.com/PHILANI-MXA/Calculator_js',
    live: 'https://eloquent-mooncake-63cc2b.netlify.app'
      },
          	{
		Projectname: 'Rainbow',
		title: 'This is my rainbow project I have used CSS in this project',
		category: 'HTML',
     img: 'https://i.postimg.cc/nVWQT565/rainbow-activity.png',
     github: '',
    live: ''
      },
      {
        Projectname: 'Temp Converter',
        title: 'Tempereture converter',
        category: 'Javascript',
        img: 'https://i.postimg.cc/SR1zRMtb/convertertem.png',
        github: 'https://github.com/PHILANI-MXA/Temperature_conv',
        live: 'https://fancy-haupia-0fbf37.netlify.app'
      }
    ],
    WorkExperience: [
      {
        company: 'Department of Cultural Affairs and Sport',
        duration: 'April 2018 - March 2019',
        duties: 'Human Resource Admin support',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum dolores pariatur autem expedita fugiat quo nesciunt ullam odit consequuntur suscipit facere ad fuga, harum nostrum odio nulla amet, optio commodi accusamus ipsam vero provident voluptatibus. Laborum harum ex in!'
      },
      {
        company: 'Tradeway',
        duration: 'October 2019 - January 2020',
        duties: 'Marketing and Sales Assistant(Admin)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum dolores pariatur autem expedita fugiat quo nesciunt ullam odit consequuntur suscipit facere ad fuga, harum nostrum odio nulla amet, optio commodi accusamus ipsam vero provident voluptatibus. Laborum harum ex in!'
      },
      {
        company: 'British Airways Tobacco',
        duration: 'March 2020 - June 2020',
        duties: 'Promoter',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum dolores pariatur autem expedita fugiat quo nesciunt ullam odit consequuntur suscipit facere ad fuga, harum nostrum odio nulla amet, optio commodi accusamus ipsam vero provident voluptatibus. Laborum harum ex in!'
      },
      {
        company: 'Lifechoices Studio',
        duration: 'April 2022 - Present',
        duties: 'Creating Websites',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illum dolores pariatur autem expedita fugiat quo nesciunt ullam odit consequuntur suscipit facere ad fuga, harum nostrum odio nulla amet, optio commodi accusamus ipsam vero provident voluptatibus. Laborum harum ex in!'
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});
