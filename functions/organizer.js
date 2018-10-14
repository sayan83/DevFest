const {BasicCard,List,Suggestions,Image,Button} = require('actions-on-google');
const desc = {
    'GDG Kolkata' : `Google Developers Group Kolkata (GDG Kolkata) is for developers who are interested in Google's developer technology; everything from the Android, App Engine, and Google Chrome platforms, AI, TensorFlow, to product APIs like the Maps API, YouTube API, and Google Calendar API.`,
    'WTM Kolkata' : `Women Techmakers is continually launching global scalable initiatives and piloting new programs to support and empower women in the industry.`,
    'DSC Kolkata' : 'Developer Student Clubs- DSC Kolkata is a non- profit open community as well as college students club by Google Developers with a focus on enhancing web and mobile development skills of students.',
};
const btn_url = {
    'GDG Kolkata' : 'https://www.facebook.com/GDGKolkata/',
    'WTM Kolkata' : 'https://www.facebook.com/WTMKolkata/',
    'DSC Kolkata' : 'https://www.facebook.com/DSCKolkata/',
}
const url = {
    'GDG Kolkata' : 'https://thumb.ibb.co/iGaPg9/Screenshot-from-2018-10-12-23-29-13.png',
    'WTM Kolkata' : 'https://thumb.ibb.co/j9V719/Screenshot-from-2018-10-12-23-07-13.png',
    'DSC Kolkata' : 'https://thumb.ibb.co/fwtor9/35472574-750756781981925-8701584208184737792-n.jpg',
}
module.exports = {
    org_list : function(conv){
        if (!conv.surface.capabilities.has('actions.capability.SCREEN_OUTPUT')) {
            conv.ask('Sorry, try this on a screen device or select the ' +
              'phone surface in the simulator.');
            return;
          }
        conv.ask('Here is the list of all organizers.');
        conv.ask(new List({
        items : {
            ['GDG Kolkata']: {
                title : 'GDG Kolkata',
            },
            ['WTM Kolkata']: {
                title : 'WTM Kolkata',
            },
            ['DSC Kolkata']: {
                title : 'DSC Kolkata',
            },
        },
    }));
    conv.ask(new Suggestions(['Do something else'],['Exit']));
    },
    RC : function(conv) {
        conv.ask('Okay here is Rivu Chakabotry');
        conv.ask(new BasicCard({
            text: `Google Certified Associate Android Developer, Instructor at Caster.io.
            Sr. Software Engineer (Android) at Indus Net Technologies Pvt Ltd. Author of Reactive Programming in Kotlin, Functional Kotlin, Coroutines for Android Developers, and more.  A Kotlin and Android enthusiast and evangelist. DroidJam India speaker, community leader of GDG Kolkata and Kotlin Kolkata UG`,
            image: new Image({
                url: `https://thumb.ibb.co/cxMAM9/0.jpg`,
                alt: 'Rivu Chakabotry',
            }),
            buttons: new Button({
                title: 'View Linkedin Profile',
                url: 'https://www.linkedin.com/in/rivuchk/'
            }),
        }));
        conv.ask(new Suggestions(['About Manisha Biswas'],['Organizers'],['Do something else'],['Exit']));
    },
    MB : function(conv) {
        conv.ask('Okay here is Manisha Biswas');
        conv.ask(new BasicCard({
            text: `A Women Techmakers Lead and a Data Scientist, her inspiring ideas have made her an Intel Software Innovator. She's also an Author of significant works in her field.`,
            image: new Image({
                url: `https://thumb.ibb.co/fOvbB9/0-1.jpg`,
                alt: 'Manisha Biswas',
            }),
            buttons: new Button({
                title: 'View Linkedin Profile',
                url: 'https://www.linkedin.com/in/manisha-biswas-2a3228114/'
            }),
        }));
        conv.ask(new Suggestions(['About Rivu Chakabotry'],['Organizers'],['Do something else'],['Exit']));
    },
    details : function(conv,option){
        let nm = 'You did not select any item';
  if (option && desc.hasOwnProperty(option)) {
      conv.ask(`Here is ${option}`)
  conv.ask(new BasicCard({
      text: `${desc[option]}`,
      image : new Image({
          url: `${url[option]}`,
          alt: nm,
      }),
      buttons: new Button({
          title: 'Visit Facebook Page',
          url: `${btn_url[option]}`
      }),
  }));
  conv.ask(new Suggestions(['About Rivu Chakabotry'],['About Manisha Biswas'],['Do something else'],['Exit']));
    }
    }
}