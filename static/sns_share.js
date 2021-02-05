const url_default_ks = "https://story.kakao.com/share?url=";
const url_default_fb = "https://www.facebook.com/sharer/sharer.php?u=";
const url_default_tw_txt = "https://twitter.com/intent/tweet?text=";
const url_default_tw_url = "&url=";
const url_default_band = "http://band.us/plugin/share?body=";
const url_route_band = "&route=";
const url_default_naver = "http://share.naver.com/web/shareView.nhn?url=";
const title_default_naver = "&title=";
const url_this_page = location.href;
const title_this_page = document.title;
const url_combine_ks = url_default_ks + url_this_page;
const url_combine_fb = url_default_fb + url_this_page;
const url_combine_tw = url_default_tw_txt + document.title + url_default_tw_url + url_this_page;
const url_combine_band = url_default_band + encodeURI(url_this_page)+ '%0A' + encodeURI(title_this_page)+'%0A' + '&route=tistory.com';
const url_combine_naver = url_default_naver + encodeURI(url_this_page) + title_default_naver + encodeURI(title_this_page);


let fb_id = document.getElementById("fb_share_bt");
fb_id.addEventListener("click", function(){
    window.open(url_combine_fb, '', 'scrollbars=no, width=600, height=600'); return false;
});

let tw_id = document.getElementById("tw_share_bt");
tw_id.addEventListener("click", function(){
    window.open(url_combine_tw, '', 'scrollbars=no, width=600, height=600'); return false;
});

let ks_id = document.getElementById("kakao_story_share_bt");
ks_id.addEventListener("click", function(){
    window.open(url_combine_ks, '', 'scrollbars=no, width=600, height=600'); return false;
});

let naver_id =  document.getElementById("naver_share_bt");
naver_id.addEventListener("click", function(){
    window.open(url_combine_naver, '', 'scrollbars=no, width=600, height=600'); return false;
});

let naver_band_id = document.getElementById("naver_band_bt");
naver_band_id.addEventListener("click", function(){
    window.open(url_combine_band, '', 'scrollbars=no, width=584, height=635'); return false;
});


// 카카오톡 공유
Kakao.init('7ae890d720de6e8bed6fb71753cc563a');

function kSend(){

   let mobile_url = location.href;

   Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: title_this_page,
        description: title_this_page,
        imageUrl: 'https://event.burgerking.co.kr/gochujangbulgogi/img/thumb_kakao.png',
        link: {
          mobileWebUrl: mobile_url
        }
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: mobile_url,
            webUrl: url_this_page
          }
        }
       ]
    });
}  // kSend's end




// 카카오 공유
function fn_kSendEdge()
{
     kSend();   // 공유하자

    // if(device == 'pc'){
    //     alert("모바일에서만 공유가 가능합니다.");
    //     return;
    // }else {
    //     kSend();   // 공유하자
    // }

} // fn_kSendEdge's end


let kakaotalk_btn = document.getElementById("kakao_link_btn");
kakaotalk_btn.addEventListener("click", function(){
    fn_kSendEdge();
});
