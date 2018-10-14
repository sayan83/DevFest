const {BasicCard, Button ,Suggestions, Image} = require('actions-on-google')
const rp = require('request-promise');
module.exports = {
    attendes : function(conv) {
        conv.ask(`Just go to the link below and fill up the form`);
        conv.ask(new BasicCard({
            text: 'DevFest18 Kolkata',
            buttons: new Button({
                title: `REGISTER HERE`,
                url: 'https://goo.gl/forms/MttXS5YX8V5klLtf2',
            }),
            image: new Image({
                url: 'https://preview.ibb.co/fJWrTp/Whats-App-Image-2018-10-12-at-10-31-15.jpg',
                alt: 'DevFest18 Kolkata',
            }),
        }));
        conv.ask(new Suggestions(['Check Confirmation Status'],['About DevFest'],['Exit']));
    },
    confirm : function(conv) {
        const options={
            method:'GET',
            url : `https://sheets.googleapis.com/v4/spreadsheets/1CWaEJabvLmgoBsbco8FLi6GF9bMIXGkrwwHkuCQVo0U/values/E2?valueRenderOption=FORMATTED_VALUE&key=AIzaSyDSlSHTh0aIC5dIFnNI_Wzn5SXds1y-b_I`,
            json : true
        };
        var ch;
        return rp(options)
            .then(function(parseBody){
                ch = parseBody.values[0][0];
                console.log(ch);
                if (ch === 'FALSE') {
                    conv.close('Sorry list has not yet been published');
                    conv.ask(new Suggestions(['Organizers'],['Do something else'],['Exit']));
                }
                else
                {
                    conv.ask('Please enter the email address you have used for registration');
                    conv.ask(new Suggestions('Use my current gmail'));
                }
            return;
        }).catch(err=>{
            console.log("api error" + err);
        });
    },
    status : function(conv,email) {
        const options={
            method:'GET',
            url : `https://sheets.googleapis.com/v4/spreadsheets/1CWaEJabvLmgoBsbco8FLi6GF9bMIXGkrwwHkuCQVo0U/values/B2:C29?valueRenderOption=FORMATTED_VALUE&key=AIzaSyDSlSHTh0aIC5dIFnNI_Wzn5SXds1y-b_I`,
            json : true
        };
        var ch = 0;
        return rp(options)
            .then(function(parseBody){
                for(var i = 0;i<27;i++)
                {
                    if(parseBody.values[i][0] === email)
                    {
                        conv.ask('Congrats your registration is confirmed');
                        conv.ask(new BasicCard({
                            text : 'Click on the button below to get your ID card',
                            buttons : new Button({
                                title : `ID-CARD`,
                                url : `${parseBody.values[i][1]}`,
                            })
                        }));
                        conv.ask(new Suggestions(['Do something else'],['Exit']));
                        ch = 1;
                        break;
                    }
                }
                if(ch === 0)
                    {
                        conv.ask('Unfortunately you cannot attend DevFest');
                        conv.ask('However you can watch the live sessions here on the day of DevFest');
                        conv.ask(new Suggestions(['Browse talks'],['Do something else'],['Exit']));
                    }
            return;
        }).catch(err=>{
            console.log("api error" + err);
        });
    },
}