$(document).ready(() => {
  console.log('We did it!!')

$.ajax({
  method: 'GET',
  url: '/movie',
  success: success
})
function success(data){
  console.log("HELL YEA")
}
})
