'use strict';

angular.module('myApp', [])

  .controller('formCtrl', function($scope) {
    var items=[];
    $scope.loadFlag=0;
    $scope.item = {};

    $scope.display = function(){
      if($scope.loadFlag === 0){
        return "fragmentForm.html"
      }
      else{
        return "fragmentPlay.html"
      }
    };
    
    $scope.saveData = function() {
      $scope.item.edit = 'save/play';
      $scope.item.del = 'delete';
      items.push($scope.item);
      console.log('printing for Angular App: ',$scope.item);
      $scope.loadFlag=1;
      var new_src="http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4";
      //Insert segments into the table
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
      var col = $(this).parent().children().index($(this));
      var row = $(this).parent().parent().children().index($(this).parent());
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

    }; 

    $scope.getForm = function(){
      $scope.loadFlag=0;
      console.log($scope.loadFlag);
    };
            
  });
