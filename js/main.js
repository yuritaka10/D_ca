
// //科目登録ボタンをクリックしたら
// $("#set_create").on("click",function(){
//     // alert("セットクリエイトされたよ");
//     const contestDataObj ={
//         contest_name: $("#contest_name").val(),
//         contest_date: $("#contest_date").val(),
//         test_name: $('option:selected').text(),
//         official_game: $('input[name="official_game"]:checked').val()
//     };
//     // alert(contestDataObj); //取得情報確認
//     const contest_data =JSON.stringify(contestDataObj);
//     // alert(contest_data); //取得情報確認

//     //データ登録

//         // push準備
//     const newPostContest = push (dbRef);
//         //  DBに値をセット   
//     set(newPostContest, contest_data);



//     // //送信後に入力欄を空にする（操作性の向上）
//     // $("#contest_name").val("");
//     // $("#contest_date").val("");
//     // $('option:selected').text("");
//     // $('input[name="official_game"]:checked').val("");

//     // // カーソルを名前のところに移動する（操作性の向上）
//     // $("#contest_name").focus();

//     //ここからした消したらエラー出るからダメ
// });

// 以下講義内のコード

    // // 受信処理 functionの（）の中に入れた変数の中にデータが全部入る
    // onChildAdded(dbRef, function(data){
    //     // 受信処理が始まります
    //     // 登録されたデータを取得
    //     const msg = data.val();
    //     console.log(msg, '取得したデータの塊');
    //     const key = data.key;
    //     console.log(key, 'データの塊にアクセス');

    //     // テンプレートリテラル
    //     let h = `
    //     <div>
    //         <p>${msg.uname}</p>
    //         <p>${msg.text}</p>
    //     </div>
    //     `;
    //     $("#output").append(h);
    // })



//以下localstrageの時のコード
// //科目登録ボタンで登録された情報を出番順の領域に反映
// $(function(){
//     //科目登録ボタンをクリックしたら情報を取得
//     $('#set_create').on('click', function() {

//         // 取得した情報をオブジェクトにして格納
//         let contest_data_obj = {
//         contest_name: $("#contest_name").val(),
//         contest_date: $("#contest_date").val(),
//         test_name: $('option:selected').text(),
//         official_game: $('input[name="official_game"]:checked').val()
//         };

//     // オブジェクトをJSON形式に変換
//     var contest_data =JSON.stringify(contest_data_obj);
//     // ローカルストレージに保存(大会名をキー、各値をバリュー)
//     localStorage.setItem(contest_name,contest_data);



//     //JSONをオブジェクトに変換 ここからできてない

// //全部リスト出す
//     for(let i=0; i<localStorage.length;i++){
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);

//         var parsed_data = JSON.parse(value);



//     // console.dir(parsed_data);

//         // 最後の値を取り出す（まだ）
//         const html = 
//         parsed_data.contest_name +
//         parsed_data.contest_date +
//         parsed_data.test_name +
//         parsed_data.official_game
        
//         //表示させる
//         $("#contest_data").append(html);
        
//     };


//     });
// });



// //全削除クリックイベント
// $("#all_clear").on("click",function () {
//     localStorage.clear();
//     $("#contest_data").empty();
//   });