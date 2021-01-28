var userName = prompt('what is your name?');

alert('welcome '+ userName);

var message = '';
var userAge = prompt('how old are you?');
var sportPreference = prompt('Do you like sport?');
var sportPerforming = prompt('How many times aweek do you practice any sport?');

if (sportPerforming <=2){message = 'not enough';
}else {message = ' good, but you need more practice ';
} alert(message);

document.write('<p>'+ userName + '</p>');
document.write(message);

var practice = prompt ('Do you prefer to practice yoga or cardio?');
while(practice !=='yoga' && practice !=='cardio')
{practice = prompt ('please choose between yoga and cardio');}

var yourSport = '';



var imageNum = prompt('how many order would you like to print?');

if (practice ==='yoga'){yourSport='<img src="images/yoga.jpg" width="500px"/>';}
else if (practice ==='cardio'){yourSport='<img src="images/cardio.jpg" width="500px"/>';}

for(var i = 1 ; i<= imageNum ;i++){
    document.write (yourSport)

}

