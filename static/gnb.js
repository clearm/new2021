function fn_gnb()
{
    console.log("start");

    let gnb = document.querySelector("#gnb_menu");

    if(gnb == null){
        console.log("Make tag div gnb_menu ");
    }

    // let menus = '<ul>';
    // menus +='<li><a href="html_1.html"> HTML </a></li><li> <a href="webapi_1.html"> Web API </a> </li>';
    // menus +='<li><a href="css_list.html"> CSS </a> </li>';
    // menus +='<li><a href="javascript:alert(\'준비중\');"> My Post </a> </li>';
    // menus +='</ul>';

    let menus = '<ul>';
    menus +='<li><a href="profile.html"> About me </a></li>';
    menus +='<li> <a href="charactor.html"> 성격 </a> </li>';
    // menus +='<li><a href="css_list.html"> CSS </a> </li>';
    // menus +='<li><a href="javascript:alert(\'준비중\');"> My Post </a> </li>';
    menus +='</ul>';

    gnb.innerHTML = menus;
}

fn_gnb();
