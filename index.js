const birthday_years = 3000;
const birthday_months = 12;
const birthday_days = 31;
var limitCt = 0;
window.onload = function() {
  // setInterval("sprinkle()", 1000);

  // const q_submit = document.createElement('div');
  const q_form = document.createElement('form');
  q_form.setAttribute("name", "form_name");
  q_form.setAttribute("id", "form_id");
  q_form.setAttribute("action", '');
  // q_submit.innerHTML = `<form name="form1" id="id_form1" action="">送信</form>`
  // document.body.appendChild(q_submit);
  document.body.appendChild(q_form);

  const q_birthday = document.createElement('a');
  q_birthday.innerHTML = `Q:あなたの生年月日を教えてください <br><br>`
  q_form.appendChild(q_birthday);

  const q_year = document.createElement('a');
  q_year.innerHTML = `・西暦何年生まれですか？ <br>`
  q_form.appendChild(q_year);

  let k = 0;
  for (let i = 1; i <= birthday_years; i++) {
    // selectChangeCt = Math.floor(Math.random()*10)+1
    // const radioForm = document.createElement('input');
    // div.id='black_rectangele_' + k;
    // div.classList.add('box');
    // div.classList.add('flex');
    // div.classList.add('change_ct_' + selectChangeCt);
    // radioForm.setAttribute("type", "radio");
    // radioForm.setAttribute("name", "year");
    // radioForm.insertAdjacentHTML('afterend','i + '年');
    const a = document.createElement('a');
    a.innerHTML = `<input type="radio" name="year" value=` + zeroPadding(i,4) + `年` + `>` + zeroPadding(i,4) + `年 `
    q_form.appendChild(a);
    // document.body.appendChild(radioForm);
    k++;
    if (k % 10 == 0) {
      const div_br = document.createElement('div');
      q_form.appendChild(div_br);
    }
  }

  const q_month = document.createElement('a');
  q_month.innerHTML = `<br>・何月生まれですか？ <br>`
  q_form.appendChild(q_month);

  k = 0;
  for (let i = 1; i <= birthday_months; i++) {
    const a = document.createElement('a');
    a.innerHTML = `<input type="radio" name="month" value=` + zeroPadding(i,2) + `月` + `>` + zeroPadding(i,2) + `月 `
    q_form.appendChild(a);
    // document.body.appendChild(radioForm);
    k++;
    if (k % 10 == 0) {
      const div_br = document.createElement('div');
      q_form.appendChild(div_br);
    }
  }

  const q_day = document.createElement('a');
  q_day.innerHTML = `<br><br>・何日生まれですか？ <br>`
  q_form.appendChild(q_day);

  k = 0;
  for (let i = 1; i <= birthday_days; i++) {
    const a = document.createElement('a');
    a.innerHTML = `<input type="radio" name="day" value=` + zeroPadding(i,2) + `日` + `>` + zeroPadding(i,2) + `日 `
    q_form.appendChild(a);
    // document.body.appendChild(radioForm);
    k++;
    if (k % 10 == 0) {
      const div_br = document.createElement('div');
      q_form.appendChild(div_br);
    }
  }

  const div_output = document.createElement('div');
  div_output.setAttribute("id", "output_id");
  q_form.appendChild(div_output);

  const q_submit = document.createElement('a');
  q_submit.innerHTML = `<br><br><input type="button" value="送信" onclick="submitBirthday()" >`
  q_form.appendChild(q_submit);

  // const q_submit = document.createElement('input');
  // q_submit.setAttribute("type", "submit");
  // q_submit.setAttribute("value", "送信");
  // q_submit.innerHTML = `<form name="form1" id="id_form1" action="">送信</form>`
  // document.body.appendChild(q_submit);
  // q_form.appendChild(q_submit);

}

function zeroPadding(num,length){
    return ('0000' + num).slice(-length);
}

function submitBirthday() {
  console.log( '呼ばれた' ) ;
  // form要素を取得
  var element = document.getElementById("form_id") ;
  // form要素内のラジオボタングループ(name="hoge")を取得
  var radioNodeListYear = element.year ;
  var radioNodeListMonth = element.month ;
  var radioNodeListDay = element.day ;

  // 選択状態の値(value)を取得 (Bが選択状態なら"b"が返る)
  var year_value = radioNodeListYear.value ;
  var month_value = radioNodeListMonth.value ;
  var day_value = radioNodeListDay.value ;

  var target = document.getElementById("output_id") ;
  if ( year_value === ""　|| month_value === "" || day_value === "" ) {
  	// 未選択状態
    target.innerText = ( `生年月日をそれぞれ選択してください` ) ;
  } else {
  	// aには選択状態の値が代入されている
    target.innerHTML = `<br>あなたの生年月日は` + year_value + month_value + day_value +
    　`ですね。<br>お疲れ様です。` ;
  }
}
