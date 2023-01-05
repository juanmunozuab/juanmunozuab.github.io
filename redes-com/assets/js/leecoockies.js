var arr = document.cookie.split(';'),
    cookies = {};
for(var i=0; i < arr.length; i++){
  var parts = arr[i].split('=');
  if(parts.length !== 2) continue;
  cookies[parts[0].trim()] = parts[1];
  // document.getElementById('inicio').textContent = cookies['iniciojuego'];
  document.getElementById('seguir').textContent = cookies['siguiente'];
  document.getElementById('cancel').textContent = cookies['cancelar'];
  document.getElementById('acuerdo').textContent = cookies['deacuerdo'];
  document.getElementById('next').textContent = cookies['seguir'];

}
