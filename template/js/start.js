//异步加载文章
jQuery(document).ready(function($) {
    //点击下一页的链接(即那个a标签)   
    $('.older_posts').click(function() {
        $this = $(this);
        $this.addClass('loading').text("正在努力加载"); //给a标签加载一个loading的class属性，可以用来添加一些加载效果   
        var href = $this.attr("href"); //获取下一页的链接地址   
        if (href != undefined) { //如果地址存在   
            $.ajax({ //发起ajax请求   
                url: href, //请求的地址就是下一页的链接   
                type: "get", //请求类型是get     
                error: function(request) {
                //如果发生错误怎么处理   
                },
                success: function(data) { //请求成功   
                    $this.removeClass('loading').text("点击查看更多"); //移除loading属性   
                    var $res = $(data).find(".index-posts .animated"); //从数据中挑出文章数据，请根据实际情况更改   
                    $('.index-posts').append($res.fadeIn(500)); //将数据加载加进posts-loop的标签中。   
                    var newhref = $(data).find(".older_posts").attr("href"); //找出新的下一页链接   
                    if (newhref != undefined) {
                        $(".older_posts").attr("href", newhref);
                    } else {
                        $(".older_posts").remove(); //如果没有下一页了，隐藏   
                    }
                }
            });
        }
        return false;
    });
});


function scream(){
    var headerhight = document.getElementById("head").clientHeight;
    var screenhight = $(window).height();
    document.getElementById("scream-mobile").style.height = screenhight - headerhight + "px";
}
scream();