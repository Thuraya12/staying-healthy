var userName = prompt('what is your name?');

alert('welcome '+ userName);

var message = '';
var userAge = prompt('how old are you?');
var sportPreference = prompt('Do you like sport?');
var sportPerforming = prompt('How many times aweek do you practice any sport?');

if (sportPerforming <=2){message = 'not enough';
}else (sportPerforming >3); {message = ' good but you need more practice ';
} alert(message);

document.write('<p>'+ userName + '</p>');
document.write(message);