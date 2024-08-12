// ACtivity 1:
// Task 1:
let str1="hello how are You doing today.WOuld you like some tea."

const regex1=/You/g;
const match1=str1.match(regex1)
// [ 'You' ]
// Task 2:
let str2="hello how are You doing today.WOuld you like some tea.Today is 12th of August 10"

const regex2=/[0-9]+/g;
const match2=str2.match(regex2)
console.log(match2);
// Output:[ '12', '10' ]


// Activity 2
let str3="hello how are You doing today"
const regex3=/[A-Z][a-z]*/g;
const match_3=str3.match(regex3);
console.log(match_3);
// Output:[ 'You' ]

// Task 4:Match all the sequences of digits
let str4="hello how are You doing today"
let str4_2="today is august 12"
const regex4=/[0-9]+/g;
const match4=str4.match(regex4)
const match4_2=str4_2.match(regex4)
console.log(match4);// Output null
console.log(match4_2);
// [ '12' ]


// Activity 3
// Task 5:Regex for area code ,central office code ,us phone no.(123)456-7890
const str5="(123)456-7890"
const regex5=/\(([0-9]{3})\)([0-9]{3})\-([0-9]{4})/;
const match5=str5.match(regex5);
console.log(match5);
console.log("area code",match5[1]);
console.log("central code",match5[2]);
console.log("line number",match5[3]);

/*Output:
[
  '(123)456-7890',
  '123',
  '456',
  '7890',
  index: 0,
  input: '(123)456-7890',
  groups: undefined
]
 */
// Task 6:Email
const email="1234@nitkkr.ac.in"
const regex6=/([0-9]{4})(@)(nitkkr)(\.)(ac)(\.)(in)/;
const match6=email.match(regex6)
console.log(match6);
console.log("username",match6[1]);
console.log("domain",match6[3]+match6[4]+match6[5]+match6[6]+match6[7]);
// username 1234
// domain nitkkr.ac.in

/*
[
  '1234@nitkkr.ac.in',
  '1234',
  '@',
  'nitkkr',
  '.',
  'ac',
  '.',
  'in',
  index: 0,
  input: '1234@nitkkr.ac.in',
  groups: undefined
] */

// ACtivity 4
// TAsk 7: match the string at the start
const str7="Learning Javascript."
const regex7=/^Javascript/;
const match7=str7.match(regex7);
console.log(match7);
//null

// Task 8: MAtch a word at the end of the string

const str8="Learning Javascript."
const regex8=/Javascript\.$/;
const match8=str8.match(regex8);


console.log(match8);
/*OUtput:
[
  'Javascript.',
  index: 9,
  input: 'Learning Javascript.',
  groups: undefined
]*/

