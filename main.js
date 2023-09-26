const fortune = [
'Delight the world with compassion, kindness and grace',
'The early bird gets the worm, but the second mouse gets the cheese.',
'Some days you are pigeon, some days you are statue. Today, bring umbrella.',
'The fortune you seek is in another cookie.',
'Be on the alert to recognize your prime at whatever time of your life it may occur.',
'Your reality check about to bounce.',
'Tension is who you think you should be. Relaxation is who you are.',
'When blind leading the blind……..get out of the way.',
'Everyone seems normal until you get to know them.',
'Only difference between rut and a grave is depth.',
'Experience is what you have left when everything else gone.',
'A closed mouth gathers no feet.',
'A conclusion is simply the place where you got tired of thinking.',
'A cynic is only a frustrated optimist.',
'A foolish man listens to his heart. A wise man listens to cookies.',
'Your road to glory will be rocky but fulfilling.',
'Courage is not simply one of the virtues, but the form of every virtue at the testing point.',
'Patience is your alley at the moment. Don\’t worry!',
'Nothing is impossible to a willing heart.',
'Don\’t worry about money. The best things in life are free.'
];

// Array to hold 6 randomly generated numbers between 1 and 100
const luckyNumbers = [];
const luckyNumberGenerator = () => Math.floor(Math.random()*100);

// Short and LT Outlook Variables
const nearOutlook = ['Positive', 'Negative', 'Stable', 'Unclear'];
const longTermOutlook = ['Positive', 'Negative', 'Stable', 'Unclear'];

console.log('Your fortune for today is:');
const TodaysFortune = fortune[Math.floor(Math.random()*fortune.length)]
console.log(TodaysFortune);

console.log('Your lucky numbers for today are:');
for(i=0; i<6; i++) {
    luckyNumbers.push(luckyNumberGenerator());
    }
console.log(luckyNumbers);