<?php
    if (isset($_POST['list'])){
        $member_online = file_get_contents('http://test.faminta.com/social/get_people_online/');
        $member_obj = json_decode( $member_online);

        $old_users =  explode(',', $_POST['list']);
        $new_users = explode(',', $member_obj->list);
        $users = array();
        $max_users = 36;

        for ($i = 0, $n = count($new_users); $i < $n; $i++){
            if ( !in_array($new_users[$i], $old_users)){
                $url = 'http://videobeseda.com/previewTest/' . $new_users[$i] . '.jpg';
                $headers = get_headers($url);

                if (strpos($headers[0], '200')) {
                    if (count($users) > $max_users) break;

                    array_push($users, $new_users[$i]);

                }
            }
        }

        if ( count($users) > 0){
        for ($i = 0, $n = count($users); $i < $n; $i++){?>
            <div class="content-item js-fluid" data-id="<?php echo $users[$i]; ?>">
                <img src="<?php echo 'http://videobeseda.com/previewTest/' . $users[$i] . '.jpg' ?>" alt="">
                <a class="find-buttom" href="#">Найти собеседника</a>
                <div class="inner"></div>
            </div>
           <? }

        }
    }

?>
