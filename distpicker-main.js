$(function () {

  'use strict';
// 写法一
  var $distpicker = $('#distpicker');

  $distpicker.distpicker({
    province: '福建省',
    city: '厦门市',
    district: '思明区'
  });

//绑定的事件
    // 重置
  $('#reset').click(function () {
    $distpicker.distpicker('reset');
  });

  //重置到初始值
  $('#reset-deep').click(function () {
    $distpicker.distpicker('reset', true);
  });

  // 消灭联动
  $('#destroy').click(function () {
    $distpicker.distpicker('destroy');
  });

//写法二
  $('#distpicker3').distpicker({
      autoselect: 3,
      province: '浙江省',
      city: '杭州市',
      district: '西湖区'
  });

});
