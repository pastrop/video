$(document).ready(function(){
function mediaFragOne() {
    var video, sources, nav, buttons;
    video = document.querySelector('video#frag1');
    video_1 = document.querySelector('video#frag2');
    sources = video.getElementsByTagName('source');
    nav = document.querySelector('video#frag1+#nav_1');
    buttons = nav.getElementsByTagName('button');

    for (var i = buttons.length - 1; i >= 0; i--) {
        buttons[i].addEventListener('click', function() {
            for (var i = sources.length - 1; i >= 0; i--) {
                sources[i].setAttribute(
                    'src', (sources[i].getAttribute('data-original')
                    .concat('#t=' + this.getAttribute('data-start'))));
                    video.load();
                    video.play();
            };
        });
    }
}
mediaFragOne();

//Jquery based core business functionality

var new_src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4",
    el, el_video='', items=[];
$("#b1").on('click', function(){

  $('video#frag2').load();
  $('video#frag2').get(0).play();
     
});

$("#b2").on('click', function(){
  el_video=$('#second').detach();
  $('#section_1').append(el);      
});

$("#selector").on('submit', function(event) {
  event.preventDefault();
// Getting the segment info & storing it into the array      
    var id_= $('#id').val();
    var start_ = $('#start').val();
    var finish_ = $('#finish').val();
    var item = { idd: id_,
                 start: start_,
                 finish: finish_,
                 edit: 'save/play',
                 del: 'delete'};
    
    items.push(item);
//    console.log('print after pushing element in: ',items.length);

// displaying element into the table

var lowBound = items.length > 1 ? items.length-1 : 0;
for (var i = lowBound; i < items.length; i++) {
  var row='row'+i;
  $("tr").last().after("<tr><td contenteditable='true'>" + items[i].idd+ "</td><td contenteditable='true'>"
    + items[i].start +"</td><td contenteditable='true'>" 
    + items[i].finish +"</td><td class='ed'>"
    + items[i].edit +"</td><td class='de'>"+items[i].del+'</td></tr>');    
}  

//Search for a table cell being clicked for subsequent editing / segment reply / segment delete
$('td').unbind('click').click(function(event){
//  event.preventDefault();
//  event.stopPropagation();
  var col = $(this).parent().children().index($(this));
  var row = $(this).parent().parent().children().index($(this).parent());
//        var col = parseInt( $(this).index() ) + 1;
//        var row = parseInt( $(this).parent().index() )+1;
  console.log('Row: '+row, ', Column: ' + col);
//Segment Delete Functionality  
  if (col == '4'){
    console.log('delete operation');
    var row_delete=row;
    console.log('first print: ',items.length);
    items.splice(row-1, 1);
    console.log('items: ',items);
    console.log('second print: ',items.length);
    $('tr:eq('+row_delete+')').remove();
  } 
// Edit&Playback  
  if (col == '3'){
    var id_edit = $('td:eq('+(row-1)*5+')').html();
    var start_edit = $('td:eq('+((row-1)*5+1)+')').html();
    var finish_edit = $('td:eq('+((row-1)*5+2)+')').html();
    items[row-1].idd=id_edit;
    items[row-1].start=start_edit;
    items[row-1].finish=finish_edit;
    new_src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4"+'#t='+items[row-1].start+','+items[row-1].finish;
//    console.log('edits: ',id_edit,' ',start_edit,' ',finish_edit,' ',new_src);
    $('#second').find('source').attr("src", new_src);  //define video segment 
    $('video#frag2').load(); //load video segment 
    $('video#frag2').get(0).play(); //play it
  }
});

$("td").hover(function() {        
   $(this).addClass( "editing" );},function(){
    $(this).removeClass( "editing" ); 
});


//starting the video play - start button on video player
    el=$(this).detach();
    if(el_video){$('#section_1').append(el_video);}
    $('#second').show();
    new_src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4"+'#t='+item.start+','+item.finish;
//    console.log(new_src);
    $('#second').find('source').attr("src", new_src);
});
})