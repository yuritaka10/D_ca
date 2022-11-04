// 科目名選択
// https://www.sejuku.net/blog/44811

$('#kamoku').change(function() {
    const kamokumei = $('option:selected').text();
    // 上のtextをvalにすると数字で取得可能
    console.log(kamokumei);
})

$('kyougimei').change(function(){
    const kyougimei = $('kyougimei').text();
    console.log(kyougimei);
})
