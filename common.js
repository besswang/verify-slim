$(function(){
    'use strict';

    $("#btn").click(function () {
        var name = $("#name").val();
        var sex = $("#sex").val();
        var tel = $("#tel").val();
        var alias = $("#alias").val();

//            省市区
        $("#province6").val("辽宁省");
//注意：这里如果是 $("#province6").val("辽宁");是不显示内容的
        var provinceid = $("#province6 :selected").attr("data-code");

        $("#province6").trigger("change");
//在省重新赋值的时候，需要用trigger()方法，来触发select的change事件，否则回填的时候显示的是原来的值

        $("#city6").val('沈阳市');
        var cityid = $("#city6 :selected").attr("data-code");
        $("#city6").trigger("change");

        $("#district6").val("和平区");
        var districtid = $("#district6 :selected").attr("data-code");
        $("#district6").trigger("change");
        //这里要向后台提交省市区的val和id

        // 姓名
        if(!name){
            alert("请填写姓名");
            $('#name').focus();
            return false;
        }
        var reg = /^[\u4E00-\u9FA5]+$/;
        if(!reg.test(name)){
            alert("姓名必须是中文！");
            return false;
        }

        //手机号
        var telReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/;
        if (!telReg.test(tel)) {
            alert('请输入有效的手机号码！');
            $('#tel').focus();
            return false;
        }

        //简称
        if(!alias){
            alert("请填写简称");
            $('#alias').focus();
            return false;
        }
        if (!(alias.length > 3 && alias.length < 16)) {
            alert("简称长度在4-15之间");
            $('#alias').focus();
            return false;
        }
        var patrn=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;
        if(patrn.test(alias)){
            alert("商户简称含有非法字符！");
            return false;
        }
        console.log(name,sex,tel,alias);
    });
    //输入验证码失去焦点的时候
    $("#vfinput").blur(function () {
        //输入的验证码
        var inputCode = $("#vfinput").val();
        //生成的验证码
        var codeValue = $("#vfinput").attr("data-canvas");
        //非空
        if (inputCode.length <= 0) {
            alert("请输入验证码！");
            return false;
        }
        //不等，拓展：这里有忽略大小写toLowerCase()
        else if (inputCode.toLowerCase() != codeValue.toLowerCase()) {
            alert("验证码输入错误！");
            $("#vfinput").val("")
            return false;
        }
        else {
            alert("成功");
        }
    });
})