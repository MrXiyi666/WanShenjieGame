//=================================================================================================
// Fun_Event_Title_Show.js
//=================================================================================================
/*:
 * @target MZ
 * @plugindesc 窗口核心修改
 * @author 希夷先生
 *
 * @help
 * 插件功能：窗口核心修改
*/

(() => {
	const _Window_prototype__updatePauseSign = Window.prototype._updatePauseSign;
	Window.prototype._updatePauseSign = function() {
        //取消暂停标记
    };
	const _Window_Base_prototype_initialize = Window_Base.prototype.initialize;
	Window_Base.prototype.initialize = function(rect) {
		_Window_Base_prototype_initialize.call(this, rect);
		this.backOpacity=0;
		this.opacity = 0;
		this.frameVisible = false;
	};
	const _Window_Scrollable_prototype_updateArrows = Window_Scrollable.prototype.updateArrows;
	Window_Scrollable.prototype.updateArrows = function() {
        this.downArrowVisible = false;
        this.upArrowVisible = false;
    };
	const _Window_Selectable_prototype_drawBackgroundRect = Window_Selectable.prototype.drawBackgroundRect;
	Window_Selectable.prototype.drawBackgroundRect = function(rect) {
        
    };
	const _Scene_MenuBase_prototype_createBackground = Scene_MenuBase.prototype.createBackground;
	Scene_MenuBase.prototype.createBackground = function() {
		_Scene_MenuBase_prototype_createBackground.call(this);
        this._backgroundSprite.filters = null;
		this.setBackgroundOpacity(100);
    };
	
	const _Window_Message_prototype_initialize = Window_Message.prototype.initialize;
	Window_Message.prototype.initialize = function(rect) {
		_Window_Message_prototype_initialize.call(this, rect);
		this.backOpacity=100;
	};
	
	//保存数量
	const _DataManager_maxSavefiles = DataManager.maxSavefiles;
	DataManager.maxSavefiles = function() {
        return 3;
    };
})();


function 计算公式(a, b){
	let 使用者攻击力 = a.atk;
	let 敌人防御力 = b.def;
	if(a.level !== undefined && a.level !== null && a.level > 0 ){
	    使用者攻击力 = 使用者攻击力 + a.level;
	}
	使用者攻击力 = 使用者攻击力 + 使用者攻击力 * (a.hp / a.mhp);
	if(Math.random() < Math.min(a.luk, 999) / 999){
		使用者攻击力 = 使用者攻击力 * 2;
	}
	if(b.level !== undefined && b.level !== null && b.level > 0 ){
	    敌人防御力 = 敌人防御力 + b.level;
	}
	敌人防御力 = 敌人防御力 + 敌人防御力 * (b.hp / b.mhp);
	if(Math.random() < Math.min(b.luk, 999) / 999){
		敌人防御力 = 敌人防御力 * 2;
	}
	return Math.max(使用者攻击力 - 敌人防御力, 1);
}