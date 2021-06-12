$(function () {
    $(".btn1").click(function () {
        $(".btn2").css({
            "display": "none"
        })
        $(".btn1").css({
            "display": "none"
        })
        $(".qjttx").css({
            "display": "block"
        })
    })
    $(".btn2").click(function () {
        $(".btn2").css({
            "display": "none"
        })
        $(".btn1").css({
            "display": "none"
        })
        $(".jqhbtx").css({
            "display": "block"
        })
    })
    $(".tjqjt").click(function () {
        const vc_type = $(".vc_type").val() || "事假";
        const vc_begin = $(".vc_begin").val();
        const vc_name = $(".vc_name").val();
        const vc_bm = $(".vc_bm").val() || '2018级软件工程一班';
        const vc_class = $(".vc_class").val() || "18软工";
        const vc_end = $(".vc_end").val();
        const vc_long = $(".vc_long").val();
        const vc_address = $(".vc_address").val() || "福州";
        const vc_boss = $(".vc_boss").val();
        const vc_time = $(".vc_time").val();

        if (!vc_begin || !vc_end || !vc_long || !vc_boss || !vc_class || !vc_name || !vc_bm || !vc_time) {
            alert("请填写完整信息");
            return;
        }
        $(".qjttx").css({
            "display": "none"
        })
        $(".qjt").css({
            "display": "block"
        })

        $(".main_name").text(vc_class + vc_name + '的请假')
        $(".tjsj").text(vc_begin + " 12:16")
        $(".szbm").text(vc_bm)
        $(".qjlx").text(vc_type)
        $(".kssj").text(vc_begin)
        $(".jssj").text(vc_end)
        $(".qjsc").text(vc_long)
        $(".xxdz1").text(vc_address)
        $(".boss_name").text(vc_boss)
        $(".time").text("已同意 · " + vc_time + " 9:00")

    })
    $(".tjjqhb").click(function () {
        const vc_name = $(".vc_name2").val();
        const vc_xh = $(".vc_xh2").val();
        const vc_xb = $(".vc_xb2").val();
        const vc_bm = $(".vc_bm2").val() || '2018级软件工程一班';
        const vc_class = $(".vc_class2").val() || "18软工";
        const vc_xy = $(".vc_xy2").val() || "工学院";
        const vc_nj = $(".vc_nj2").val() || "2018级";
        const vc_begin = $(".vc_begin2").val();
        const vc_end = $(".vc_end2").val();
        const vc_lxdh = $(".vc_lxdh2").val();
        const vc_address = $(".vc_address2").val() || "福州";
        const vc_boss = $(".vc_boss2").val();
        const vc_zy = $(".vc_zy2").val() || "软件工程";
        const vc_time = $(".vc_time2").val();

        if (!vc_name || !vc_xh || !vc_xb || !vc_boss || !vc_begin || !vc_end || !vc_lxdh || !vc_time) {
            alert("请填写完整信息");
            return;
        }
        $(".jqhbtx").css({
            "display": "none"
        })
        $(".jqhb").css({
            "display": "block"
        })
        $(".wdjqqxhb").text(vc_class + vc_name + '的假期去向汇报')
        $(".wdtjsj").text(vc_begin + " 12:16")
        $(".wdszbm").text(vc_bm)
        $(".wdxy").text(vc_xy)
        $(".wdnj").text(vc_nj)
        $(".wdzy").text(vc_zy)
        $(".wdxh").text(vc_xh)
        $(".wdmz").text(vc_name)
        $(".wdxb").text(vc_xb)
        $(".wddh").text(vc_lxdh)
        $(".wddz").text(vc_address)
        $(".wdkssj").text(vc_begin)
        $(".wdjssj").text(vc_end)
        $(".boss_name").text(vc_boss)
        $(".time").text("已同意 · " + vc_time + " 9:00")
    })
    $(".vc_avater2").on('change', function () {
        const file = this.files[0];
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function () {
            $(".my_avater2").attr("src", fr.result)
        }
    })
    $(".vc_avater").on('change', function () {
        const file = this.files[0];
        const fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = function () {
            $(".my_avater").attr("src", fr.result)
        }
    })
})