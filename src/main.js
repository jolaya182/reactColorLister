alert("color lister");
function add2(num) {
  return num + 2;
}


add2(4);
$(document).ready(() => {
  $("#clownFish").draggable({

    drag(event) {
      functionDraggable();
    }, // end of drag event


  });// end of draggable
  $(".cat-body").droppable({
    drop(event, ui) {
      const cF = $('#clownFish');
      // cat should move the mouth
      liftMouth($(".cat-mouth"));
      // liftMouth catOpenMouth
      // narrowEyes
      unliftMouth($(".cat-mouth"));
      // unnarroweEyes

      cF.fadeOut(500);
      setTimeout(() => { const cF = $('#clownFish'); bringFood(cF); }, 1000);
    }, // end of drop event
  });

  function bringFood(cF) {
    cF.show();
    cF.css({ top: 0, left: 0 });
  }// end of bringFood

  let functionDraggable = function (element) {
    const cF = $('#clownFish');
    const catF = $('.cat-body');
    const objMiddle = catF.offset().left + catF.width() / 2;
    const clownMiddle = cF.offset().left + cF.width() / 2;


    // console.log("objMiddle:" + objMiddle + " clownMiddle:" +clownMiddle);

    if (clownMiddle >= objMiddle) {
      cF.removeClass("flip");
    } else {
      cF.addClass("flip");
    }// end of if
  };// end of function

  function liftMouth(theCatFaceObj) {
    const cfo = $(theCatFaceObj);
    cfo.animate({ top: "-=30px" }, "slow");
  }// end of catOpenMouth

  unliftMouth;

  function unliftMouth(theCatFaceObj) {
    const cfo = $(theCatFaceObj);
    cfo.animate({ top: "+=30px" }, "slow");
  }// end of catOpenMouth
});// end of jquery

