# verify-slim
验证码，省市区三联级

这里在修改了原verify.js，在第12行，增加了vfinput.setAttribute("data-canvas",validate)，目的，判断输入与生成验证码的等值

***

#### 一、distpicker.js代码解析:

1.参数设置，第19行：
<pre><code>
    var DEFAULTS = {
        // Selects the districts automatically.
        // 0 -> Disable autoselect，禁用自动选择
        // 1 -> Autoselect province only，自动选择省
        // 2 -> Autoselect province and city only，自动选择省，市
        // 3 -> Autoselect all (province, city and district),自动选择省，市，区
        autoselect: 0,

        // Show placeholder.
        placeholder: true,

        // Select value. Options: 'name' and 'code'
        valueType: 'name',

        // Defines the initial value of province.省的初始值
        province: '--省--',

        // Defines the initial value of city.市的初始值
        city: '--市--',

        // Defines the initial value of district.区的初始值
        district: '--区--'
    };
</code></pre>

2.绑定在dom上的data-toggle使用,第4282行：
<pre><code>
    if (WINDOW.document) {
        $(function () {
            $('[data-toggle="' + NAMESPACE + '"]').distpicker();
        });
    }
</code></pre>

DOM结构：
[
    <div data-toggle="distpicker">
        <select id="province3" data-province="---- 选择省 ----"></select>
        <select id="city3" data-city="---- 选择市 ----"></select>
        <select id="district3" data-district="---- 选择区 ----"></select>
    </div>
]

[预览](https://besswang.github.io/verify-slim/index.html)
