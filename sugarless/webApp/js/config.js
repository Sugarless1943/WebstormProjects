/**
 * Created by yefan on 2017/7/16.
 */
/**
 * 导航栏的方法
 */
$('#headerNav ul li').bind('click',function(){
    var index = $(this).index();
    $('#js').empty();
    /**
     * js里采用对象写法,新点的时候就将对象置空,将内存释放掉
     */
    switch(index){
        case 0:
            var si1 = ['1-1','1-2','1-3'];
            makeSidebar(si1);
            $('#content').load('../tpl/page1/pa1_home.html',function(){
                $('#js').append('<script src="../js/page1/home.js"></script>')
            });
            break;
        case 1:
            var si2 = ['2-1','2-2','2-3'];
            makeSidebar(si2)
            $('#content').load('../tpl/page2/pa2_home.html',function(){
                $('#js').append('<script src="../js/page2/home.js"></script>')
            })
            break;
    }
});

/**
 *  生成sidebar的方法
 */
function makeSidebar(arr){
    $('#sidebar').empty();
    $('#sidebar').append('<ul></ul>');
    for(var i=0;i<arr.length;i++){
        $('#sidebar ul').append('<li>'+arr[i]+'</li>')
    }

    /**
     * content生成的页面
     */
    $('#sidebar ul li').bind('click',function(){
        console.log($(this).index());
    })
}



/**
 *  初始化
 */
$(function(){
    $('#headerNav ul li').first().trigger('click')
});