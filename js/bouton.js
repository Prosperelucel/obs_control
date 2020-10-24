$(function() { //shorthand document.ready function

	$('#BOUTTON01').on('submit', function(e) { //use on if jQuery 1.7+
        e.preventDefault(); //prevent form from submitting
        var data = $("#BOUTTON01").serializeArray();
        SendCommands1();
    });	
	
	$('#BOUTTON02').on('submit', function(e) { //use on if jQuery 1.7+
	e.preventDefault(); //prevent form from submitting
	var data = $("#BOUTTON02").serializeArray();
	SendCommands2();
	});	

	
});


function SendCommands1() {
	setTimeout(function(){
		obs.send('SetSceneItemRender', {
			'scene-name': 'TEST_SCENE',
			'source': 'Source_Name',
			'render': true
		})
	}, 0);
	setTimeout(function(){
		obs.send('SetSceneItemRender', {
			'scene-name': 'TEST_SCENE',
			'source': 'Source_Name',
			'render': false
		})
	}, 5000);
		
}
	
function SendCommands2() {
	setTimeout(function(){
		obs.send('SetSceneItemRender', {
			'scene-name': 'TEST_SCENE',
			'source': 'Source_Name2',
			'render': true
		})
	}, 0);
	setTimeout(function(){
		obs.send('SetSceneItemRender', {
			'scene-name': 'Source_Name2',
			'source': 'caca',
			'render': false
		})
	}, 5000);
		
}
	