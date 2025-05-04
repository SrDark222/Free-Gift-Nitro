const webhookUrl = 'https://discord.com/api/webhooks/1280941270138617957/e7v-FHCaX2LGwZZuKXhHTyBSCEa4vcPPPIeTsQISfv8WEJ5s0utTnnnQ5flRLYAu2ks3';

function sendWebhook() {
    const payload = {
        content: "Perfil de usuário trollado!",
        embeds: [{
            title: "Troll Discord",
            description: "Você acabou de ser trollado!",
            image: {
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3voBAjp5fj9i3GGkzbseedv4fHNiR5Twgw&s'
            },
            footer: {
                text: "Este é um troll"
            }
        }]
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => console.log('Webhook enviado com sucesso:', data))
    .catch(error => console.error('Erro ao enviar webhook:', error));
}

window.onload = () => sendWebhook();
