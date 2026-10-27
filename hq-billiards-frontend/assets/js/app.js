// Sidebar toggle (mobile)
const sb = document.getElementById('sideToggle'), side = document.getElementById('side');
if (sb && side) sb.addEventListener('click', () => side.classList.toggle('open'));

// Live session timer. DISPLAY ONLY: the final bill is always calculated by PHP on the server.
document.querySelectorAll('[data-timer]').forEach(el => {
  let secs = parseInt(el.dataset.elapsed, 10) || 0;
  const rate = parseFloat(el.dataset.rate) || 0;
  const costEl = document.getElementById(el.dataset.cost || '');
  const pad = n => String(n).padStart(2, '0');
  const draw = () => {
    el.textContent = pad(Math.floor(secs / 3600)) + ':' + pad(Math.floor(secs % 3600 / 60)) + ':' + pad(secs % 60);
    if (costEl) costEl.textContent = '₱' + (secs / 3600 * rate).toLocaleString('en-PH', {minimumFractionDigits: 2, maximumFractionDigits: 2});
  };
  draw();
  setInterval(() => { secs++; draw(); }, 1000);
});
