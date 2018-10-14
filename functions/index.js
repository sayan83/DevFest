const functions = require('firebase-functions');
const {dialogflow, Suggestions, SignIn} = require('actions-on-google');
const app = dialogflow({
    clientId: '242511194767-gsd3p5kdhctaa21q82ad2p9apv7cn2or.apps.googleusercontent.com',
});
const reg = require('./register');
const prompt = require('./prompts');
const det = require('./details');
const organize = require('./organizer');
var repeat = 0;
app.intent('Default Welcome Intent', (conv) => {
    let date = new Date();
    var m,d,y,p = 0;
    m = date.getMonth()+1;
    d = date.getDate();
    y = date.getFullYear();
    console.log(date.getHours() + ' ' + date.getMinutes());
    console.log(`${d} ${m} ${y} `);
    if(y > 2018)
        p = 3;
    else if(m > 11)
        p = 3;
    else if(m < 11)
        p = 1;
    else if(d < 4)
        p = 1;
    else if(d > 4)
        p = 3;
    else
        p = 2;
    prompt.welcome(conv,p,repeat);
    repeat = 1;
});
app.intent('Gsignin' , conv => {
    conv.ask(new SignIn('Signin you in'));
});
app.intent('Getmail', conv => {
     const payload = conv.user.profile.payload;
    const email = payload.email;
    return reg.status(conv,email);
});
app.intent('type' , conv => {
    var email = conv.input.raw;
    return reg.status(conv,email);
});
app.intent('Register', (conv) => {
    reg.attendes(conv);
});
app.intent('Details', conv => {
    det.DevFestDetails(conv);
});
app.intent('Venue', conv => {
    det.venue(conv);
});  
app.intent('confirm', conv => {
     return reg.confirm(conv);
});
app.intent('organizer', conv=> {
    organize.org_list(conv);
});
app.intent('onClick', (conv, params, option) => {
    organize.details(conv,option);
});
app.intent('exit', conv => {
    repeat = 0;
    conv.close('Good Bye...');
});
app.intent('RV', conv => {
    organize.RC(conv);
});
app.intent('MB', conv => {
    organize.MB(conv);
});
app.intent('agenda', conv => {
    conv.ask('Agenda shall be available soon.');
    conv.ask(new Suggestions(['About Venue'],['Do something else'],['Exit']));
})
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);