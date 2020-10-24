
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

const obs = new OBSWebSocket()
let obsConnected = false
let reconnectInterval = null
function ConnectOBS() {
  obs.connect({
	address: '192.168.1.10:4444',
	password: 'password'
  });
}
obs.on('ConnectionOpened', () => {
  clearInterval(reconnectInterval)
  reconnectInterval = null
  obsConnected = true
})
obs.on('ConnectionClosed', () => {
  obsConnected = false
  reconnectInterval = setInterval(() => {
	if (!obsConnected) {
	  ConnectOBS()
	}
  }, 5000);
})
ConnectOBS();
	
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
			'scene-name': 'TEST_SCENE',
			'source': 'Source_Name2',
			'render': false
		})
	}, 5000);
		
}
	