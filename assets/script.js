var CODE_NAME_PLACEHOLDER = '{{CODE_NAME}}';

function toggleViewer() {
  var body = document.getElementById('cv-body');
  var arrow = document.getElementById('cv-arrow');
  var open = body.classList.toggle('open');
  arrow.classList.toggle('open', open);
}

function switchTab(name, el) {
  document.querySelectorAll('#code-viewer .cv-tab').forEach(function (t) { t.classList.remove('active'); });
  document.querySelectorAll('#code-viewer .cv-panel').forEach(function (p) { p.classList.remove('active'); });
  el.classList.add('active');
  document.getElementById('panel-' + name).classList.add('active');
}

function copyCode(panelId, btn) {
  var pre = document.querySelector('#' + panelId + ' pre');
  navigator.clipboard.writeText(pre.innerText).then(function () {
    btn.textContent = 'Copiado!';
    btn.classList.add('copied');
    setTimeout(function () { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
  });
}

function updateCodeName(value) {
  var display = value.trim() || CODE_NAME_PLACEHOLDER;
  document.querySelectorAll('.code-name-val').forEach(function (el) {
    el.textContent = display;
    el.classList.toggle('code-name-filled', !!value.trim());
  });
}
