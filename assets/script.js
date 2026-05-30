// Small JS to handle form and tiny interactions
document.getElementById('year').textContent = "2084";

function handleSubmit(e){
  e.preventDefault();
  const f = e.target;
  const result = document.getElementById('form-result');
  const data = {
    name: f.name.value.trim(),
    email: f.email.value.trim(),
    message: f.message.value.trim()
  };
  result.textContent = 'Sending...';
  // Fake network delay to simulate enterprise pipeline
  setTimeout(()=>{
    result.textContent = `Thanks, ${data.name || 'human'}. We'll send a 12-point diagram to ${data.email || 'your inbox'}.`;
    f.reset();
  }, 900 + Math.random()*800);
}

function copyManifest(){
  const manifest = `FxAThn Manifesto:\n1. Instrument everything.\n2. Ship diagrams not excuses.\n3. Never say "works on my machine".`;
  navigator.clipboard?.writeText(manifest).then(()=>{
    const el = document.getElementById('form-result');
    if(el) el.textContent = 'Manifest copied to clipboard.';
  }).catch(()=>{
    alert('Copy failed — old browser energy.');
  });
}

// small progressive enhancement: auto-animate metric numbers
document.addEventListener('DOMContentLoaded', ()=>{
  const nums = document.querySelectorAll('.metrics li span');
  nums.forEach((el,i)=>{
    const v = el.textContent;
    let num = parseFloat(v) || 0;
    el.textContent = '0';
    let cur = 0;
    const step = Math.max(1, Math.round(num/30));
    const id = setInterval(()=>{
      cur += step;
      if(cur >= num){ el.textContent = v; clearInterval(id); }
      else el.textContent = cur;
    }, 25 + i*20);
  });
});

// Verify button handler for task force members
function verifyMember(btn){
  btn.classList.toggle('verified');
  const isVerified = btn.classList.contains('verified');
  btn.textContent = isVerified ? 'Verified' : 'Verify';
}
