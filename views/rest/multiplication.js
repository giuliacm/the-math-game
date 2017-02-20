/**
 * Created by giuliamattia on 2017-01-22.
 */

$(function () {

    var score = 0;

    var easy_level = 10;
    var med_level = 100;
    var hard_level = 300;

    var easy_points = 1;
    var med_points = 2;
    var hard_points = 3;


    $("#easy").click(function (e) {
        e.preventDefault();
        console.log('clicked easy');

        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

        generate_question(easy_level);
    });

    $("#medium").click(function (e) {
        e.preventDefault();
        console.log('clicked medium');

        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

        generate_question(med_level);
    });

    $("#hard").click(function (e) {
        e.preventDefault();
        console.log('clicked hard');

        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

        generate_question(hard_level);
    });


    function update_score(level) {
        if (level == easy_level) {
            score = score + easy_points;
        }
        else if (level == med_level) {
            score = score + med_points;
        }
        else if (level == hard_level) {
            score = score + hard_points;
        }


        document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';

    }



    function generate_answer(num1, num2) {
        return num1 * num2;
    }

    function generate_question(level) {
        var num1 = Math.floor((Math.random() * level) + 1);
        var num2 = Math.floor((Math.random() * level) + 1);
        var html = '<p align="center">' + num1 + ' x ' + num2 + ' = ' + '<input type="number" id="submitted_answer">'+  '<button type="button" id="submit">submit</button></p>';
        document.getElementById('game').innerHTML = html;

        var correct_answer = generate_answer(num1, num2);

        $("#submit").click(function (e) {
            e.preventDefault();
            var submitted = $("#submitted_answer").val();
            // console.log(submitted);

            if(typeof submitted != 'undefined' && submitted != null) {
                if (submitted == correct_answer) {
                    // $('#game').hide().delay(5000);
                    // $('#correct').show().delay(5000).fadeOut();
                    update_score(level);
                    generate_question(level);
                }
                else {
                    document.getElementById('game').innerHTML = '<p align="center">game over!</p>';
                    score = 0;
                    document.getElementById('score').innerHTML = '<p align="center">score:   ' + score + '</p>';
                }



            }

        });



    }






});