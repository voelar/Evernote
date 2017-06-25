var vm  = new Vue({
	el:"#app",
	data:{
		showLogin : true,
		showRegister : false,
		user : $('.user').val(),
		username : $('.username').value,
		userpass : $('.userpass').value,
		error : "",
		showError_01: false,
		showError_02: false,
		showError_03: false,
		isCheck : false
	},
	methods : {
		to_register : function () {
			this.showLogin = false;
			this.showRegister = true;
		},
		to_login : function () {
			this.showLogin = true;
			this.showRegister = false;
		},
		clickCreate : function (e) {
			var reg = /(\w[-\w.+]*@([A-Za-z0-9]+\.)+[A-Za-z]{2,14})|(0?(13|14|15|18)[0-9]{9})|([A-Za-z]+)/;
			var pasReg = /[A-Za-z0-9]{6,}/;
			this.showError_02 = true;
			this.showError_03 = true;
			reg.test(this.username) == true ? this.showError_02 = false :  this.error = "用户名不合法";
			pasReg.test(this.userpass) == true ? this.showError_03 = false :  this.error = "密码不通过";
			if (reg.test(this.username) == true && pasReg.test(this.userpass) == true) {
				$.cookie( ""+this.username+"", this.userpass, {path: "/", expires: 30,secure:true});
				this.to_login();
			};
			console.log( this.username);
		},
		clickContinue : function (e) {
			this.showError_01 = true;
			this.check();
			$.cookie(""+this.username+"") == null ? this.error = "用户名不正确或该用户不存在" : (this.user == this.username? this.showError_01 = false : this.error = "用户名不正确或该用户不存在");
			this.isCheck == true ? ($.cookie( ""+this.username+"", this.userpass, {path: "/", expires: 30,secure:true})) : $.cookie(""+this.username+"", null);

		},
		check : function () {
			this.isCheck = !this.isCheck;
		}
	}
})
