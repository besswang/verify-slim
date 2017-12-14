// 图片压缩-start
function run(input_file,get_data){
    /*input_file：文件按钮对象*/
    /*get_data: 转换成功后执行的方法*/
    if ( typeof(FileReader) === 'undefined' ){
        alert("抱歉，你的浏览器不支持 FileReader，不能将图片转换为Base64，请使用现代浏览器操作！");
    } else {
        try{
            /*图片转Base64 核心代码*/
            var file = input_file.files[0];
            //这里我们判断下类型如果不是图片就返回 去掉就可以上传任意文件
            if(!/image\/\w+/.test(file.type)){
                alert("请确保文件为图像类型");
                return false;
            }
            var reader = new FileReader();
            reader.onload = function(){
                get_data(this.result);
            };
            reader.readAsDataURL(file);
        }catch (e){
        }
    }
}
// 图片压缩-end
//modal垂直居中-start
function centerModals() {
    $('#loadModal').each(function(i) {
        var $clone = $(this).clone().css('display','block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}
//modal垂直居中-end
// 隐藏loading
function hideModal(){
    $('#loadModal').modal('hide');
}
// 显示loading  
function showModal(){
    $('#loadModal').on('show.bs.modal', centerModals);
    $('#loadModal').modal({backdrop:'static',keyboard:false,show:true});
}
//modal垂直居中-end
$(function(){
    //页面大小变化是仍然保证模态框水平垂直居中
    $(window).on('resize', centerModals);
    //上传照片
    $("#u-btn1").change(function () {
        //转bese64
        run(this, function (bs_img) {
            $('#up-img').attr('src',bs_img);
            $('textarea').val(bs_img);
            console.log(bs_img);
            showModal();
            $.ajax({
                type: "POST",
                data:{base64_img:bs_img},
                url: "",
                dataType: "json",
                beforeSend: function(){
                    showModal();
                },
                success: function(data){
                    if (data){
                        hideModal();
                    }else{
                        hideModal();
                    }
                }
            });
        });
    });
})