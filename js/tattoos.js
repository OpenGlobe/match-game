var allNames = ['blm', 'nps', 'bor'];

var origXPos = [];
var origYPos = [];
var attempts = 0;
var correct = 0;

var captions = [];
captions[0] = "Grand Canyon National Park is hailed as one of the Seven Wonders of the World.  Nearly five million people see the 1 mile deep Grand Canyon each year.";
captions[1] = "Grand Canyon National Park is hailed as one of the Seven Wonders of the World.  Nearly five million people see the 1 mile deep Grand Canyon each year.";
captions[2] = "A tattoo on the shoulder of Minnesota Timberwolves Dante Cunningham. It's a mixture of his astrological sign Taurus with tribal symbols in honor of his great grandmother who was Native American.";


function tattoosInit() {
	//console.log("ready");
	
	$("#detail").hide();
	$("#shareCon").hide();

	$( ".draggable" ).draggable({ revert: "valid" });
	$( ".droppable" ).droppable({
      hoverClass: "boxHover",
      drop: function( event, ui ) {
        $( this )
         var dragid = ui.draggable.attr("id").substring(1, ui.draggable.attr("id").length);
         var dropid = $(this).attr("id").substring(1, $(this).attr("id").length);
         var dataid = $(this).attr("data-id")
         if (dragid == dropid) {
	   			$("#" + dragid + "inside").css("display", "block");
				$("#t" + dropid + " .messageright").css("display", "inline").delay(1500).fadeOut( "slow" );
				ui.draggable.css("visibility", "hidden");
				attempts ++;
				correct ++;
				$("#numAttempts").text(attempts);
				$("#numCorrect").text(correct);
				showInfo(dataid);

				$(this).click(function() {
					showInfo(dataid);
				});

				if (correct == 10) {
					$("#share").text("It took you " + attempts + " attempts to match them all. Share your score!")
					$("shareBtns").html("hello world");
					$("#shareCon").show();
				}

	         } else {
	         	//console.log("wrong");
	         	$("#t" + dropid + " .messagewrong").css("display", "inline").delay(1500).fadeOut( "slow" );
	         	attempts ++;
	         	$("#numAttempts").text(attempts);
	         }
      	}
    });

    $( ".droppable2" ).droppable();

    $("#detail").click(function() {
		$("#detail").hide();
		$("#detail").animate({ opacity: '0' }, 500);
	});

} 

function showInfo(which) {
	$("#detail").show();
	$("#detail").animate({ opacity: '1' }, 500);
	$("#detail #desc").text(captions[which]);

	var img = new Image();
	img.src = "imgs/big-" + allNames[which] + ".jpg";
	$("#detail #photoCon").empty();
	$("#detail #photoCon").append(img);


}


$(document).ready(function() {
	tattoosInit();

});