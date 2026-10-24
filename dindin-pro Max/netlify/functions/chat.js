// Conselheiro IA do DinDin Pro (Netlify Function)
// Configure em: Site configuration → Environment variables → ANTHROPIC_API_KEY
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Método não permitido' }) };
  }
  try {
    const { system, messages } = JSON.parse(event.body || '{}');
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-5-5',
        max_tokens: 700,
        system,
        messages: (messages || []).slice(-10)
      })
    });
    const data = await r.json();
    return { statusCode: r.status, headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Falha ao falar com a IA' }) };
  }
};
