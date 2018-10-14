const {BasicCard,Button,Image,Suggestions} = require('actions-on-google');
module.exports = {
    DevFestDetails : function(conv) {
        conv.ask('Nice to see you');
    conv.ask(new BasicCard({
        text: `GDG DevFest 2018 is our annual all-day developer conference that offers speaker sessions 
        across multiple product areas. We are having many renowned speakers from throughout the country.`,
        subtitle: 'Date :- 3rd November 2018  Time : 9 AM - 6 PM',
        image: new Image({
            url: 'https://preview.ibb.co/fJWrTp/Whats-App-Image-2018-10-12-at-10-31-15.jpg',
            alt: 'DevFest18 Kolkata',
        }),
        // buttons : new Button({
        //     title : 'Visit Website',
        //     url : 'https://www.google.com',
        // }),
    }));
    conv.ask(new Suggestions(['About Venue'],['Join this Fest'],['Do something else'],['Exit']));
    },
    venue : function(conv) {
        conv.ask('Welcome to UEM Kolkata');
        conv.ask(new BasicCard({
        text: `The University of Engineering & Management (UEM), Kolkata is a private university located in Action Area - III of New Town, Kolkata. It provides engineering, technological & management education`,
        image: new Image({
            url: `https://thumb.ibb.co/gh4gB9/cropped-uem.png`,
            alt:  `UEM Kolkata`,
        }),
        buttons: new Button({
            title: 'Find UEM on Google Maps',
            url: `https://www.google.com/maps/search/?api=1&query=uem+kolkata`,
        }),
    }));
    conv.ask(new Suggestions(['Organizers'],['Do something else'],['Exit']));
    },
}