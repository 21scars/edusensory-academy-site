(function(){
  fetch('content.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():null}).then(function(d){
    if(!d||!d.fields)return;
    d.fields.forEach(function(f){
      var el=document.querySelector('[data-cms="'+f.key+'"]');
      if(el&&el.textContent!==f.value)el.textContent=f.value;
    });
  }).catch(function(){});
})();
