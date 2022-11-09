//科目登録ボタンで登録された情報を出番順の領域に反映
$(function(){
    //科目登録ボタンをクリックしたら情報を取得
    $('#set_create').on('click', function() {
        let contest_name = $("#contest_name").val();
        let contest_date = $("#contest_date").val();
        let test_name = $('option:selected').text();
        let official_game = $('input[name="official_game"]:checked').val();
    //情報をセット内のHTMLに反映
        $("#contest_data").text(`${contest_name}  ${contest_date} ${test_name} ${official_game}`);
    // 取得した情報をオブジェクトにして格納
        let contest_data_obj = {
        contest_name: $("#contest_name").val(),
        contest_date: $("#contest_date").val(),
        test_name: $('option:selected').text(),
        official_game: $('input[name="official_game"]:checked').val()
        };
    // JSON形式に変換
    localStorage.setItem("myObject", JSON.stringify(object));
    // ローカルストレージに保存(大会名をキー、各値をバリュー)
    localStorage.setItem(contest_name,contest_data);
    });
});


//出場者登録ボタンをクリックしたら情報を取得

//出場者登録ボタンで入力された情報を出番順に反映