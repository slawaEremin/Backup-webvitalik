<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title></title>
    <meta name="description" content="">
    <meta name="keywords" content="" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
	<link rel="stylesheet" href="/assets/css/base.css">
	<link rel="stylesheet" href="/assets/css/style.css">
    <link rel="shortcut icon" href="/assets/img/favicon.ico" type="image/x-icon" />

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="/assets/js/script.js"></script>
    <script src="/assets/js/respond.min.js"></script>

</head>
<body>
<?php
    $member_online = file_get_contents('http://faminta.com/social/get_people_online/');
    $member_obj = json_decode( $member_online);
    echo "<div id='list_user' style='display: none'>".$member_obj->list."</div>";
?>

<div class="wrap">
    <div class="content">
        <div class="content-preview js-preview">
            <div class="content-videobeseda js-center">
                <div class="content-inner">
                    <div class="logo">
                        <img src="/assets/img/videobeseda.png" alt="Видеобеседа - быстрые выдео знакомства">
                    </div>
                    <h1 class="title"><span class="inner-title">Видеобеседа</span> <i>быстрые видео знакомства</i></h1>
                    <a class="find-people js-showFlash" href="#">Найти собеседника</a>
                </div>
            </div>

            <?php
            $count = $member_obj->count;
            $list = explode(',', $member_obj->list);
            $online_member = 0;
            $max_member = 32;
            $user_list = array('user1','user2','user3','user4','user5','user6','user7','user8','user9','user10');
            $show_more = true;

            for ($i = 0, $n = count($list); $i < $n; $i++):
                if ($online_member > $max_member) break;

                $url = 'http://videobeseda.com/preview/' . $list[$i] . '.jpg';
                $headers = get_headers($url);

                if (strpos($headers[0], '200')) :
                    $online_member++;
                    ?>
                    <div class="content-item js-fluid" data-id="<?php echo $list[$i]; ?>">
                        <img src="<?php echo 'http://videobeseda.com/preview/' . $list[$i] . '.jpg' ?>" alt="">
                        <a class="find-buttom" href="#">Найти собеседника</a>
                        <div class="inner"></div>
                    </div>
                    <?php endif;

            endfor;

            if ($online_member < $max_member):

                $show_more = false;

                for ($i = 0, $n = ($max_member - $online_member); $i < $n; $i++) {
                    $image_user = '/assets/img/user' . ($i % 32) . '.jpg';?>

                    <div class="content-item js-fluid" data-id="1">
                        <img src="<?php echo $image_user ?>" alt="">
                        <a class="find-buttom" href="#">Найти собеседника</a>
                        <div class="inner"></div>
                    </div>

                    <?php } ?>
                <?php endif; ?>

        </div>
        <div class="content-flash js-flash">

            <div class="vrealetv-plugin" style="width:100%; height:100%">
                <object width="100%" height="100%"  classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">
                    <param name="allowScriptAccess" value="always" />
                    <param name="src" value="http://mrtigra.ru/l.swf?r=9a3a151e1c56187c5083ec65010a68a4&roulette=_definst_" />
                    <param name="allowscriptaccess" value="always" />
                    <param name="bgcolor" value="#F67D0F">
                    <embed id="flashcontent" width="100%" height="100%" name="flashcontent" type="application/x-shockwave-flash" src="http://mrtigra.ru/l.swf?r=9a3a151e1c56187c5083ec65010a68a4&roulette=_definst_" allowScriptAccess="always" allowscriptaccess="always" />
                </object>
            </div>
        </div>
    </div>
    <div class="clear"></div>
    <?php if ($show_more): ?>
    <a class="show-people" href="#">Показать еще</a>
    <?php endif; ?>
    <div class="footer">
        <div class="copyright">
<!--
            <div class="top"></div>
            <p>

            </p>
-->
        </div>
        <!--
        <div class="feedbacks">
            <div class="feedback-item">
                <div class="feedback-preview">
                    <img src="/assets/img/feed1.png#" alt="">
                </div>
                <div class="feedback-text">

                </div>
            </div>
            <div class="feedback-item">
                <div class="feedback-preview">
                    <img src="/assets/img/feed2.png" alt="">
                </div>
                <div class="feedback-text">

                </div>
            </div>
            <div class="feedback-item">
                <div class="feedback-preview">
                    <img src="/assets/img/feed3.png" alt="">
                </div>
                <div class="feedback-text">

                </div>
            </div>
            <div class="clear"></div>

            <a class="feedback-give" href="http://faminta.com/mainpage/page/support/?app=videoCR"><span>Оставить отзыв</span></a>
            <div class="bottom"></div>
        </div>-->

        <div class="copyright-bottom">
            <span class="title">Видеобеседа</span>
            <p>Видеобеседа™. All rights reserved.</p>
        </div>
        
    </div>
</div>

<script type="text/javascript">

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-33079146-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

</script>


<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter15943114 = new Ya.Metrika({id:15943114, enableAll: true});
            } catch(e) {}
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/15943114" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->






</body>
</html>
