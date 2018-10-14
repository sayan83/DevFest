const {Suggestions,LinkOutSuggestion} = require('actions-on-google');
module.exports = {
    welcome : function (conv,p, repeat) {
        conv.ask('Welcome to DevFest 18 Kolkata.');
        if(p === 1)
        {
            if(repeat === 0) {
                conv.ask("Consider me your guide to DevFest 18 Kolkata. I can help you plan for DevFest by telling you when its happening or how to register for it");
            }
            else {
                conv.ask('What would you like to do');
            }
                conv.ask(new Suggestions(['Register Now'],['View Details'],['Organizers'],['About Venue'],['Agenda']));
                conv.ask(new LinkOutSuggestion({
                    name: 'View on meetup',
                    url: 'http://meetu.ps/e/FWMKj/Bg8Th/f',
                  }));
        }
        else if(p === 2)
        {
            if(repeat === 0) {
                conv.ask('As your guide I can help you browse through events or talks');
            }
            else {
                conv.ask('What would you like to do');
            }
                conv.ask(new Suggestions(['Show Talks'],['Show hands-on sessions'],['Organizers']));
        }
        else if(p === 3)
        {
            if(repeat === 0) {
                conv.ask('DevFest may be over, but there is plenty to explore. I can help you catch up anything you may have missed');
            }
            else {
                conv.ask('What would you like to do');
            }
                conv.ask(new Suggestions(['View Talks on Youtube'],['What was announced']));
        }
    }
}