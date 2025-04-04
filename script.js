async function sendNitroEmbed() {
  const webhookUrl = document.getElementById('webhookUrl').value.trim();
  const count = parseInt(document.getElementById('messageCount').value);

  if (!webhookUrl.startsWith("https://discord.com/api/webhooks/")) {
    alert("Invalid Discord webhook URL.");
    return;
  }

  if (isNaN(count) || count < 1 || count > 50) {
    alert("Please enter a number between 1 and 50.");
    return;
  }

  const embed = {
    title: "NITRORICH NITRO GEN!",
    description: "here is your free nitro code:)\n\nhttps://discord.gift/abcd1234efgh5678",
    color: 0x9b59b6,
    author: {
      name: "MADE BY NITRORICH"
    },
    footer: {
      text: "check the file:)"
    }
  };

  const payload = {
    embeds: [embed]
  };

  for (let i = 0; i < count; i++) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      console.log(`Embed ${i + 1} sent.`);
    } catch (error) {
      console.error("Error sending embed:", error);
      alert("Something went wrong. Check console for details.");
      break;
    }

    await new Promise(res => setTimeout(res, 500)); // delay to avoid rate limits
  }

  alert(`Sent ${count} embed message(s)!`);
}
