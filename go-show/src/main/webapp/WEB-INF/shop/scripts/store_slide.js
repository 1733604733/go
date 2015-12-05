// �õ�Ƭ�¼�
$(window).load(function () {
    $('.flexslider').flexslider();
});
$(function () {

    /* ��ƷͼƬajax�ϴ� */
    var url = SITEURL + '/se/store/slide/imagesave';
    $('.ncsc-upload-btn').find('input[type="file"]').unbind().change(
        function () {
            var id = $(this).attr('id');
            var file_id = $(this).attr('file_id');
            ajaxFileUpload(url, id, file_id);
        });

    /* ɾ��ͼƬ */
    $('a[nctype="del"]').unbind().click(
        function () {
            var obj = $(this).parents('li');
            var file_id = obj.find('input[type="file"]').attr('file_id');
            var img_src = obj.find('input[type="hidden"]:first').val();
            obj.find('img:first').attr('src', SHOP_TEMPLATES_URL + "/img/loading.gif");
            $.getJSON('index.php?act=store_setting&op=dorp_img', {file_id: file_id, img_src: img_src}, function (data) {
                obj.find('img:first').replaceWith('<i class="icon-picture"></i>');
                obj.find('input[type="file"]').attr('file_id', '').end()
                    .find('input[type="hidden"]:first').val('');
            });
            $.getScript(SHOP_RESOURCE_SITE_URL + "/js/store_slide.js");
        });
});

/* ͼƬ�ϴ�ajax */
function ajaxFileUpload(url, id, file_id) {
    $('div[nctype="' + id + '"]').find('i').remove().end().find('img').remove()
        .end().prepend('<img nctype="' + id + '" scr="' + SHOP_TEMPLATES_URL + '/img/loading.gif">');
    $('img[nctype="' + id + '"]').attr('src', SHOP_TEMPLATES_URL + "/img/loading.gif");

    $.ajaxFileUpload
    (
        {
            url: url,
            secureuri: false,
            fileElementId: id,
            dataType: 'json',
            data: {name: 'logan', id: id, file_id: file_id},
            success: function (data, status) {
                if (typeof(data.error) != 'undefined') {
                    alert(data.error);
                    $('img[nctype="' + id + '"]').attr('src', UPLOAD_SITE_URL + '/' + ATTACH_COMMON + '/default_goods_image.gif');
                } else {
                    $('input[nctype="' + id + '"]').val(data.file_name).attr('file_id', data.file_id);
                    $('img[nctype="' + id + '"]').attr('src', UPLOAD_SITE_URL + '/' + data.file_name);
                    $('#' + id).attr('file_id', data.file_id);
                }
                var _store_slide = __uri("store_slide.js");
                //$.getScript("jquery.flexslider-min.js");
                $.getScript(_store_slide);
            },
            error: function (data, status, e) {
                alert(e);
                $.getScript(SHOP_RESOURCE_SITE_URL + "/js/store_slide.js");
            }
        }
    )
    return false;

}
