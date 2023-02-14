
function handleSubmit(event) {
event.preventDefault()

const url = document.getElementById('url').value;

  const data = {
    url: url,
    name: document.getElementById('name').value
  };
const options = {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
};
  
  if (validateURL(url)) {
    console.log("::: Form Submitted :::")
  fetch('http://localhost:8080/test', options)
    .then(res => res.json())
      .then(function (res) {
        console.log(res)
        displayData(res['data'])
    })
  } else {
    alert('please enter a valid url to validate')
  }
  

            
}

function displayData(res) {
  // display the holder elements
  document.getElementById('results').style.display = 'block';
  document.getElementById('welcome').style.color = "green";
  document.getElementById('results').style.color = "rosybrown";
  document.getElementById('welcome').innerHTML = `Your result is ready!`


  document.getElementById('subjectivity').innerHTML = res.subjectivity;
  document.getElementById('agreement').innerHTML = res.agreement;
  document.getElementById('confidence').innerHTML = res.confidence;
  document.getElementById('irony').innerHTML = res.irony;
  document.getElementById('score_tag').innerHTML = res.score_tag;
  document.getElementById('credits').innerHTML = res.status['credits'];
  document.getElementById('model').innerHTML = res.model;
  document.getElementById('text_sample_1').innerHTML = res.sentence_list[0]['text'];
  document.getElementById('text_sample_2').innerHTML = res.sentence_list[1]['text'];
  document.getElementById('text_sample_3').innerHTML = res.sentence_list[2]['text'];
  document.getElementById('text_sample_4').innerHTML = res.sentence_list[3]['text'];
  document.getElementById('text_sample_5').innerHTML = res.sentence_list[4]['text'];
}


const pattern = new RegExp('^(https?:\\/\\/)?'+ '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+'((\\d{1,3}\\.){3}\\d{1,3}))'+'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+'(\\?[;&a-z\\d%_.~+=-]*)?'+'(\\#[-a-z\\d_]*)?$','i');
function validateURL(str) {
  return !!pattern.test(str);
}
export {validateURL, handleSubmit}