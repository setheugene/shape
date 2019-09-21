$(document).ready(function() {

    // let block = '<div>';
    // var i;
    // count=0;
    // total=25;
    // for(i=0;i<=total;i++){
    //     count++;
    // $("#container").html("<div class='block'>++");
    // $(".block").addClass('g'+count);
    
    // }

    var toAdd = document.createDocumentFragment();
for(var i=1; i < 101; i++){
   var newDiv = document.createElement('div');
   newDiv.id = 'b_'+i;
   newDiv.className = 'block';
   toAdd.appendChild(newDiv);
}

document.getElementById('shapes').appendChild(toAdd);

    // $("#container").addClass('block2');


    $(".block").click(function(){
        console.log('click');
        $(this).addClass('move');
    });
});