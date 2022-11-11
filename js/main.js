//科目登録ボタンで登録された情報を出番順の領域に反映
$(function(){
    //科目登録ボタンをクリックしたら情報を取得
    $('#set_create').on('click', function() {
        let contest_name = $("#contest_name").val();

        // 取得した情報をオブジェクトにして格納
        let contest_data_obj = {
        contest_name: $("#contest_name").val(),
        contest_date: $("#contest_date").val(),
        test_name: $('option:selected').text(),
        official_game: $('input[name="official_game"]:checked').val()
        };

    // オブジェクトをJSON形式に変換
    var contest_data =JSON.stringify(contest_data_obj);
    // ローカルストレージに保存(大会名をキー、各値をバリュー)
    localStorage.setItem(contest_name,contest_data);



    //JSONをオブジェクトに変換 ここからできてない

//全部リスト出す
    for(let i=0; i<localStorage.length;i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        var parsed_data = JSON.parse(value);



    // console.dir(parsed_data);

        // 最後の値を取り出す（まだ）
        const html = 
        parsed_data.contest_name +
        parsed_data.contest_date +
        parsed_data.test_name +
        parsed_data.official_game
        
        //表示させる
        $("#contest_data").append(html);
        
    };


    });
});



//全削除クリックイベント
$("#all_clear").on("click",function () {
    localStorage.clear();
    $("#contest_data").empty();
  });