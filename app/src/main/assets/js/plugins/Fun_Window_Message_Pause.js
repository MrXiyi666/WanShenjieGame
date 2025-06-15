
    var message_auto = false;     //是否启用文本停顿
    var message_time = 60;       //文本显示停顿时间
	const _Window_Message_prototype_update = Window_Message.prototype.update;
    Window_Message.prototype.update = function(){
		_Window_Message_prototype_update.call(this);
		if(!message_auto){
			return;
		}
		if(!this.pause){
			return;
		}
		message_time = message_time - 1;
		if(message_time > 0){
			return;
		}
        this.pause = false;
		this.terminateMessage();
		message_auto = false;
		message_time = 60;
    };
	
	const _Window_Message_prototype_terminateMessage = Window_Message.prototype.terminateMessage;
	Window_Message.prototype.terminateMessage = function() {
        _Window_Message_prototype_terminateMessage.call(this);
		message_auto = false;
		message_time = 60;
    };
	
    function 启用文本自动(){
		message_time = 60;
	    message_auto = true;
    };