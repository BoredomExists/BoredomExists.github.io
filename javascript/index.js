"use strict";

$(document).ready(() => {
    alert("Use the buttons to view the other pages \n(Javascript is in use) \
            \n To view the latest assignment, use the left button.");

    //Variables for HTML elements
    const assignProblem = $("#assign-problem");
    const assignDiagram = $("#assign-diagram");
    const assignPersona = $("#assign-persona");
    const assignStory = $("#assign-story");
    const assignSketch = $("#assign-sketch");

    let pageCount = 0;

    //Fade Out elements that are not on the correct page.
    assignPersona.fadeOut(1);
    assignStory.fadeOut(1);
    assignSketch.fadeOut(1);

    //Here for better startup animation when loading site.
    assignProblem.removeClass("hidden").hide().fadeIn(2000);

    setTimeout(() => {
        $("#assign-diagram").removeClass("hidden").hide().fadeIn(2000);
    }, 1000)

    $("#leftButton").click(() => {
        pageCount -= 1;

        if (pageCount == 0) {
            assignPersona.fadeOut(1000);
            assignStory.fadeOut(1000);

            setTimeout(() => {
                assignProblem.hide().fadeIn(1000);
                assignDiagram.hide().fadeIn(1000);
            }, 1000)
        }
        else if(pageCount == 1)
        {
            assignSketch.fadeOut(1000);

            setTimeout(() => {
                assignPersona.removeClass("hidden").hide().fadeIn(1000);
                assignStory.removeClass("hidden").hide().fadeIn(1000);
            }, 1000)
        }
        else if(pageCount < 0)
        {
            pageCount = 2; //Sends the user to the last page | This changes everytime the website gains a new Page (2 Assignments per Page)

            assignProblem.fadeOut(1000);
            assignDiagram.fadeOut(1000);

            //This changes to the assignments on the last page | Changes the code to match the last assignment added
            setTimeout(() => {
                assignSketch.removeClass("hidden").fadeIn(1000);
            }, 1000);
        }
    })

    $("#rightButton").click(() => {
        pageCount += 1;

        if (pageCount == 1) {
            assignProblem.fadeOut(1000);
            assignDiagram.fadeOut(1000);

            setTimeout(() => {
                assignPersona.removeClass("hidden").hide().fadeIn(1000);
                assignStory.removeClass("hidden").fadeIn(1000);
            }, 1000)
        }
        else if (pageCount == 2)
        {
            assignPersona.fadeOut(1000);
            assignStory.fadeOut(1000);

            setTimeout(() => {
                assignSketch.removeClass("hidden").hide().fadeIn(1000);
            }, 1000)
        }
        else if(pageCount > 2) //This changes to last page number that exists | This changes everytime website the gains a new Page (2 Assignments per Page)
        {
            pageCount = 0; //Sends the user to the first page

            //These elements changes to the assignments on the last page
            assignSketch.fadeOut(1000);

            //This changes to the assignments on the first page
            setTimeout(() => {
                assignProblem.hide().fadeIn(1000);
                assignDiagram.hide().fadeIn(1000);
            }, 1000);
        }
    });
})