---
layout: default
title: "Contacto"
permalink: /contacto/
---
<div class="container" style="max-width:720px; padding: 48px 20px;">
  <h1 style="font-family:'Source Serif 4',serif;font-size:2rem;margin-bottom:8px;">📬 Contacto</h1>
  <p style="color:var(--text-secondary);margin-bottom:32px;">Tens alguma dúvida, sugestão ou proposta de parceria? Entra em contacto connosco!</p>
  
  <form id="contactForm" style="display:flex;flex-direction:column;gap:18px;">
    <div>
      <label style="display:block;font-weight:600;margin-bottom:6px;font-size:0.9rem;">Nome</label>
      <input type="text" name="nome" required placeholder="O teu nome"
        style="width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text);font-size:0.95rem;outline:none;">
    </div>
    <div>
      <label style="display:block;font-weight:600;margin-bottom:6px;font-size:0.9rem;">Email</label>
      <input type="email" name="email" required placeholder="o.teu@email.com"
        style="width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text);font-size:0.95rem;outline:none;">
    </div>
    <div>
      <label style="display:block;font-weight:600;margin-bottom:6px;font-size:0.9rem;">Mensagem</label>
      <textarea name="mensagem" required rows="6" placeholder="A tua mensagem..."
        style="width:100%;padding:12px 14px;border:1px solid var(--border);border-radius:8px;background:var(--bg-card);color:var(--text);font-size:0.95rem;outline:none;resize:vertical;"></textarea>
    </div>
    <button type="submit"
      style="background:var(--accent);color:white;border:none;padding:14px 28px;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;align-self:flex-start;transition:background 0.2s;">
      Enviar Mensagem →
    </button>
  </form>
  <p style="margin-top:24px;font-size:0.85rem;color:var(--text-muted);">
    💡 <strong>Nota:</strong> Para usar o formulário de contacto, podes configurar um serviço como <a href="https://formspree.io" target="_blank">Formspree</a> ou <a href="https://netlify.com/products/forms" target="_blank">Netlify Forms</a>. Instruções no documento de tutorial.
  </p>
</div>
